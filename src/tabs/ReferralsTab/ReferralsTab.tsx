import { Faq } from "../../components/Faq";
import { ReferralsTable } from "../../components/ReferralsTable";

export const ReferralTab = () => {
  return <div className="flex flex-col gap-4">
    <ReferralsTable />
    <Faq/>
  </div>;
};
