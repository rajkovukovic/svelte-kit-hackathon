<script lang="ts">
	import { BehaviorSubject, distinctUntilChanged, filter, map, Subject } from 'rxjs';
	import { onDestroy } from 'svelte';

	// const s = new Subject<number>();
	// s.next(1);
	// const sSubsription = s.subscribe((value) => console.log('Subject', value));
	// s.next(2);
	// s.next(3);

	const bs = new BehaviorSubject<number>(0);

	const bsDerived = bs.pipe(
		filter((value) => value % 2 === 0),
		map((value) => value * 10),
		distinctUntilChanged()
	);

	const bsSubsription = bsDerived.subscribe((value) => console.log('BehaviorSubject', value));

	for (let i = 1; i <= 10; i++) {
		bs.next(i);
		bs.next(i);
		bs.next(i);
	}

	onDestroy(() => {
		// sSubsription.unsubscribe();
		bsSubsription.unsubscribe();
	});
</script>

<h2>{$bs}</h2>
