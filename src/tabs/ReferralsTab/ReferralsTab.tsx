import { Button } from "@nextui-org/react";
import { Faq } from "../../components/Faq";
import { ReferralLinkWidget } from "../../components/ReferralLinkWidget";
import { ReferralsTable } from "../../components/ReferralsTable";
import { useState } from "react";
import { ApplyModal } from "../../components/ApplyModal";
import { useUserContext } from "../../contexts/useUserContext";

export const ReferralTab = () => {
  const { setTotalReferrals } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <ReferralLinkWidget />
      <div>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Click to mock apply
        </Button>
      </div>
      <ApplyModal
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        afterApply={() => {
          setRefreshKey(new Date().toString());

          if (setTotalReferrals) setTotalReferrals((prev) => prev + 1);
        }}
      />
      <ReferralsTable key={`referrals-table-${refreshKey}`} />
      <Faq />
    </div>
  );
};
