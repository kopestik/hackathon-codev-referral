import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Spinner,
} from "@nextui-org/react";
import { Gem } from "lucide-react";
import { useCallback } from "react";
import useAxios from "../../utils/useAxios";
import { EMAIL } from "../../utils/constants";

export const ReferralsTable = () => {
  const { data, loading } = useAxios("/referrals/" + EMAIL);

  const renderCell = useCallback(
    (referral: Referral, columnKey: keyof Referral) => {
      switch (columnKey) {
        case "name":
          return referral.applicant.name;
        case "date":
          return new Intl.DateTimeFormat("en-US").format(new Date());
        case "stage":
          return referral.candidateStatus.name;
        case "cashIncentive":
          return <span>${referral.cashIncentive}</span>;
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
    {data && !loading ? (<Table aria-label="My Referrals Table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"No referrals to display."}
          items={data}
        >
          {(item: Referral) => (
            <TableRow key={item.applicant.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof Referral)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>) : (<Spinner label="Loading..." />)}
      
    </>
  );
};

const columns: ReferralColumn[] = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "date",
    label: "Date Referred",
  },
  {
    key: "stage",
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

type Referral = any;
// {
//   cashIncentive: string;
//   points: string;
//   applicant: {
//     id: number
//     name: string;
//     email: string;
//   };
//   candidateStatus: {
//     name: string;
//   };
// };

type ReferralColumn = {
  key: string;
  label: string;
};
