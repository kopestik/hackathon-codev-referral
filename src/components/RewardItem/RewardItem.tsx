import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { Gem, ShoppingCart } from "lucide-react";

export const RewardItem = ({
  name,
  points,
  image,
  action,
}: RewardItemProps) => {
  return (
    <Card className="max-w-64 bg-content2 rounded-3xl">
      <CardBody className="items-center p-2">
        <div className="h-44 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={image}
            alt={name}
            width={270}
            height={270}
          />
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between px-4 pt-1 pb-4 dark:text-[#dddad5]">
        <div>
          <p>
            <span className="font-semibold text-sm line-clamp-2">{name}</span>
          </p>
          <div className="text-content3-foreground dark:text-[#dddad5] flex items-center gap-1">
            <Gem className="inline" size={14} />
            <span className="font-bold text-sm">{points}</span>
          </div>
        </div>
        <Button
          isIconOnly
          radius="full"
          size="lg"
          className="bg-black text-white focus:outline-black dark:bg-content1"
          onClick={() => action()}
        >
          <ShoppingCart size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export interface RewardItemProps {
  name: string;
  points: number | string;
  image: string;
  action: () => void;
}
