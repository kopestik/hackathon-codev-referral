import { Card, CardBody } from "@nextui-org/react";
import { ReactNode } from "react";

export const TotalNumberWidget = ({ icon, label, value }: Props) => {
  return (
    <Card className="max-w-64 py-3 flex-1">
      <CardBody>
        <div className="flex space-x-2">
          <div className="w-2/5 items-center flex justify-center">
            <div className="-mt-2">{icon}</div>
          </div>
          <div className="w-3/4 dark:text-[#dddad5]">
            <div className="text-sm">{label}</div>
            <div className="text-3xl font-black">{value}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

interface Props {
  icon?: ReactNode;
  label: string;
  value: string | number;
}
