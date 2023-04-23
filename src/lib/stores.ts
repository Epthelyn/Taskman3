import { writable, type Writable } from 'svelte/store';
import type { Character, ClientUser } from './types/taskman-api-types';

export const taskmanUserStore: Writable<null|ClientUser> = writable(null);

export const characterStore: Writable<null|Character> = writable(null);