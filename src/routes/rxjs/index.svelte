<script lang="ts">
	import { interval, switchMap } from 'rxjs';
	import { watch } from 'rxjs-watcher';

	function fakeFetchUser(userId: number, minDelay: number, maxDelay: number): Promise<string> {
		const delay = minDelay + Math.random() * (maxDelay - minDelay);
		return new Promise((resolve) => {
			setTimeout(() => resolve(`User-${userId}`), delay);
		});
	}

	const stream = interval(1000).pipe(
		watch('Interval(1000)', 10) as any,
		switchMap((value: number) => fakeFetchUser(value, 500, 1500)),
		watch('switchMap', 10) as any
	);
</script>

<h2>{$stream}</h2>
