import axios from "axios";
import { userModel } from "./models/userModel";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUser = async (id: string) => {
  const response = await api.get(`users/${id}`);
  return response.data;
};

export const getRecent = async (user: userModel) => {
  const response = await api.get(`users/${user.id}`);
  //limit to 8 items
  const data = response.data.recentlyPlayed.slice(0, 8);

  return data;
};

export const getPodcasts = async (user: userModel) => {
  const response = await api.get(`users/${user.id}`);
  //limit to 8 items
  const data = response.data.followedPodcasts.slice(0, 4);

  return data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("login", { email, password });
  return response.data;
};

export const getProfile = async (user: userModel) => {
  const response = await api.get(`users/${user.id}/profile`);
  return response.data;
};
