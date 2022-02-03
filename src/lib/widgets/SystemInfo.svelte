<script lang="ts">
	import { clock, usernamePlusElapsed } from '$lib/state/clock';
	import { counter } from '$lib/state/counter';

	const formatter = new Intl.DateTimeFormat(
		'rs',

		{
			hour12: false,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<div>
	<!-- {formatter.format($clock)} -->
	<button on:click={counter.decrement}>-</button>
	<button on:click={counter.increment}>+</button>
	<button on:click={counter.reset}>R</button>
	counter: {$counter} | {$usernamePlusElapsed}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2ch;
  }
</style>