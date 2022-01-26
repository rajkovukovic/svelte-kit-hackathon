<script lang="ts">
	export let id: string;
	export let name: string;
</script>

<a sveltekit:prefetch class="user-wrapper" href="/users/{id}">
	<img alt="user-avatar" src="https://avatars.dicebear.com/api/adventurer/{id}.svg" />
	<i>@{id}</i>
	<b>{name}</b>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4px;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		/* min-height: 150px; */
	}

	img {
		width: 64px;
		height: 64px;
	}
</style>
