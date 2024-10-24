import { Gem, DollarSign, UsersRound } from "lucide-react";
import { TotalNumberWidget } from "./TotalNumberWidget";
import { useUserContext } from "../../contexts/useUserContext";

export const WidgetContainer = () => {
  const { totalCashIncentive, totalPoints, totalReferrals } = useUserContext();

  return (
    <>
      <div className="flex space-x-4 my-4 bg-content2 p-8 rounded-large justify-evenly mb-8">
        <TotalNumberWidget
          icon={<UsersRound size="3em" />}
          label="Total Referrals"
          value={totalReferrals || "-"}
        />
        <TotalNumberWidget
          icon={<Gem size="3em" />}
          label="Total Points"
          value={totalPoints || "-"}
        />
        <TotalNumberWidget
          icon={<DollarSign size="3em" />}
          label="Total Cash Incentives"
          value={totalCashIncentive || "-"}
        />
      </div>
    </>
  );
};
