<script lang='ts'>
	export let text: string
	export let href: string
</script>

<li class='list-item'>
	<div class='content'>
		<a href={href}>{text}</a>
		<a href={href}>{href}</a>
	</div>
</li>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
</style>