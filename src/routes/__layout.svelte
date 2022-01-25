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
