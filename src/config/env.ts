const getApiUrl = () => {
  console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
  return process.env.REACT_APP_API_URL || "http://localhost:8002/api";
};

export const config = {
  apiUrl: getApiUrl(),
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
};
