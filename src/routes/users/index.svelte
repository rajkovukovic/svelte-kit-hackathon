<script lang="ts">
	import { collection, limit, orderBy, query, where } from 'firebase/firestore';
	import { collectionData } from 'rxfire/firestore';
	import { db } from '$lib/state/db';
	import UserCard from '$lib/widgets/UserCard.svelte';

	const usersRef = query(
		collection(db, 'users'),
		// firstName in range A...O
		where('firstName', '<', 'P'),
		orderBy('firstName'),
		limit(2)
	);

	const users = collectionData(usersRef, { idField: 'id' });
</script>

<h1>Users</h1>
{#if !$users}
	Loading users...
{:else}
	<div class="user-list">
		{#each $users as { id, firstName, lastName } (id)}
			<div class="user-wrapper">
				<UserCard {id} name="{firstName} {lastName}" />
			</div>
		{/each}
	</div>
{/if}

<style>
	.user-list {
		display: flex;
		flex-wrap: wrap;
	}

	.user-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		width: 200px;
		margin-bottom: 8px;
		margin-right: 8px;
	}
</style>
