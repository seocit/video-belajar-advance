import { PasswordInput, Input } from "@mantine/core";
import googleLogo from "../assets/images/google-logo.png";
import { Link } from "react-router";
const AuthCard = () => {
	return (
		<>
			<div className="w-full max-w-147.5 rounded-2xl bg-white p-5 sm:p-7 md:p-9">
				<div className="mb-6 flex flex-col items-center text-center sm:mb-8">
					<h1 className="font-poppins text-2xl font-semibold text-[#222325] sm:text-[32px]">Masuk ke Akun</h1>
					<p className="text-sm text-[#333333AD] sm:text-base">
						yuk, lanjutin belajarmu di videobelajar
					</p>
				</div>
				<form className="grid gap-3">
					<div className="grid">
						<label htmlFor="email" className="text-[#4A505C]">
							E-mail <span className="text-red-500">*</span>
						</label>
						<Input type="email" id="email" size="md" />
					</div>
					<div className="grid">
						<label htmlFor="password" className="text-[#4A505C]">
							Kata Sandi <span className="text-red-500">*</span>
						</label>
						<PasswordInput id="password" size="md" />
					</div>
					<div className="text-end">
						<a href="" className="text-[#4A505C]">
							Lupa Password?
						</a>
					</div>
					<Link type="submit" to={'/homepage'} className="w-full text-center rounded-xl bg-primary py-2 text-white sm:py-2.5">
						Masuk
					</Link>
					<Link to={'/register'} className="w-full  text-center rounded-xl bg-[#E2FCD9CC] py-2 text-primary sm:py-2.5">
						Daftar
					</Link>
					<div className="my-2 flex items-center">
						<div className="grow border-t border-gray-200"></div>
						<span className="px-4 text-sm text-gray-500">atau</span>
						<div className="grow border-t border-gray-200"></div>
					</div>
					<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-2 text-sm font-bold text-gray-800 sm:py-2.5 sm:text-base">
						<img src={googleLogo} alt="google-logo" width={20} />
						<span>Masuk dengan Google</span>
					</button>
				</form>
			</div>
		</>
	);
};

export default AuthCard;
