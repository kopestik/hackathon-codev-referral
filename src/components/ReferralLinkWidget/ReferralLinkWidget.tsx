import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { InputWithCopyUrl } from "../InputWithCopyUrl";
import { useState } from "react";
import { SearchJobPostingModal } from "../SearchJobPostingModal";
import { useUserContext } from "../../contexts/useUserContext";
import axiosInstance from "../../utils/axios";
import { EMAIL } from "../../utils/constants";
import { toast } from "sonner";

export const ReferralLinkWidget = () => {
  const { referralLink: genericReferralLink } = useUserContext();
  const [specificReferralLink, setSpecificReferralLink] = useState<string>();
  const [isSearchJpOpen, setIsSearchJpOpen] = useState(false);

  const onSpecificRefer = () => {
    setIsSearchJpOpen(true);
  };

  const onRevertToGenericRefer = () => {
    setSpecificReferralLink(undefined);
    setIsSearchJpOpen(false);
  };

  const onGenerateReferralLink = async (jobId: number) => {
    try {
      const { data } = await axiosInstance(`/JobPostings/${jobId}/${EMAIL}`);

      setSpecificReferralLink(data.link);

      setIsSearchJpOpen(false);
    } catch (error) {
      console.log(error);
      toast("Something went wrong. See console.");
    }
  };

  return (
    <>
      <Card className="p-4 mb-6">
        <CardHeader className="pb-2">
          <span className="text-lg font-semibold">Your Referral Link</span>
        </CardHeader>
        <CardBody className="pt-0">
          <InputWithCopyUrl
            url={specificReferralLink || genericReferralLink || "-"}
          />
          <p className="px-2 text-sm mt-2">
            <button
              className="underline text-gray-600 dark:text-[#b1aaa0]"
              onClick={
                specificReferralLink ? onRevertToGenericRefer : onSpecificRefer
              }
            >
              {specificReferralLink
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
          onGenerateReferralLink(id);
        }}
      />
    </>
  );
};
