<script lang="ts">
	let username = '';
	let password = '';

	function handleSubmit() {
		username = 'Nikola Tesla';
	}

	$: console.log({ username });
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={username} type="text" name="username" />
	<input bind:value={password} type="password" name="password" />
	<button>Login</button>
</form>

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
