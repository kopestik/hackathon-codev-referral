import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Table,
} from "@nextui-org/react";
import { Gem } from "lucide-react";
import { useCallback } from "react";

export const ReferralsTable = () => {
  const renderCell = useCallback(
    (referral: Referral, columnKey: keyof Referral) => {
      const cellValue = referral[columnKey];

      switch (columnKey) {
        case "cashIncentive":
          return <span className="text-lg">${cellValue}</span>;
        case "points":
          return (
            <>
              <Gem className="inline -mt-1" size={16} />
              <span className="text-lg">{" "}{cellValue}/</span><span className="text-xs">500</span>
            </>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table aria-label="My Referrals Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No referrals to display."} items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof Referral)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const rows: Referral[] = [
  {
    key: "1",
    name: "Tony Reichert",
    date: "07/06/2024",
    stage: "Interview",
    cashIncentive: "999",
    points: "300",
  },
  {
    key: "2",
    name: "Zoey Lang",
    date: "07/06/2024",
    stage: "Initial Interview",
    cashIncentive: "999",
    points: "300",
  },
  {
    key: "3",
    name: "Jane Fisher",
    date: "07/06/2024",
    stage: "Examination",
    cashIncentive: "999",
    points: "300",
  },
  {
    key: "4",
    name: "William Howard",
    date: "07/06/2024",
    stage: "Final Interview",
    cashIncentive: "999",
    points: "300",
  },
];

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

type Referral = {
  key: string;
  name: string;
  date: string;
  stage: string;
  cashIncentive: string;
  points: string;
};

type ReferralColumn = {
  key: string;
  label: string;
};
