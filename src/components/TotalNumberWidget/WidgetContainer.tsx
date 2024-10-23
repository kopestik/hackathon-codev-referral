import { Gem, DollarSign, UsersRound } from "lucide-react";
import { TotalNumberWidget } from "./TotalNumberWidget";

export const WidgetContainer = () => {
  return (
    <>
      <div className="flex space-x-4 my-4">
        <TotalNumberWidget
          icon={<Gem size="3em" />}
          label="Total Points"
          value="999"
        />
        <TotalNumberWidget
          icon={<DollarSign size="3em" />}
          label="Total Cash Incentives"
          value="555"
        />
        <TotalNumberWidget
          icon={<UsersRound size="3em" />}
          label="Total Referrals"
          value="777"
        />
      </div>
    </>
  );
};
