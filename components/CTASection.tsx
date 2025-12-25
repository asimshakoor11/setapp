import Logo from "../public/assests/demotest.svg";
import { Button } from "./Button";

export default function CTASection() {
  return (
    <section
      className="pb-5 pt-10 lg:pt-[88px] border-b border-[#E5E5E5]"
      style={{
        background:
          "linear-gradient(180deg, #FEFEFE 0%, #FEFEFE 50%, #2B2D32 50%, #2B2D32 100%)",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-5 lg:px-10">
        <div className="bg-[#F5F5F5] rounded-[20px] relative overflow-hidden">
          <div className="max-w-[1260px] mx-auto px-10 lg:px-[75px] lg:min-h-[587px] flex flex-col justify-center relative z-10">
            {/* Setapp Logo Icon */}
            <div className="mb-5 lg:mt-[124px]">
              <Logo width={76} height={120} />
            </div>

            {/* Pricing Text */}
            <div className="mb-15 lg:mb-15 max-w-[800px]">
              <h2 className="text-[#26262B]  text-[36px] lg:text-[46px] font-semibold leading-[60px] tracking-[1.3px]">
                Superpowers starting $9.99/month.
                <br />
                Free for 7 days.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pb-16 lg:pb-24">
              <Button variant="dark">Get started now</Button>
              <Button variant="dark-outline">More about Setapp</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
