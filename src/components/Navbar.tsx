import { useState } from "react";
import { useMatches } from "react-router";
import type { RouteHandle } from "../router";
import vidioBelajarLogo from "../assets/images/logo.png";
import { ProfileMenu, MobileMenu } from "./ProfileMenu";
import { Burger } from "@mantine/core";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const matches = useMatches();
	const currentMatch = matches[matches.length - 1];
	const showProfile = Boolean((currentMatch?.handle as RouteHandle | undefined)?.showProfile);

	return (
		<>
			<nav className="sticky top-0 z-20 w-full border-b border-white border-b-gray-300 bg-white">
				<div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-30">
					<a href="/">
						<img src={vidioBelajarLogo} alt="vidio-belajar-logo" />
					</a>

					{showProfile && (
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
			{showProfile && <MobileMenu isOpen={isOpen} />}
		</>
	);
};

export default Navbar;
