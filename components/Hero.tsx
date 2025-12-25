import WorkWithPics from "../public/assests/work-with-pics.svg";
import { Button } from "./Button";
import AdBlocker from "../public/assests/ad-blocker.svg";
import BoostTeamWork from "../public/assests/boost-team-work.svg";
import StaySecure from "../public/assests/stay-secure.svg";
import CCat from "../public/assests/c-cat.svg";
import FixWifi from "../public/assests/fix-wifi.svg";
import ConvertToJps from "../public/assests/convert-to-jps.svg";
import PlanYourDay from "../public/assests/plan-your-day.svg";
import YourMac from "../public/assests/your-mac.svg";
import CodeEasier from "../public/assests/code-easier.svg";
import Logo from "../public/assests/demotest.svg";
import AppleIcon from "../public/assests/apple.svg";
import GoogleIcon from "../public/assests/google.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative px-5 lg:px-10 pt-[175px] pb-[148px]">
        <div className="relative flex flex-col items-center">
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Left Icons */}
            <div className="absolute left-[110px] top-0 bottom-0 w-1/2">
              <WorkWithPics
                className="absolute top-[46px] left-[6px] animate-hero-float"
                style={{ animationDelay: "0.2s" }}
              />
              <CCat className="absolute top-[177px] left-0 animate-hero-float" />
              <AdBlocker
                className="absolute top-[170px] left-[110px]  animate-hero-float"
                style={{ animationDelay: "0.4s" }}
              />
              <BoostTeamWork
                className="absolute left-[2px] bottom-[144px]    animate-hero-float"
                style={{ animationDelay: "0.6s" }}
              />
              <StaySecure
                className="absolute bottom-[1.5px] left-0 animate-hero-float"
                style={{ animationDelay: "0.8s" }}
              />
            </div>

            {/* Right Icons */}
            <div className="absolute right-[56px] top-0 bottom-0 w-1/2">
              <FixWifi className="absolute right-[14px] top-[64px] animate-hero-float" />
              <PlanYourDay
                className="absolute right-[138px] top-[124px] animate-hero-float"
                style={{ animationDelay: "0.3s" }}
              />
              <ConvertToJps
                className="absolute right-0 top-[235px] animate-hero-float"
                style={{ animationDelay: "0.5s" }}
              />
              <YourMac
                className="absolute right-[58px] bottom-[131px] animate-hero-float"
                style={{ animationDelay: "0.7s" }}
              />
              <CodeEasier
                className="absolute right-[133px] bottom-[2.5px] animate-hero-float"
                style={{ animationDelay: "0.9s" }}
              />
            </div>
          </div>

          {/* Center Logo */}
          <div className="h-40 w-40 flex items-center justify-center mb-10">
            <div
              className="bg-black rounded-[32px] flex items-center justify-center"
              style={{
                width: "128.75px",
                height: "128.75px",
                boxShadow:
                  "inset 0px -1.88px 0.94px 0px rgba(0, 0, 0, 0.25), inset 0px -0.94px 0.94px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Logo width="60px" height="93.44px" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="min-w-[680px] font-sans font-bold text-[64px] text-white text-center leading-[67.84px] tracking-[1px] align-middle mb-8 lg:mb-12">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            $9.99
          </h1>

          {/* CTA Buttons */}
          <div className="w-[365.93px] h-[52px] flex flex-col sm:flex-row items-center gap-3 mb-7">
            <Button variant="hero">Try free for 7 days</Button>
            <Button
              variant="store"
              aria-label="Download on Apple"
              className="ml-2"
            >
              <AppleIcon />
            </Button>
            <Button variant="store" aria-label="Download on Google Play">
              <GoogleIcon />
            </Button>
          </div>

          {/* Description */}
          <div className="w-[317px] h-[65px] flex items-center justify-center">
            <p className="text-white font-normal text-[18px] leading-[32.04px] tracking-normal text-center align-middle">
              Power up your workflow with Setapp, a
              <br className="hidden sm:inline" />
              smart way to get apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
