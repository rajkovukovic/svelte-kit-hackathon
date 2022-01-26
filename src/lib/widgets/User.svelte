<script lang="ts">
	export let id: string;
	export let name: string;
	export let age: number = 30;

	$: idAsNumber = parseInt(id);
	$: nextId = idAsNumber + 1;

	let a: number;
	$: calcA(age);

	function calcA(ageParam: number) {
		a = age + 1;
		console.log({ idAsNumber, nextId });
	}
</script>

<div>
	<img alt="user-avatar" src="https://avatars.dicebear.com/api/adventurer/{id}.svg" />
	<i>@{id}</i>
	<b>{name}</b>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4px;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
	}

	img {
		width: 64px;
		height: 64px;
	}
</style>
