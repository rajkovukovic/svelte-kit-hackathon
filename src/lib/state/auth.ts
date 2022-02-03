import { writable } from "svelte/store";

export const authUser = writable<string>(null);

authUser.subscribe(username => console.log('authUser:', username));