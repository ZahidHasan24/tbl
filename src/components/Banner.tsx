import BannerContent from "../components/core/BannerContent";
import BannerImage from "../components/core/BannerImage";
import BgBlobImg from "../assets/img/bg-grid.png";
import { ReactComponent as ShadowSvg } from "../assets/img/shadow.svg";

export default function Banner() {
  return (
    <section className="bg-body relative">
      <div className="container flex items-center justify-center px-6 mx-auto pb-10 space-y-0 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <BannerContent />
        <BannerImage />
      </div>
      <img
        src={BgBlobImg}
        alt="BgBlobImg"
        className="absolute bottom-0 right-0 z-0"
      />
      <ShadowSvg className="absolute bottom-0 right-0 z-0" />
    </section>
  );
}
