import { useState } from "react";
import { videos, catalogImages, profileImages } from "../api/data";
import ratingStar from "../assets/images/rating.svg";



const VideoCollection = () => {
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
								className="flex flex-col px-2"
								onClick={() => handleActiveTabs(index)}
							>
								<li
									className={
										active === index
											? `text-tertiary`
											: `text-gray-800/80 hover:shadow-md`
									}
									key={category}
								>
									{category}
								</li>
								<div
									className={`${active === index && `bg-tertiary w-10 h-2 rounded-xl`}`
										
									}
								></div>
							</button>
						);
					})}
				</ul>
			</div>

			<div className="flex flex-col gap-6 md:grid md:grid-cols-3  ">
				{videos.map((video, index) => {
					return (
						<div
							className="flex flex-col gap-3 p-4 border bg-white border-gray-400/40 rounded-2xl hover:shadow-xl transition-all"
							key={`${video.title}-${index}`}
						>
							<div className="flex md:grid gap-3">
								<img
									className="w-20 h-20 md:w-full md:h-48.25 rounded-xl content-center object-cover"
									src={catalogImages[index % catalogImages.length]}
									alt=""
								/>
								<div className="flex-col jsutify-center items-center gap-3">
									<h3 className="font-semibold font-poppins">{video.title}</h3>
									<p className="hidden md:block mb-3 text-gray-800/80">{video.description}</p>
									<div className="flex items-center gap-3">
										<img
											className="w-9 h-9 rounded-xl"
											src={profileImages[index % profileImages.length]}
											alt=""
										/>
										<span className="w-full overflow-x-auto ">
											<h3 className="font-semibold">{video.mentor.name}</h3>
											<p className="text-sm w-max overflow-hidden scrollbar-none  text-gray-800/80">
												{video.mentor.job}
											</p>
										</span>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="flex gap-3 text-gray-600">
									{" "}
									<img src={ratingStar} alt="rating-star" />{" "}
									<p className="underline">
										{video.rating}({video.viewer})
									</p>{" "}
								</span>
								<p className="text-primary text-2xl font-bold">
									Rp {video.price}K
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default VideoCollection;
