<script lang="ts">
	import { page } from '$app/stores';
	import type User from '$lib/models/User';
	import * as dataUtils from '$lib/utils/dataUtils';
	import UserCard from '$lib/widgets/UserCard.svelte';

	$: userId = $page.params.userId;
	$: userIdAsNumber = parseInt(userId);

	let user: User;
	let userPending = false;
	let userError: Error = null;

	$: fetchUser(userId);

	function fetchUser(userIdToFetch: string) {
		userPending = true;
		userError = null;
		dataUtils
			.fetchOneUser(userIdToFetch)
			.then((response) => (user = response as any))
			.catch((error) => (userError = error))
			.finally(() => (userPending = false));
	}
</script>

<!-- navigation arrows -->
<div>
	<a href="/users/{userIdAsNumber - 1}">&#8249;</a>
	<a href="/users/{userIdAsNumber + 1}">&#8250;</a>
</div>

{#if userError}
	{userError}
{:else if userPending}
	Loading user with id {userId}...
{:else}
	<UserCard id={user.id} name={user.name} />
{/if}

<style>
	a {
		display: inline-block;
		padding: 1ch 1em;
	}
</style>
