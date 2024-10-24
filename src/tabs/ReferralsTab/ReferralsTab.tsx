import { Faq } from "../../components/Faq";
import { ReferralLinkWidget } from "../../components/ReferralLinkWidget";
import { ReferralsTable } from "../../components/ReferralsTable";

export const ReferralTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <ReferralLinkWidget referrerId="1c34fc" />
      <ReferralsTable />
      <Faq />
    </div>
  );
};
