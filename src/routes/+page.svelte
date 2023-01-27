<script>
  import { SettingsStore } from '../Store';

  const updateState = () => {
    SettingsStore.update(() => ({
      name: 'wow'
    }));
  };
</script>

<h1 class="bg-red-200">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p class="text-xl">{$SettingsStore.name}</p>
<button on:click={updateState}>Click me</button>
