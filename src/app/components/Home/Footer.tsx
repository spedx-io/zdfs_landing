import Link from "next/link";
// import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-around w-full">
      <hr className="w-full mx-auto mb-[60px] opacity-30 " />

      <div className="w-full flex lg:flex-row flex-col justify-between items-center text-white pb-10">
        {/* <div id="about" className=" w-full"> */}
          <div className="w-full flex lg:flex-col sm:flex-row justify-around lg:ml-[50px]">
            <div className="">
              <Image
                src="/logo.svg"
                alt="spedx logo"
                width={168}
                height={44}
                className="md:w-[170px] md:h-[48px] w-[130px] h-[35px]"
              />{" "}
              <p className="flex flex-col mt-5 mb-10 md:text-[21px] text-[15px] ">
                Trade your favorite Ethereum <span>altcoins on Solana</span>
              </p>
            </div>
            <div className="flex lg:flex-row sm:flex-row flex-col gap-y-7 items-center gap-x-7">
              <div className="flex flex-row gap-x-6 items-center">
                <Link href="/">
                  <Image
                    src="/images/social/facebook.svg"
                    width={23}
                    height={22}
                    alt="facebook"
                    className="sm:w-[23px] sm:h-[23px] w-[15px] h-[15px]"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/twitter.svg"
                    width={23}
                    height={21}
                    alt="twitter"
                    className="sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/instagram.svg"
                    width={21}
                    height={22}
                    alt="instagram"
                    className="sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]"
                  />
                </Link>
              </div>
              <div className="flex flex-row gap-x-6 items-center">
                <Link href="/">
                  <Image
                    src="/images/social/linkedin.svg"
                    width={22}
                    height={22}
                    alt="linkedin"
                    className="sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/youtube.svg"
                    width={32}
                    height={22}
                    alt="youtube"
                    className="sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]"
                  />
                </Link>

                <Link href="/">
                  <Image
                    src="/images/social/spotify.svg"
                    width={22}
                    height={22}
                    alt="spotify"
                    className="sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        {/* </div> */}
        <div
          id="links"
          className="w-full justify-around flex flex-row "
        >
          <div className="gap-y-3 flex flex-col">
            <p className="md:text-2xl text-lg">Get Started</p>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Product Features
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Pricing
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Request a Demo
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Login
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="md:text-2xl text-lg">Solutions</p>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              User Onboarding
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Product Adoption
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Checklists
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Resource Center
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="md:text-2xl text-lg">Resources</p>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Blog
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Case Studies
            </Link>
            <Link href="/" className="opacity-50 md:text-sm text-xs">
              Product Adoption 
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
