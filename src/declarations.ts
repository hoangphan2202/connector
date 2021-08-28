interface Kardiachain {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}

declare interface Window {
  kardiachain?: Kardiachain;
}

declare const __DEV__: boolean;
