import { Button } from "@nextui-org/react";
import { Faq } from "../../components/Faq";
import { ReferralLinkWidget } from "../../components/ReferralLinkWidget";
import { ReferralsTable } from "../../components/ReferralsTable";
import { useState } from "react";
import { ApplyModal } from "../../components/ApplyModal";

export const ReferralTab = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <ApplyModal isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} />
      <ReferralsTable />
      <Faq />
    </div>
  );
};
