declare module 'svelte-hcaptcha' {
  import type { SvelteComponent } from 'svelte';

  export interface HcaptchaProps {
    sitekey: string;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal';
    tabindex?: number;
    onVerify?: (token: string) => void;
    onExpire?: () => void;
    onErrored?: () => void;
  }

  export default class Hcaptcha extends SvelteComponent {
    $$prop_def: HcaptchaProps;
  }
}