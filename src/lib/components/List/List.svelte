<script lang='ts'>
	import type Link from '$lib/types/Link'
	import Item from './Item'

	export let links: Link[]
</script>

<ol class='list'>
	{#each links as link}
		<Item text={link.title} url={link.url} />
	{/each}
</ol>

<style>
	.list {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	@media (max-width: 599px) {
		.list {
			padding: 0;
		}
	}
</style>