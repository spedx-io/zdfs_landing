import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";


export const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-center pt-10 px-10 w-screen">
      <div
        id="nav-content"
        className="flex justify-between items-center max-w-[1350px] w-full"
      >
        <div
          id="nav-links"
          className="flex w-full justify-between items-center gap-x-[46px]"
        >
          <Link href="/" className="relative z-10">
            <Image src="/logo.svg" alt="spedx logo" width={168} height={44} />
          </Link>{" "}
          <div className="flex items-center gap-x-[54px] text-[19px] pl-5 leading-[25px]">
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              ZDFs
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Traders
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Market Makers
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Incentives
            </Link>
            <Link href="https://discord.gg/Hrf8P6rbyA" id="launch-app-btn">
              <div className="p-1 rounded-xl shadow border border-white border-opacity-60 flex-col justify-start items-start gap-2 inline-flex">
                <div className="md:px-4 px-2 py-2 bg-gradient-to-b from-purple-500 via-indigo-400 to-indigo-300 rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-xs font-medium">
                    Join Discord
                  </div>
                </div>
              </div>
            </Link>
            <button className="flex lg:hidden">
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default Header;
