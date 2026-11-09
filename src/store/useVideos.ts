import { create } from "zustand";
import {
  type Video,
  addVideos,
  getVideos,
  updateVideos,
  deleteVideos,
} from "../services/api";

interface IVideo {
  videos: Video[];
  isLoading: boolean;
  selectedVideo: Video | null;
  isModalOpen: boolean;

  fetchVideo: () => Promise<void>;
  inputVideo: (payload: Video) => Promise<void>;
  editVideo: (payload: Video) => Promise<void>;
  deleteVideo: (id: number) => Promise<void>;

  openModal: (videoToEdit?: Video) => void;
  closeModal: () => void;
}

export const useVideos = create<IVideo>((set) => ({
  videos: [],
  isLoading: false,
  selectedVideo: null,
  isModalOpen: false,

  openModal: (videoToEdit) =>
    set({ isModalOpen: true, selectedVideo: videoToEdit || null }),

  closeModal: () => set({ isModalOpen: false, selectedVideo: null }),

  fetchVideo: async () => {
    set({ isLoading: true });

    try {
      const data = await getVideos();
      set({ videos: data });
    } finally {
      set({ isLoading: false });
    }
  },

  inputVideo: async (payload: Video) => {
    const newVideo = await addVideos(payload);

    set((state) => ({
      videos: [...state.videos, newVideo],
    }));
  },

  editVideo: async (payload: Video) => {
    const editedVideo = await updateVideos(payload);

    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === payload.id ? editedVideo : video
      ),
    }));
  },

  deleteVideo: async (id: number) => {
    await deleteVideos(id);

    set((state) => ({
      videos: state.videos.filter((video) => video.id !== id),
    }));
  },
}));