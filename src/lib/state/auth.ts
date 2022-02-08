// import type { Subscriber, Unsubscriber, Updater, Writable } from 'svelte/store';

import { writable } from 'svelte/store';

// class SimpleStore<T> implements Writable<T> {
// 	private _value: T;
// 	private _listeners: Subscriber<T>[];

// 	constructor(initialValue: T) {
// 		this._value = initialValue;
// 		this._listeners = [];
// 	}

// 	set(nextValue: T): void {
// 		this._value = nextValue;
// 		this._listeners.forEach((listener) => listener(nextValue));
// 	}

// 	update(updater: Updater<T>): void {
// 		const nextValue = updater(this._value);
// 		this.set(nextValue);
// 	}

// 	subscribe(listner: Subscriber<T>, invalidate?: (value?: T) => void): Unsubscriber {
// 		this._listeners.push(listner);
// 		return () => {
// 			const index = this._listeners.indexOf(listner);
// 			if (index >= 0) {
// 				this._listeners.splice(index);
// 			}
// 		};
// 	}
// }

export const authUser = writable<string>('Nikola Tesla');

authUser.subscribe((username) => console.log('authUser:', username));
