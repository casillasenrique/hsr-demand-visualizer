<script>
  import { SettingsStore } from '../Store';
</script>

<h1 class="bg-red-200">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p class="text-xl">{$SettingsStore.name}</p>
