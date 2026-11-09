import type { Video } from "../services/api"
import ratingStar from "../assets/images/rating.svg"
import { useVideos } from "../store/useVideos"

type ProductCardProps = {
    video: Video;
    image?: string;
    avatar?: string;
    showActions?: boolean;
}

const ProductCard = ({ video, image, avatar, showActions = false }: ProductCardProps) => {
    const { title, description, mentor, rating, viewer, price } = video
    const { deleteVideo, openModal } = useVideos()

    const handleDelete = async () => {
        if (!video.id) return
        const isConfirmed = window.confirm(`Apakah Anda yakin ingin menghapus "${title}"?`)
        if (isConfirmed) {
            try {
                await deleteVideo(video.id)
            } catch (error) {
                console.error("Gagal menghapus video:", error)
            }
        }
    }

    return (
        <div className="flex flex-col justify-between gap-3 p-4 bg-white border border-gray-400/40 rounded-2xl hover:shadow-xl transition-all">
            <div className="flex flex-col gap-3">
                <img
                    src={image || "https://placehold.co/600x400"}
                    alt={title}
                    className="w-full h-44 rounded-xl object-cover sm:h-52"
                />
                <h3 className="text-sm font-semibold font-poppins sm:text-base line-clamp-1">
                    {title}
                </h3>

                <p className="hidden sm:block text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center gap-2">
                    <img
                        src={avatar || "https://placehold.co/100"}
                        alt={mentor}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="text-xs font-medium text-gray-700">{mentor}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                    <img src={ratingStar} alt="rating" className="w-4 h-4" />
                    <span className="underline">{rating ?? 0} ({viewer ?? 0})</span>
                </span>
                <p className="text-primary text-lg font-bold sm:text-xl">
                    Rp {price}K
                </p>
            </div>

            {showActions && (
                <div className="flex gap-2 justify-end pt-2 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={() => openModal(video)}
                        className="flex-1 py-1.5 text-xs font-semibold border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors sm:flex-none sm:px-4 cursor-pointer">
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="flex-1 py-1.5 text-xs font-semibold border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors sm:flex-none sm:px-4 cursor-pointer">
                        Hapus
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductCard
