interface StatItemProps {
  value: string;
  label: string;
  showBorder: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, showBorder }) => {
  return (
    <div className="justify-start items-center gap-2.5 flex">
      <div className="text-white font-medium font-clash-medium leading-[62px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl">
        {value}
      </div>

      <div className="text-white text-[13px] font-normal font-jakarta leading-tight">
        {label}
      </div>
      {showBorder && <Border />}
    </div>
  );
};

const Border: React.FC = () => {
  return (
    <div className="w-[15px] h-[38px] relative">
      {[10, 17, 24, 31, 38].map((top, index) => (
        <div
          key={index}
          style={{ top: `${top}px` }}
          className="w-[18.03px] h-[0px] left-0 absolute origin-top-left rotate-[-33.69deg] border border-white"
        />
      ))}
    </div>
  );
};

const BannerStats: React.FC = () => {
  return (
    <div className="justify-start items-center gap-6 inline-flex pt-16">
      <StatItem value="195+" label="Countries Covered" showBorder={true} />
      <StatItem value="$51M+" label="Total Payout" showBorder={true} />
      <StatItem value="$51k+" label="Funded Traders" showBorder={false} />
    </div>
  );
};

export default BannerStats;
