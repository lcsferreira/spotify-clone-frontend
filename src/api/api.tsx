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
  const response = await api.get(`users/${user.id}/recentlyPlayed`);
  //limit to 8 items
  const data = response.data.slice(0, 8);
  return data;
};

export const getPodcasts = async (user: userModel) => {
  const response = await api.get(`users/${user.id}/followedPodcasts`);
  //limit to 8 items
  const data = response.data.slice(0, 4);
  return data;
};

export const getPlaylists = async (user: userModel) => {
  const response = await api.get(`users/${user.id}/playlists`);
  //limit to 8 items
  const data = response.data.slice(0, 4);
  return data;
};
