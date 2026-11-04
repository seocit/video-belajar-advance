import { useState } from "react";
import { useLocation } from "react-router";
import vidioBelajarLogo from "../assets/images/logo.png";
import {ProfileMenu,  MobileMenu} from "./ProfileMenu";
import { Burger } from "@mantine/core";


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();
	const pathLowCase = pathname.toLowerCase()
	const isHomePage = pathLowCase === "/homepage";
	return (
		<>
			<nav className="sticky top-0 z-20 w-full border-b border-white border-b-gray-300 bg-white">
				<div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-30">
					<a href="/">
						<img src={vidioBelajarLogo} alt="vidio-belajar-logo" />
					</a>

					{isHomePage && (
						<>
							<div className="hidden md:block">
								<div className="flex gap-3 text-gray-800/80">
									<button>Kategori</button>
									<ProfileMenu />
								</div>
							</div>
							<div className="md:hidden" onClick={() => setIsOpen((state) => !state)}>
								<Burger opened={isOpen} />
							</div>
						</>
					)}
				</div>
			</nav>
			{isHomePage && <MobileMenu isOpen={isOpen} />}
		
		</>
	);
};

export default Navbar;
