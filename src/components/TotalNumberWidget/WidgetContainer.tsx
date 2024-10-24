import { Gem, DollarSign, UsersRound } from "lucide-react";
import { TotalNumberWidget } from "./TotalNumberWidget";
import useAxios from "../../utils/useAxios";
import { EMAIL } from "../../utils/constants";

export const WidgetContainer = () => {
  const { data } = useAxios("/referrals/me/" + EMAIL);

  return (
    <>
      <div className="flex space-x-4 my-4 bg-content2 p-8 rounded-large justify-evenly mb-8">
        <TotalNumberWidget
          icon={<UsersRound size="3em" />}
          label="Total Referrals"
          value={data?.totalReferrals || "-"}
        />
        <TotalNumberWidget
          icon={<Gem size="3em" />}
          label="Total Points"
          value={data?.totalPoints || "-"}
        />
        <TotalNumberWidget
          icon={<DollarSign size="3em" />}
          label="Total Cash Incentives"
          value={data?.totalCashIncentive || "-"}
        />
      </div>
    </>
  );
};
