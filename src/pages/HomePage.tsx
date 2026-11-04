import HeroSection from "../components/HeroSection";
import VideoCollection from "../components/VideoCollection";
import Footer from "../components/Footer";

const HomePage = () => {
	return (
		<>
			<div className="flex bg-bg gap-4 flex-col py-7 px-5 md:py-16 md:px-30">
				<HeroSection />
				<VideoCollection />
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
