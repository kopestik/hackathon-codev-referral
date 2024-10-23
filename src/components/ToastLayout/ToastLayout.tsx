export const ToastLayout = ({
  referrer,
  item,
  image,
  onClick,
}: ToastLayoutProps) => {
  return (
    <div
      className="w-full flex items-stretch gap-2 bg-white border border-foreground-200 shadow-sm rounded-md inter"
      onClick={onClick}
    >
      <div className="py-3 pl-3 pr-1 flex items-center">
        <div>
          <p className="font-semibold mb-2">Points & Rewards</p>
          <p className="text-sm">
            {referrer} just redeemed a <strong>{item}</strong>!
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 aspect-square h-full w-[100px] overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={image}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

interface ToastLayoutProps {
  referrer: string;
  item: string;
  image: string;
  onClick: () => void;
}
