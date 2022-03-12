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
		await insertLink(sb, link)
		links = await getLinks(sb)
	}
</script>

<ThemeContext>
	<main>
		<h1>TEGAN AMIANI WEBSITE</h1>
		<List links={links} />
		<LinkForm on:submit={onSubmit} />
	</main>
</ThemeContext>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		font-family: var(--font-primary);
	}
</style>