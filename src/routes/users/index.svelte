<script lang="ts">
	import { collection, doc, limit, orderBy, query, where, writeBatch } from 'firebase/firestore';
	import { collectionData } from 'rxfire/firestore';
	import { db } from '$lib/state/db';
	import UserCard from '$lib/widgets/UserCard.svelte';

	const usersRef = query(collection(db, 'users'), orderBy('firstName'), limit(20));

	const users = collectionData(usersRef, { idField: 'id' });

	function createMockUsers() {
		const mockUsers = [
			{ firstName: 'Nikola', lastName: 'Tesla' },
			{ firstName: 'Ada', lastName: 'Lovelace' },
			{ firstName: 'JK', lastName: 'Rowling' },
			{ firstName: 'John', lastName: 'Doe' }
		];

		const batch = writeBatch(db);

		mockUsers.forEach((user) => {
			const uniqueUserRef = doc(collection(db, 'users'));
			batch.set(uniqueUserRef, user);
		});

		batch.commit();
	}
</script>

<h1>Users</h1>
{#if !$users}
	Loading users...
{:else if $users.length === 0}
	<button on:click={createMockUsers}>Create Mock Users</button>
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
