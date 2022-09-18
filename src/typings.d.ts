export {};

declare global {
  interface String {
    replaceParamsInUrl: (id: string) => string;
  }
}
