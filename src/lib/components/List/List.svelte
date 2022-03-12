<script lang='ts'>
	import type Link from '$lib/types/Link'
	import Item from './Item'

	export let links: Link[]
</script>

<ul class='list'>
	{#each links as link}
		<Item text={link.text} href={link.href} />
	{/each}
</ul>

<style>
	.list {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>