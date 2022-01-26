<main>
	<header>
		<nav>
			<a sveltekit:prefetch href="/">Home</a>
			<a sveltekit:prefetch href="/users">Users</a>
			<a sveltekit:prefetch href="/help">Help</a>
		</nav>
	</header>

	<article>
		<slot />
	</article>

	<footer>Footer</footer>
</main>

<style>
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
	}

	a {
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.1);
		padding: 1rem;
	}
</style>
