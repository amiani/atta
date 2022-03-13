<form on:submit|preventDefault>
	<fieldset>
		<legend>Add a Link</legend>

		<label for='title'>Description</label>
		<input type='text' name='title' placeholder='Sweet Webpage' />

		<label for="url">URL</label>
		<input type='text' name='url' placeholder='https://www.web.site/so_sweet' />

		<input class='submit' type='submit' value='Add Link' />
	</fieldset>
</form>

<style>
	form {
		max-width: 500px;
		width: 100%;
		font-family: var(--font-control);
	}

	fieldset {
		display: flex;
		flex-direction: column;
	}

	fieldset > input {
		margin-bottom: 10px;
	}

	.submit {
		width: max-content;
	}
</style>