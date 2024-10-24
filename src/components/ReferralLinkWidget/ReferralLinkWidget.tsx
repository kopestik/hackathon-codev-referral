import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { InputWithCopyUrl } from "../InputWithCopyUrl";
import { useState } from "react";
import { SearchJobPostingModal } from "../SearchJobPostingModal";

export const ReferralLinkWidget = ({ referrerId }: ReferralLinkWidgetProps) => {
  const [isSearchJpOpen, setIsSearchJpOpen] = useState(false);
  const [jobId, setJobId] = useState<string | number>();

  const onSpecificRefer = () => {
    setIsSearchJpOpen(true);
  };

  const onRevertToGenericRefer = () => {
    setJobId(undefined);
    setIsSearchJpOpen(false);
  };

  return (
    <>
      <Card className="p-4 mb-6">
        <CardHeader className="pb-2">
          <span className="text-lg font-semibold">Your Referral Link</span>
        </CardHeader>
        <CardBody className="pt-0">
          <InputWithCopyUrl
            url={`icims-careers.link/apply/${
              jobId || ""
            }?referrerId=${referrerId}`}
          />
          <p className="px-2 text-sm mt-2">
            <button
              className="underline text-gray-600 dark:text-[#b1aaa0]"
              onClick={jobId ? onRevertToGenericRefer : onSpecificRefer}
            >
              {jobId
                ? "or copy generic referral link?"
                : "or refer to a specific job posting?"}
            </button>
          </p>
        </CardBody>
      </Card>
      <SearchJobPostingModal
        isOpen={isSearchJpOpen}
        onOpenChange={setIsSearchJpOpen}
        onClick={(id) => {
          setJobId(id);
          setIsSearchJpOpen(false);
        }}
      />
    </>
  );
};

interface ReferralLinkWidgetProps {
  referrerId: string;
}
