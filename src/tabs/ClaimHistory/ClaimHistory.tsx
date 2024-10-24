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

export const ClaimHistory = () => {
  const { data, loading } = useAxios("/referrals/rewards/claimed/" + EMAIL);

  const renderCell = useCallback(
    (referral: RewardEntry, columnKey: keyof RewardEntry) => {
      switch (columnKey) {
        case "reward":
          return referral.reward.name;
        case "created":
          return new Intl.DateTimeFormat("en-US").format(
            new Date(referral.created)
          );
        case "id":
          return (
            <>
              <Gem className="inline -mt-1 mr-1" size={16} />
              <span>{referral.reward.points}</span>
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
        <Table isStriped aria-label="Claims History Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                align={column.key === "points" ? "center" : "start"}
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No record to display."} items={data}>
            {(item: RewardEntry) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell className="dark:text-[#dddad5]">
                    {renderCell(item, columnKey as keyof RewardEntry)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="flex justify-center">
          <Spinner label="Loading..." />
        </div>
      )}
    </>
  );
};

const columns: ClaimsColumn[] = [
  {
    key: "reward",
    label: "Item",
  },
  {
    key: "created",
    label: "Date Claimed",
  },
  {
    key: "id",
    label: "Points Consumed",
  },
];

type ClaimsColumn = {
  key: string;
  label: string;
};

interface User {
  email: string;
  name: string;
}

interface Reward {
  id: number;
  name: string;
  description: string | null;
  points: number;
  imageUrl: string;
}

interface RewardEntry {
  id: number;
  user: User;
  reward: Reward;
  created: string;
}
