<script lang='ts'>
	import List from '$lib/components/List'
	import type Link from '$lib/types/Link';

	let links: Link[] = [
		{
			text: 'Cool Link 1',
			href: 'https://www.youtube.com'
		},
		{
			text: 'Cool Link 2',
			href: 'https://www.firebase.com'
		}
	]
</script>

<h1>TEGAN AMIANI WEBSITE</h1>
<List links={links} />