import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { InputWithCopyUrl } from "../InputWithCopyUrl";
import { useState } from "react";

export const ReferralLinkWidget = () => {
  const [, setIsSearchJpOpen] = useState(false);
  const [jobId, setJobId] = useState("");

  const onSpecificRefer = () => {
    setIsSearchJpOpen(true);
    setJobId("12rfd126");
  };

  const onRevertToGenericRefer = () => {
    setJobId("");
    setIsSearchJpOpen(false);
  };

  return (
    <Card className="p-4">
      <CardHeader className="pb-2">
        <span className="text-lg font-semibold">Your Referral Link</span>
      </CardHeader>
      <CardBody className="pt-0">
        <InputWithCopyUrl
          url={`refer.link/1c34fc${jobId ? `?jobId=${jobId}` : ""}`}
        />
        <p className="px-2 text-sm mt-2">
          <button
            className="underline text-gray-600"
            onClick={jobId ? onRevertToGenericRefer : onSpecificRefer}
          >
            {jobId
              ? "or copy generic referral link?"
              : "or refer to a specific job posting?"}
          </button>
        </p>
      </CardBody>
    </Card>
  );
};
