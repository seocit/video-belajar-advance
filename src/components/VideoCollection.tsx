import { useState, useEffect } from "react";
import { catalogImages, profileImages } from "../api/data";
import { getVideos, type Video } from "../services/api";
import ProductCard from "./ProductCard";

const VideoCollection = () => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [active, setActive] = useState(0);

	const handleActiveTabs = (index: number) => {
		setActive(index);
	};

	const categories = [
		"Semua Kelas",
		"Pemasaran",
		"Desain",
		"Pengembangan Diri",
		"Bisnis",
	];

	useEffect(() => {
		let ignore = false;

		const fetchData = async () => {
			try {
				const data = await getVideos();
				if (!ignore) {
					setVideos(data);
				}
			} catch (err) {
				if (!ignore) {
					console.error("Gagal mengambil data video untuk VideoCollection:", err);
					setError("Gagal memuat koleksi video.");
				}
			} finally {
				if (!ignore) {
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<>
			<div className="flex flex-col mb-10 gap-3">
				<h3 className="text-2xl font-semibold font-poppins ">
					Koleksi Video Pembelajaran Unggulan
				</h3>
				<p className="text-gray-800/80">
					Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
				</p>
			</div>

			<div className="w-full overflow-x-auto py-3">
				<ul className="flex gap-4 w-max scrollbar-none">
					{categories.map((category, index) => {
						return (
							<button
								key={category}
								type="button"
								className="flex flex-col px-2 cursor-pointer"
								onClick={() => handleActiveTabs(index)}
							>
								<li
									className={
										active === index
											? `text-tertiary font-semibold list-none`
											: `text-gray-800/80 hover:shadow-md list-none`
									}
								>
									{category}
								</li>
								<div
									className={`${active === index ? `bg-tertiary w-10 h-2 rounded-xl mt-1` : `h-2 mt-1`}`}
								></div>
							</button>
						);
					})}
				</ul>
			</div>

			{loading && <p className="text-gray-500 py-8">Memuat koleksi video...</p>}
			{error && <p className="text-red-500 py-8">{error}</p>}

			{!loading && !error && (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{videos.map((video, index) => (
						<ProductCard
							key={video.id}
							video={video}
							image={catalogImages[index % catalogImages.length]}
							avatar={profileImages[index % profileImages.length]}
							showActions={false}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default VideoCollection;
