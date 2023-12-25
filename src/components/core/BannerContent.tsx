import { Button } from "../ui/Button";
import { H1 } from "../ui/Heading";
import { Paragraph } from "../ui/Text";
import BannerStats from "./BannerStats";

export default function BannerContent() {
  return (
    <div className="flex flex-col space-y-7 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <H1 className="text-white">Empowering Trades with Our Capital 🔥</H1>
      <Paragraph className="text-white text-xl leading-7 font-inter font-normal">
        Global Reach, Local Support: Funding Your Trading Dreams Up to $300,000
      </Paragraph>

      <div className="flex justify-start">
        <Button className="py-4">Get up to $300,000 funds 🙌</Button>
      </div>

      <BannerStats />
    </div>
  );
}
