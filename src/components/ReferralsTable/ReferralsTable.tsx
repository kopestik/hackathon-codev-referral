import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Spinner,
  Tooltip,
} from "@nextui-org/react";
import { CircleHelp, Gem } from "lucide-react";
import { useCallback } from "react";
import useAxios from "../../utils/useAxios";
import { EMAIL } from "../../utils/constants";

export const ReferralsTable = () => {
  const { data, loading } = useAxios("/referrals/" + EMAIL);

  const renderCell = useCallback(
    (referral: Referral, columnKey: keyof Referral) => {
      switch (columnKey) {
        case "applicant":
          return (
            <div>
              <div>{referral.applicant.name}</div>
              <div className="text-xs text-content4-foreground">
                {referral.jobPosting.title}
              </div>
            </div>
          );
        case "dateReferred":
          return new Intl.DateTimeFormat("en-US").format(
            new Date(referral.dateReferred)
          );
        case "candidateStatus":
          return referral.candidateStatus.name;
        case "cashIncentive":
          return (
            <span className="dark:text-[#dddad5]">
              ${referral.cashIncentive}
            </span>
          );
        case "points":
          return (
            <>
              <Gem className="inline -mt-1 mr-1" size={16} />
              <span className="text-lg">{referral.points}/</span>
              <span className="text-xs">{referral.jobPosting.maxPoints}</span>
            </>
          );
        default:
          return "-";
      }
    },
    []
  );

  return (
    <>
      {data && !loading ? (
        <Table aria-label="My Referrals Table" className="mb-6">
          <TableHeader columns={columns}>
            {(column) =>
              column.key === "points" ? (
                <TableColumn key={column.key}>
                  <div className="flex items-center gap-1">
                    {column.label}{" "}
                    <Tooltip
                      content="Points Redeemed / Maximum Possible Points"
                      size="sm"
                    >
                      <CircleHelp size={14} />
                    </Tooltip>
                  </div>
                </TableColumn>
              ) : (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )
            }
          </TableHeader>
          <TableBody emptyContent={"No referrals to display."} items={data}>
            {(item: Referral) => (
              <TableRow key={item.applicant.id}>
                {(columnKey) => (
                  <TableCell className="dark:text-[#dddad5]">
                    {renderCell(item, columnKey as keyof Referral)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <Spinner label="Loading..." />
      )}
    </>
  );
};

const columns: ReferralColumn[] = [
  {
    key: "applicant",
    label: "NAME",
  },
  {
    key: "dateReferred",
    label: "Date Referred",
  },
  {
    key: "candidateStatus",
    label: "Stage",
  },
  {
    key: "cashIncentive",
    label: "Cash Incentive",
  },
  {
    key: "points",
    label: "Points",
  },
];

type ReferralColumn = {
  key: string;
  label: string;
};

interface Applicant {
  id: number;
  name: string;
  email: string;
}

interface Referrer {
  email: string;
  name: string;
}

interface Tier {
  id: number;
  name: string;
}

interface JobPosting {
  id: number;
  number: string;
  title: string;
  isUrgent: boolean;
  tier: Tier;
  link: string | null;
  maxPoints: number;
  maxCashIncentive: number;
}

interface CandidateStatus {
  id: number;
  name: string;
}

interface Referral {
  applicant: Applicant;
  dateReferred: string;
  referrer: Referrer;
  jobPosting: JobPosting;
  candidateStatus: CandidateStatus;
  points: number;
  cashIncentive: number;
}
