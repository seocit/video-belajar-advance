import logoVideoBelajar from "../assets/images/logo.png";
import { ChevronRight } from "lucide-react";
import {
	faLinkedinIn,
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
	return (
		<footer className="bg-white p-5 md:py-15 md:px-28">
			<div className="grid md:flex md:justify-between gap-3">
				<div className="md:w-100">
					<img src={logoVideoBelajar} alt="" className="w-40.25 md:w-48.25 md:mb-6" />
					<h3 className="font-semibold font-poppins">
						Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
					</h3>
					<p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
					<p>+62-877-7123-1234</p>
				</div>

				<ul className="md:hidden flex flex-col gap-2 mt-3 font-bold">
					<li className="flex justify-between">
						<button>Kategori</button> <ChevronRight />
					</li>
					<li className="flex justify-between">
						<button>Perushaan</button> <ChevronRight />
					</li>
					<li className="flex justify-between">
						<button>Kommunitas</button> <ChevronRight />
					</li>
				</ul>

                <div className="md:flex gap-12 hidden">
                    <div >
                        <h4 className="font-bold mb-3">Kategori</h4>
                        <div className="grid gap-2 text-gray-600">
                            <a href="">Digital & Teknologi</a>
                            <a href="">Pemasaran</a>
                            <a href="">Manajemen Bisnis</a>
                            <a href="">Pengembangan Diri</a>
                            <a href="">Desain</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3">Perusahaan</h4>
                        <div className="grid gap-2 text-gray-600">
                            <a href="">Tentang Kami</a>
                            <a href="">FAQ</a>
                            <a href="">Kebijakan Privasi</a>
                            <a href="">Ketentuan Layanan</a>
                            <a href="">Bantuan</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3">Komunitas</h4>
                        <div className="grid gap-2 text-gray-600">
                            <a href="">Tips Sukses</a>
                            <a href="">Blog</a>
                        </div>
                    </div>
                </div>
			</div>
            <br />
			<div className="grid md:flex  md:justify-between">
				<div className="flex md:order-2 gap-3  mt-3">
					<FontAwesomeIcon
						className="border border-gray-400 p-1 rounded-full"
						icon={faLinkedinIn}
					/>
					<FontAwesomeIcon
						className="border border-gray-400 p-1 rounded-full"
						icon={faFacebookF}
					/>
					<FontAwesomeIcon
						className="border border-gray-400 p-1 rounded-full"
						icon={faInstagram}
					/>
					<FontAwesomeIcon
						className="border border-gray-400 p-1 rounded-full"
						icon={faTwitter}
					/>
				</div>
				<div className="md:order-1">:@ 2023 Gerobak Sayur All Rights Reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
