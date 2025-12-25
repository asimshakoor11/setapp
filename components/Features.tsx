import KeepMacClean from "../public/assests/keep-mac-clean.svg";
import SystemJunk from "../public/assests/system-junk.svg";
import WriteCode from "../public/assests/write-code.svg";
import CodeRunner from "../public/assests/code-runner.svg";
import JoinMeeting from "../public/assests/join-meetings.svg";
import IconMeter from "../public/assests/icon-meter.svg";

export default function Features() {
  return (
    <section className="max-w-[1200px] mx-auto px-2 lg:px-2.5">
      {/* Section Header */}
      <div className="border-t border-setapp-border pt-12 lg:pt-[101px] pb-12 lg:pb-[88px]">
        <div className="flex flex-col lg:flex-row items-center gap-25">
          <div className="w-[500px]">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-wide leading-tight">
              What you get on Setapp.
            </h2>
          </div>
          <div className="w-[600px]">
            <p className="text-white text-lg leading-relaxed">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-5">
        {/* Large Card - CleanMyMac */}
        <div className="group relative bg-setapp-pink rounded-[20px] overflow-hidden hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-6 lg:gap-8 p-8 lg:p-15 pb-0 lg:pb-0">
            <KeepMacClean />
            <div>
              <h3 className="text-setapp-dark font-semibold text-[26px] leading-[40.04px] align-middle">
                Keep your Mac clean
              </h3>
              <p className="text-setapp-dark font-normal text-[18px] leading-[32.04px] align-middle">
                Remove junk, scan for malware, wipe email attachments
              </p>
            </div>
          </div>

          <div className="w-full">
            <SystemJunk />
          </div>
        </div>

        {/* Two Column Cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* CodeRunner Card */}
          <div className="group w-full md:w-[580px] bg-[#F4F0E4] rounded-[20px] overflow-hidden hover:scale-[1.02] transition-transform duration-300 pb-15">
            <WriteCode />
            <div className="px-8 lg:px-15">
              <CodeRunner />
              <h3 className="text-setapp-dark font-semibold text-[26px] leading-[40.04px] align-middle">
                Write code
              </h3>
              <p className="text-setapp-dark font-normal text-[18px] leading-[32.04px] align-middle">
                Create applications in more than 25 languages
              </p>
            </div>
          </div>

          {/* Meeter Card */}
          <div className="group w-full md:w-[580px] bg-[#384C75] rounded-[20px] overflow-hidden hover:scale-[1.02] transition-transform duration-300 pt-15">
            <div className="px-8 lg:px-15 mb-[53px]">
              <IconMeter />
              <h3 className="text-white font-semibold text-[26px] leading-[40.04px] align-middle">
                Join meetings in a click
              </h3>
              <p className="text-white font-normal text-[18px] leading-[32.04px] align-middle">
                Quickly access links to your meetings from menu bar
              </p>
            </div>
            <JoinMeeting />
          </div>
        </div>
      </div>

      {/* View All Link */}
      <div className="flex justify-center my-12 lg:my-[88px]">
        <button className="group flex items-center gap-3 text-white text-lg lg:text-xl font-medium tracking-[1.6px] hover:gap-4 transition-all">
          <svg
            width="27"
            height="21"
            viewBox="0 0 27 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M15 2L24.688 10.5L15 19M2 10.606H24.316"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium text-[20px] leading-[30px] tracking-[1.6px] text-center align-middle">
            View all superpowers
          </span>
        </button>
      </div>

      <div className="border-b border-setapp-border pb-12 lg:pb-[88px]">
        <div className="flex flex-col lg:flex-row items-center gap-25">
          <div className="w-[500px]">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-wide leading-tight">
              Your Setapp journey.
            </h2>
          </div>
          <div className="w-[600px]">
            <p className="text-white text-lg leading-relaxed">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
