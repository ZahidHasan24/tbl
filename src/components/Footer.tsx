import { ReactComponent as CallIcon } from "../assets/img/call.svg";
import { ReactComponent as DiscordIcon } from "../assets/img/discord.svg";
import { ReactComponent as FacebookIcon } from "../assets/img/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../assets/img/linkedin.svg";
import { ReactComponent as SmsIcon } from "../assets/img/sms.svg";
import { ReactComponent as TwitterIcon } from "../assets/img/twitter.svg";
import CommunitySection from "./core/CommunitySection";

import { H6 } from "./ui/Heading";
import { NavLink } from "./ui/Links";
import { Paragraph } from "./ui/Text";

export default function Footer() {
  return (
    <section className="bg-body">
      <div className="flex flex-col py-12 sm:w-full md:w-full lg:px-20 xl:px-20">
        <CommunitySection />
        <div className="mt-16 mx-8 font-jakarta">
          <div className="gap-5 flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
              <Paragraph className="text-base leading-6 text-white font-normal font-jakarta">
                Empowering global traders with unrivalled financial support.
                Navigate markets confidently with our innovative funding models
                and expert guidance.
              </Paragraph>
              <div className="items-start flex justify-start gap-5 mt-8 pr-20">
                <TwitterIcon fill="#EAECF0" />
                <LinkedinIcon fill="#EAECF0" />
                <FacebookIcon fill="#EAECF0" />
                <DiscordIcon fill="#EAECF0" />
              </div>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
              <div className="flex grow flex-col">
                <H6 className="text-white font-jakarta">Important Link</H6>
                <NavLink className="mt-4">Overview</NavLink>
                <NavLink className="mt-4">Affiliate Partner</NavLink>
                <NavLink className="mt-4">Payment Partner</NavLink>
                <NavLink className="mt-4">Success Stories</NavLink>
              </div>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
              <div className="flex flex-col pb-7 max-md:mt-8">
                <H6 className="text-white font-jakarta">Models</H6>
                <NavLink className="mt-4">Express</NavLink>
                <NavLink className="mt-4">Evaluation</NavLink>
                <NavLink className="flex mt-4">
                  Stellar Challenge
                  <div className="text-white text-center text-xs font-medium leading-5 whitespace-nowrap border bg-white bg-opacity-10 justify-center px-2 rounded-2xl border-solid border-white border-opacity-30 ml-4">
                    New
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
              <div className="items-start flex flex-col max-md:mt-8">
                <H6 className="text-white font-jakarta">Contact Information</H6>
                <div className="items-center flex gap-2 mt-4 self-start">
                  <SmsIcon stroke="#EAECF0" />
                  <NavLink> info@wearenext.com</NavLink>
                </div>
                <div className="items-center flex gap-2 mt-3 self-start">
                  <CallIcon stroke="#EAECF0" />
                  <NavLink>+986 8989 899</NavLink>
                </div>
                <div className="items-center flex gap-2 mt-3 self-start">
                  <CallIcon stroke="#EAECF0" />
                  <NavLink>+986 8989 899</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[color:var(--Gray-600,#475467)] flex justify-between gap-5 mt-16 pt-8 border-t border-solid mx-8 font-jakarta sm:flex-col md:flex-col lg:flex-row xl:flex-row">
          <Paragraph className="text-gray-300 text-base font-normal font-jakarta">
            © 2023 alll rights reserved.
          </Paragraph>
          <div className="flex gap-5">
            <NavLink>Cookie Policy</NavLink>
            <NavLink>Privacy Policy</NavLink>
            <NavLink>Terms & Conditions</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
