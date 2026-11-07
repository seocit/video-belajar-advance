import axios from "axios"

export type Video = {
    id: number;
    title: string;
    description: string;
    mentor: string;
    rating: number;
    viewer: number;
    price: number
}

export const getVideos = async () => {
    const response= await axios.get<Video[]>(`${import.meta.env.VITE_BASE_URL}/videos`)

    return response.data;
}

