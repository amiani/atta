<script lang="ts">
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'

	import themes, { type Theme } from './themes'

  // sets CSS vars for easy use in components
  // ex: var(--theme-background)
  const setRootColors = (theme: Theme) => {
    for (const [key, font] of Object.entries(theme.fonts)) {
      const varString = `--font-${key}`
      document.documentElement.style.setProperty(varString, font)
    }
    document.documentElement.style.setProperty('--theme-name', theme.name)
  }

	const theme = writable(themes.light)
	setContext('theme', { theme })

	onMount(() => setRootColors(themes.light))
</script>

<slot />