<script>
  import { SettingsStore } from '../Store';
  import mapboxgl from 'mapbox-gl';
  import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';
  import { onMount } from 'svelte';

  console.log(PUBLIC_MAPBOX_ACCESS_TOKEN);

  const updateState = () => {
    SettingsStore.update(() => ({
      name: 'wow'
    }));
  };

  mapboxgl.accessToken = PUBLIC_MAPBOX_ACCESS_TOKEN;

  onMount(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  });
</script>

<svelte:head>
  <link href="https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<h1 class="bg-red-200">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p class="text-xl">{$SettingsStore.name}</p>
<button on:click={updateState}>Click me</button>

<div class="fixed top-0 bottom-0 w-full z-0" id="map" />
