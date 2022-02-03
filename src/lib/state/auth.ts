import { writable } from "svelte/store";

export const authUser = writable<string>(null);

const unsub = authUser.subscribe(username => console.log('authUser:', username));

authUser.set('nikola');
unsub();

authUser.set('tesla');

