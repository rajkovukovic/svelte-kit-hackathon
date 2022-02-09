<script lang="ts">
	import { page } from '$app/stores';
	import type User from '$lib/models/User';
	import * as dataUtils from '$lib/utils/dataUtils';
	import UserCard from '$lib/widgets/UserCard.svelte';
	import { Observable, Subject, switchMap } from 'rxjs';
	import { watch } from 'rxjs-watcher';

	const userId = new Subject<string>();
	$: userId.next($page.params.userId);

	$: userIdAsNumber = parseInt($userId);

	const user = userId.pipe(
		watch('userId', 10) as any,
		switchMap((userIdToFetch: string) => dataUtils.fetchOneUser(userIdToFetch)),
		watch('user', 10) as any
	) as Observable<User>;
</script>

<!-- navigation arrows -->
<div>
	<a href="/users/{userIdAsNumber - 1}">&#8249;</a>
	<a href="/users/{userIdAsNumber + 1}">&#8250;</a>
</div>

{#if $user}
	<UserCard id={$user.id} name={$user.name} />
{:else}
	Loading...
{/if}

<style>
	a {
		display: inline-block;
		padding: 1ch 1em;
	}
</style>
