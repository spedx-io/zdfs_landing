import { Hero } from "./components/Home/Hero";
import { Content } from "./components/Home/Content";
import { Footer } from "./components/Home/Footer";

export default function Home() {
  return (
    <div className="">
      <div
        className="relative font-redhat overflow-x-hidden bg-[#011638] text-white bg-[url('/images/backgrounds/Grid.svg')] bg-no-repeat"
        style={{
          backgroundPositionX: "50%",
          backgroundSize: "contain",
        }}
      >
        <Hero />
      </div>
      <div className="flex flex-col absolute lg:top-[390px] md:top-[600px] sm:top-[600px] top-[650px]">
        <Content />
        <hr className="max-w-[1200px] mx-auto my-[60px] opacity-30" />

        <Footer />
      </div>
    </div>
  );
}
