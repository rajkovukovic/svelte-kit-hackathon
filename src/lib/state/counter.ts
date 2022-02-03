import { writable } from 'svelte/store';

function createCounter() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((value) => value + 1),
		decrement: () => update((value) => value - 1),
		reset: () => set(0)
	};
}

export const counter = createCounter();
