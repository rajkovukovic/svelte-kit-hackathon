<script lang="ts">
	import { page } from '$app/stores';
	import UserCard from '$lib/widgets/UserCard.svelte';

	import { docData } from 'rxfire/firestore';
	import { doc } from 'firebase/firestore';
	import { db } from '$lib/state/db';

	$: userRef = doc(db, 'users', $page.params.userId);
	$: user = docData(userRef, { idField: 'id' });
</script>

{#if $user}
	<UserCard id={$user.id} name="{$user.firstName} {$user.lastName}" />
{:else}
	Loading...
{/if}
