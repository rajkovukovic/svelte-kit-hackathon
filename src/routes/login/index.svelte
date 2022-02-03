<script lang="ts">
	import { authUser } from '$lib/state/auth';

	let username = '';
	let password = '';

	function handleSubmit() {
		if (username === 'nikola') {
			// authUser = username;
		}
	}
</script>

{#if authUser}
	<!-- <h1>Hello {authUser}</h1> -->
{:else}
	<form on:submit|preventDefault={handleSubmit}>
		<input bind:value={username} type="text" name="username" />
		<input bind:value={password} type="password" name="password" />
		<button>Login</button>
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin: auto;
		max-width: 300px;
		height: 150px;
	}

	input {
		border: none;
		outline: none;
		padding: 0.5em;
	}

	button {
		padding: 0.5em;
	}
</style>
