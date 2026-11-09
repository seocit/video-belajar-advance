import axios from "axios"
import type { AxiosInstance } from "axios";

export type Video = {
    id?: number;
    title: string;
    description: string;
    mentor: string;
    rating?: number;
    viewer?: number;
    price: number;
}


const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  timeout: 5000,
});



export const getVideos = async (): Promise<Video[]> => {
  const response = await api.get<Video[]>(`/videos`);
  return response.data;
};

export const addVideos = async (payload: Video): Promise<Video> => {
  const response = await api.post<Video>(`/videos`, payload);
  return response.data;
};

export const updateVideos = async (payload: Video): Promise<Video> => {
  const response = await api.put<Video>(`/videos/${payload.id}`, payload);
  return response.data;
};

export const deleteVideos = async (id: number): Promise<void> => {
  await api.delete(`/videos/${id}`);
};





