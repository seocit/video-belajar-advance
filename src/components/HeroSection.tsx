import heroImage from "../assets/images/heroSection.jpg";
const HeroSection = () => {
	return (
		<section
			style={{ backgroundImage: `url(${heroImage})` }}
			className="min-h-100 w-full rounded-2xl bg-cover bg-center"
		>
			<div className="flex flex-col items-center justify-center px-8 md:px-35 w-full min-h-100 text-white text-center bg-black/80 py-9 rounded-2xl">
				<h1 className="text-2xl md:text-5xl font-semibold font-poppins text-white text-center mb-3">
					Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
					Interaktif!
				</h1>
				<p>
					Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
					pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
					berpartisipasi dalam latihan interaktif yang akan meningkatkan
					pemahaman Anda.
				</p>
				<button className="w-full md:w-93 py-2 rounded-2xl bg-primary mt-4 md:mt-6 hover:bg-primary/80">
					Temukan Video Course untuk Dipelajari!
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
