import Image from "next/image";
import { Footer } from "./Footer";

export const Content: React.FC = () => {
  interface ZDFsDetails {
    heading: string;
    para: string;
  }

  const ZDFsDetails: ZDFsDetails[] = [
    {
      heading: "Liquid, Margin-based trading",
      para: "Deposit margin and start trading.",
    },
    {
      heading: "No liquidity or Settlement Risk",
      para: "Leverage at-the-money futures to manage risks effectively.",
    },
    {
      heading: "Daily Statement",
      para: "A strategic design choice to settle all contracts every day",
    },
    {
      heading: "Cash Settled",
      para: "Every ZDF settles to USDC every 25 hours.",
    },
  ];
  interface PerpetualsDetails {
    heading: string;
    para: string;
  }

  const PerpetualsDetails: PerpetualsDetails[] = [
    {
      heading: "Deposit margin and start trading",
      para: "Deposit margin and take undercollateralized directional positions",
    },
    {
      heading: "No settlement risk",
      para: "Guaranteed settlement eliminates any settlement risk.",
    },
    {
      heading: "Ability to express your risk preferences",
      para: "he ability to settle or roll over blends perfectly with the risk choices of a market maker.",
    },
    {
      heading: "Provide liquidity to the long tail of assets",
      para: "Join the game by providing liquidity to shitcoins.",
    },
  ];

  interface RiskDetails {
    heading: string;
    para: string;
  }
  const RisksDetails: RiskDetails[] = [
    {
      heading: "Leverage the liquidity of at-the-money futures.",
      para: "Manage risk effectively by providing liquidity to at-the-curve futures.",
    },
    {
      heading: "No Funding Rate!",
      para: "Tired of getting arb'ed by the funding rate, fear not, we've yeeted it for you!",
    },
    {
      heading: "No liquidity risk",
      para: "The contract's design inherently incentivizes liquidity, so you can trade without getting slippged.",
    },
    {
      heading: "No bridging required",
      para: "We've eliminated the need of bridges, as all contracts settle in cash.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl text-white bg-[url('/images/backgrounds/Subtract.svg')] bg-[center_top_-13rem] bg-opacity-10 bg-no-repeat">
        <Image
          src="/trading_view.svg"
          width={97}
          height={97}
          alt="trading view image"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col gap-y-[50px]">
        <div>
          <div className="w-full flex flex-col gap-y-[70px] bg-[url('/images/backgrounds/ZDFs_bg.svg')] bg-no-repeat bg-top">
            <div className="w-full h-24 flex-col justify-center items-center inline-flex ">
              <div className="flex flex-row gap-x-4  ">
                <span className="text-white text-[46px] font-semibold font-['Satoshi Variable']">
                  Introducing
                </span>
                <span
                  className="text-purple-300 text-[46px] font-bold font-['Satoshi Variable']"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFA8FF 50%, #091931 125.69%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ZDFs
                </span>
              </div>
              <div className="flex flex-row w-full justify-center items-center opacity-80 text-white text-[15px] font-medium font-['Satoshi Variable']">
                (Margin-based At-the-curve derivatives)
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <div className="flex flex-row gap-x-7 justify-center items-center">
                {ZDFsDetails.slice(0, 2).map((ZDFsDetails) => (
                  <div
                    key={ZDFsDetails.heading}
                    className="relative w-[380px] h-[120px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                  >
                    <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                      {ZDFsDetails.heading}
                    </div>
                    <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                      {ZDFsDetails.para}
                    </div>
                    <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-x-7 justify-center items-center">
                {ZDFsDetails.slice(2).map((ZDFsDetails) => (
                  <div
                    key={ZDFsDetails.heading}
                    className="relative w-[380px] h-[120px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                  >
                    <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                      {ZDFsDetails.heading}
                    </div>
                    <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                      {ZDFsDetails.para}
                    </div>
                    <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-[-100px]">
          <div className="w-full h-[400px] flex-col justify-center items-center inline-flex bg-[url('/images/backgrounds/Candlesticks.svg')] bg-no-repeat bg-center">
            <div className="flex flex-row gap-x-4">
              <span
                className="text-[46px] font-bold font-['Satoshi Variable']"
                style={{
                  background:
                    "linear-gradient(180deg, #CFA8FF 50%, #091931 125.69%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Perpetuals <span className="text-white">,</span>
              </span>
              <span className="text-white text-[46px] font-semibold font-['Satoshi Variable']">
                on steroids.
              </span>
            </div>
            <div className="flex flex-row w-full justify-center items-center opacity-80 text-white text-[15px] font-medium font-['Satoshi Variable']">
              Get perpetuals-like trading experience, with advanced capabilities
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-row gap-x-7 justify-center items-start">
              {PerpetualsDetails.slice(0, 2).map((PerpetualsDetails) => (
                <div
                  key={PerpetualsDetails.heading}
                  className="relative w-[380px] h-[150px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                >
                  <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                    {PerpetualsDetails.heading}
                  </div>
                  <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                    {PerpetualsDetails.para}
                  </div>
                  <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-x-7 justify-center items-start">
              {PerpetualsDetails.slice(2).map((PerpetualsDetails) => (
                <div
                  key={PerpetualsDetails.heading}
                  className="relative w-[380px] h-[150px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                >
                  <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                    {PerpetualsDetails.heading}
                  </div>
                  <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                    {PerpetualsDetails.para}
                  </div>
                  <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[70px] bg-[url('/images/backgrounds/Risks_bg.svg')] bg-no-repeat bg-top">
          <div className="w-full h-[300px] flex-col justify-center items-center inline-flex">
            <div className="flex flex-col items-center gap-x-4">
              <span className="text-white text-[46px] font-bold font-['Satoshi Variable']">
                You manage your <span className="text-red-400"  style={{
                  background:
                    " linear-gradient(98deg, #FF5D5D 59.88%, #E3A2A2 71.57%);",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }} >risks</span>, not              
              </span>
              <span className="text-white text-[46px] font-semibold font-['Satoshi Variable']">
                the other way round.
              </span>
            </div>
            <div className="flex flex-row w-full justify-center items-center opacity-80 text-white text-[15px] font-medium font-['Satoshi Variable']">
              Get perpetuals-like trading experience, with advanced capabilities
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-row gap-x-7 justify-center items-start">
              {RisksDetails.slice(0, 2).map((RisksDetails) => (
                <div
                  key={RisksDetails.heading}
                  className="relative w-[380px] h-[150px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                >
                  <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                    {RisksDetails.heading}
                  </div>
                  <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                    {RisksDetails.para}
                  </div>
                  <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-x-7 justify-center items-start">
              {RisksDetails.slice(2).map((RisksDetails) => (
                <div
                  key={RisksDetails.heading}
                  className="relative w-[380px] h-[150px] px-9 pl-16 py-6 items-start bg-gradient-to-b from-[#0E3745] to-zinc-900/30 rounded-lg flex-col justify-start gap-2 inline-flex"
                >
                  <div className="text-white text-lg font-bold font-['Satoshi Variable'] opacity-90">
                    {RisksDetails.heading}
                  </div>
                  <div className="text-white text-xs font-normal font-['Satoshi Variable']">
                    {RisksDetails.para}
                  </div>
                  <div className="w-16 h-1 left-[178px] top-0 absolute opacity-30 bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400 rounded-bl-[21px] rounded-br-[29px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
