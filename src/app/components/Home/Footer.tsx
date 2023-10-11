import Link from "next/link";
// import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full">
                <hr className="w-[1150px] mx-auto my-[60px] opacity-30 " />

      <div className="max-w-[1200px] w-full flex items-center justify-between text-white pb-20">
        <div id="about" className="max-w-[340px] w-full">
          <Image src="/logo.svg" alt="spedx logo" width={168} height={44} />{" "}
          <p className="mt-5 mb-10 leading-149@%] text-[21px]">
          Trade your favorite Ethereum altcoins on Solana
          </p>
          <div className="flex items-center gap-x-7">
            <Link href="/">
              <Image
                src="/images/social/facebook.svg"
                width={23}
                height={22}
                alt="facebook"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/twitter.svg"
                width={23}
                height={21}
                alt="twitter"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/instagram.svg"
                width={21}
                height={22}
                alt="instagram"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/linkedin.svg"
                width={22}
                height={22}
                alt="linkedin"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/youtube.svg"
                width={32}
                height={22}
                alt="youtube"
              />
            </Link>

            <Link href="/">
              <Image
                src="/images/social/spotify.svg"
                width={22}
                height={22}
                alt="spotify"
              />
            </Link>
          </div>
        </div>
        <div id="links" className="grid grid-cols-3">
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Get Started</p>
            <Link href="/" className="opacity-50 text-sm">
              Product Features
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Pricing
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Request a Demo
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Login
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Solutions</p>
            <Link href="/" className="opacity-50  text-sm">
              User Onboarding
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Product Adoption
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Checklists
            </Link>
            <Link href="/" className="opacity-50  text-sm">
              Resource Center
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Resources</p>
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
