<script lang='ts'>
	export let text: string
	export let url: string
</script>

<li class='list-item'>
	<div class='content'>
		<a href={url}>{text}</a>
		<a href={url}>{url}</a>
	</div>
</li>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
</style>