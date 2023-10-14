import { Header } from "./Header";
export const Hero: React.FC = () => {
  return (
    <div className="bg-auto flex flex-col min-h-screen w-screen overflow-x-hidden relative">
      <div className="h-screen relative w-screen overflow-hidden">
        <Header />
        <div className="w-screen flex justify-center items-center px-10 mt-24 relative ">
          <div className="flex flex-col gap-y-10">
            <div className=" flex flex-col gap-y-10">
              <p className="flex flex-col gap-y-5 justify-between items-center bg-[url('/images/backgrounds/Particles.svg')] bg-no-repeat">
                <span className="text-gray-100 text-7xl font-medium font-['Red Hat Display']">
                  Trade your favorite altcoins
                </span>
                <span
                  className="text-7xl font-medium font-['Red Hat Display']"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFA8FF 50%, #091931 125.69%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  on Solana
                </span>
              </p>
              <div className="opacity-60 text-center text-gray-100 text-xl font-normal font-['Satoshi Variable']">
                <p>
                  Speculate on your favorite ethereum shitcoins leveraging HXRO
                  Network&apos;s derivatives infrastructure.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <a
                href="https://alpha.spedx.exchange/trade"
                className="z-[10] w-40 h-16 bg-[#ded5fa] rounded select-none
    hover:translate-y-2 hover:translate-x-1 hover:[box-shadow:0_0_0_0_#ffffff,0_0_0_0_#ffffff]
    hover:border-b-[0px] 
    transition-all duration-150 [box-shadow:4px_4px_0_0_#ffffff,0_0_0_0_#ffffff]
    border-b-[1px] border-r-[1px]"
              >
                <span className="flex flex-col justify-center items-center h-full text-black font-normal text-lg">
                  Launch App
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
