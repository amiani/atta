<script lang='ts'>
	import List from '$lib/components/List'
	import type Link from '$lib/types/Link'
	import LinkForm from '$lib/components/LinkForm/LinkForm.svelte'
	import ThemeContext from '../lib/contexts/ThemeContext'
	import sb from '$lib/database'
	import { getLinks, insertLink } from '$lib/database/link'

	export let links: Link[]

	const onSubmit = async (event) => {
		const data = new FormData(event.target)
		const link = {
			title: data.get('title').valueOf() as string,
			url: data.get('url').valueOf() as string
		}
		links.unshift(link)
		await insertLink(sb, link)
		links = await getLinks(sb)
	}
</script>

<ThemeContext>
	<main>
		<h1>TEGAN AMIANI WEBSITE</h1>
		<div class='links'>
			<List links={links} />
		</div>
		<LinkForm on:submit={onSubmit} />
	</main>
</ThemeContext>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		font-family: var(--font-primary);
		padding: 1rem;
	}

	@media (min-width: 600px) {
		main {
			margin-left: 5%;
		}
	}
	@media (min-width: 900px) {
		main {
			margin-left: 15%;
		}
	}
	
	h1 {
		font-size: 1.5rem;
		white-space: nowrap;
	}

	.links {
		overflow-y: scroll;
		flex-grow: 3;
	}
</style>