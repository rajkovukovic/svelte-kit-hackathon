<script lang="ts">
	import { authUser } from '$lib/state/auth';
</script>

<main>
	<header>
		<nav>
			<div>
				<a sveltekit:prefetch href="/">Home</a>
				{#if $authUser}
					<a sveltekit:prefetch href="/users">Users</a>
				{/if}
				<a sveltekit:prefetch href="/help">Help</a>
			</div>
			<div>
				<a sveltekit:prefetch href="/login">Login</a>
			</div>
		</nav>
	</header>

	<article>
		<slot />
	</article>

	<footer>Footer</footer>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
		min-height: 100%;
	}

	header {
		position: sticky;
		top: 0;
		background-color: #252526;
	}

	footer {
		position: sticky;
		bottom: 0;
		background-color: #007acc;
		padding: 1rem;
	}

	article {
		padding: 1rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
		& > * {
			display: flex;
		}
	}

	a {
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.1);
		padding: 1rem;
	}
</style>
