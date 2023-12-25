export interface TickerItemProps {
  symbol: string;
  images: string[];
  price: number;
  change: number;
  percentageChange: number;
}

const TickerItem: React.FC<TickerItemProps> = ({
  symbol,
  images,
  price,
  change,
  percentageChange,
}) => {
  return (
    <div className="flex justify-between items-center px-4 border-r-zinc-200 border-r border-solid max-w-none">
      <div className="flex justify-between items-center">
        <div className="flex rtl:space-x-reverse">
          <img
            className="w-[15px] h-[15px] rounded-full dark:border-gray-800 mt-2"
            src={images[0]}
            alt="AvatarImg"
          />
          <img
            className="w-[15px] h-[15px] rounded-full dark:border-gray-800 -ml-[5px]"
            src={images[1]}
            alt="AvatarImg"
          />
        </div>
        <div className="text-white text-base font-bold pl-2">{symbol}</div>
      </div>
      <div className="text-white text-base font-semibold text-center pl-2">
        {price.toFixed(5)}
      </div>
      <div className={`text-teal text-base font-medium whitespace-nowrap pl-2`}>
        {change.toFixed(5)}
      </div>
      <div className={`text-teal text-base font-medium whitespace-nowrap pl-2`}>
        {`(${percentageChange.toFixed(2)}%)`}
      </div>
    </div>
  );
};

export default TickerItem;
