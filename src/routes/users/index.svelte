<script lang="ts">
	import User from '$lib/widgets/User.svelte';

	let users = [
		{
			id: '1',
			name: 'John Doe'
		},
		{
			id: '2',
			name: 'Jane Doe'
		}
	];
</script>

<h1>Users</h1>
<div class="user-list">
	{#each users as { id, name } (id)}
		<div class="user-wrapper">
			<User {id} {name} />
		</div>
	{/each}
</div>

<style>
	.user-list {
		display: flex;
	}

	.user-wrapper {
		display: flex;
    flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		width: 200px;
		min-height: 150px;
		margin-bottom: 8px;
		margin-right: 8px;
	}
</style>
