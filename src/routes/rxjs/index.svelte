<script lang="ts">
	import { BehaviorSubject, Subject } from 'rxjs';
	import { onDestroy } from 'svelte';

	// const s = new Subject<number>();
	// s.next(1);
	// const sSubsription = s.subscribe((value) => console.log('Subject', value));
	// s.next(2);
	// s.next(3);

	const bs = new BehaviorSubject<number>(0);
	bs.next(1);
	bs.next(2);
	bs.next(3);
	const bsSubsription = bs.subscribe((value) => console.log('BehaviorSubject', value));

	setTimeout(() => bs.next(10), 1000);

	onDestroy(() => {
		// sSubsription.unsubscribe();
		bsSubsription.unsubscribe();
	});
</script>

<h2>{$bs}</h2>