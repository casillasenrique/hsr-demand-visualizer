import { writable } from 'svelte/store';

export const SettingsStore = writable({
  name: 'Test'
});
