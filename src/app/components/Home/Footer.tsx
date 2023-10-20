import Link from "next/link";
// import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full">
      <hr className="w-full mx-auto my-[60px] opacity-30 " />

      <div className="max-w-[1200px] w-full flex md:flex-row flex-col items-center justify-around text-white pb-10">
        <div id="about" className=" w-full">
          <div className="w-full flex md:flex-col flex-row justify-around">
            <div className="">
              <Image
                src="/logo.svg"
                alt="spedx logo"
                width={168}
                height={44}
                className="md:w-[170px] md:h-[48px] w-[130px] h-[35px]"
              />{" "}
              <p className="mt-5 mb-10 leading-149@%] md:text-[21px] text-[15px] ">
                Trade your favorite Ethereum altcoins on Solana
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-y-7 items-center gap-x-7">
              <div className="flex flex-row gap-x-6 items-center">
                <Link href="/">
                  <Image
                    src="/images/social/facebook.svg"
                    width={23}
                    height={22}
                    alt="facebook"
                    className="w-[23px] h-[23px] "
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/twitter.svg"
                    width={23}
                    height={21}
                    alt="twitter"
                    className="w-[23px] h-[23px] "
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/instagram.svg"
                    width={21}
                    height={22}
                    alt="instagram"
                    className="w-[23px] h-[23px] "
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
                    className="w-[23px] h-[23px] "
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/social/youtube.svg"
                    width={32}
                    height={22}
                    alt="youtube"
                    className="w-[23px] h-[23px] "
                  />
                </Link>

                <Link href="/">
                  <Image
                    src="/images/social/spotify.svg"
                    width={22}
                    height={22}
                    alt="spotify"
                    className="w-[23px] h-[23px] "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="links"
          className="w-full justify-around flex flex-row  gap-x-5"
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
            <Link href="/" className="opacity-50  text-sm">
              Blog
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Case Studies
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Product Adoption School
            </Link>
            <div />
          </div>
        </div>
      </div>
    </footer>
  );
};
