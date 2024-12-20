import axios from "axios";
import { config } from '../config/env';


const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface AuthCredentials {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UserProfile {
  email: string;
  name?: string;
}

export const auth = {
  register: (data: AuthCredentials) => api.post("/auth/register", data),

  login: (data: LoginCredentials) => api.post("/auth/login", data),

  update: (data: Partial<UserProfile>) => api.put("/auth/update", data),

  delete: () => api.delete("/auth/delete"),
};

export default api;
