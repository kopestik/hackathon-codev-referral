import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { Gem, ShoppingCart } from "lucide-react";

export const RewardItem = ({
  name,
  points,
  image,
  action,
}: RewardItemProps) => {
  return (
    <Card className="max-w-64 bg-gray-100 rounded-3xl">
      <CardBody className="items-center">
        <div className="max-w-56 h-44 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={image}
            alt={name}
            width={270}
            height={270}
          />
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between px-4 pt-1 pb-4">
        <div>
          <p>
            <span className="font-semibold">{name}</span>
          </p>
          <div className="text-gray-700">
            <Gem className="inline -mt-1.5 mr-1" size={16} />
            <span className="font-bold text-xl">{points}</span>
          </div>
        </div>
        <Button
          isIconOnly
          radius="full"
          size="lg"
          className="bg-foreground text-white focus:outline-black "
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
