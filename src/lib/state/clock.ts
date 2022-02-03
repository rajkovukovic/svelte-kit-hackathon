import { derived, readable } from 'svelte/store';
import { authUser } from '$lib/state/auth';

export const clock = readable(
	new Date(),

	function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1000);

		return function stop() {
			clearInterval(interval);
		};
	}
);

const appStartTime = new Date();

export const usernamePlusElapsed = derived(
	[clock, authUser],
	([currentTime, username]) =>
		username + ': ' + (currentTime.getSeconds() - appStartTime.getSeconds())
);
