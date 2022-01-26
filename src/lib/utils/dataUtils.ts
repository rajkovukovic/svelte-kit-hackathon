export function delayPromise<T>(milliseconds: number): (T) => Promise<T> {
	return (result: T) => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(result), milliseconds);
		});
	};
}

export function randomDelayPromise<T>(
	millisecondsMin: number,
	millisecondsMax: number
): (T) => Promise<T> {
	return delayPromise(millisecondsMin + Math.random() * (millisecondsMax - millisecondsMin));
}

export function fetchUsers(): Promise<Record<string, any>[]> {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(randomDelayPromise<Response>(500, 1000))
		.then((response) => {
			if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
			return response.json();
		});
}

export function fetchOneUser(id: string): Promise<Record<string, any>> {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(randomDelayPromise<Response>(500, 1000))
		.then((response) => {
			if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
			return response.json();
		});
}

export function fetchUserPosts(userId: string): Promise<Record<string, any>[]> {
	return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
		.then(randomDelayPromise<Response>(500, 1000))
		.then((response) => {
			if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
			return response.json();
		});
}
