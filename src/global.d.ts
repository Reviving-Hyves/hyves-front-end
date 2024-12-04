export {};

declare global {
  interface Window {
    REACT_APP_API_URL: string;
    REACT_APP_SENTRY_AUTH_TOKEN: string;
    REACT_APP_SENTRY_DSN: string;
  }
}