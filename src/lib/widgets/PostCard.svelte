<script lang="ts">
	export let id: string;
	export let userId: string;
	export let title: string;
	export let body: string;
</script>

<div>
	<span class="info">
		<i>@{id}</i> by user <b>@{userId}</b>
	</span>

	<h3>{title}</h3>
	<p>{body}</p>
</div>

<style>
	div {
		background-color: #35434d;
		padding: 0.5em;
		margin-bottom: 1em;
		border-radius: 1em;
	}
</style>
