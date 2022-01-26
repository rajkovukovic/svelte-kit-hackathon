<script lang="ts">
	import UserCard from '$lib/widgets/UserCard.svelte';
	import * as dataUtils from '$lib/utils/dataUtils';
</script>

<h1>Users</h1>
{#await dataUtils.fetchUsers()}
	Loading users...
{:then users}
	<div class="user-list">
		{#each users as { id, name } (id)}
			<div class="user-wrapper">
				<UserCard {id} {name} />
			</div>
		{/each}
	</div>
{:catch error}
	{error}
{/await}

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
