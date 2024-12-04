const getApiUrl = () => {
  return window.REACT_APP_API_URL || "http://localhost:8002/api";
};

const getSentryDsn = () => {
  return window.REACT_APP_SENTRY_DSN || "undefined";
}

const getSentryAuthToken = () => {
  return window.REACT_APP_SENTRY_AUTH_TOKEN || "undefined";
}

export const config = {
  apiUrl: getApiUrl(),
  getSentryDsn: getSentryDsn(),
  getSentryToken: getSentryAuthToken(),
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
};
