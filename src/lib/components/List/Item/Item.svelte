<script lang='ts'>
	export let text: string
	export let url: string
</script>

<li class='list-item'>
	<div class='content'>
		<a class="text" href={url}>{text}</a>
		<a class="url" href={url}>{url}</a>
	</div>
</li>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}

	.text, .url {
		text-decoration: none;
	}

	.url {
		font-size: 0.75rem;
	}
</style>