<script lang="ts">
	import { distinctUntilChanged, filter, interval, map } from 'rxjs';
	import { watch } from 'rxjs-watcher';

	const stream = interval(1000).pipe(
		watch('Interval(1000)', 10) as any,
		filter((value: number) => value % 2 === 1),
		watch('filtered', 10) as any,
		map((value: number) => Math.floor(value / 3)),
		watch('mapped', 10) as any,
		distinctUntilChanged(),
		watch('distinctUntilChanged', 10) as any
	);
</script>

<h2>{$stream}</h2>
