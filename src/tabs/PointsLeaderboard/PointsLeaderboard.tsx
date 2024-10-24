import {
  Avatar,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import { Gem } from "lucide-react";
import { useCallback } from "react";
import useAxios from "../../utils/useAxios";

const columns: Column[] = [
  {
    key: "rank",
    label: "Rank",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "points",
    label: "Points",
  },
];

export const PointsLeaderboard = () => {
  const { data, loading } = useAxios("/Referrals/leaderboard");
  const users = data as User[];
  const first = users?.find((u) => u.rank === 1);
  const rest = users?.filter((u) => u.rank !== 1);

  const renderCell = useCallback((user: User, columnKey: keyof User) => {
    switch (columnKey) {
      case "rank":
        return "#" + user.rank;
      case "name":
        return (
          <User name={user.name} avatarProps={{ size: "sm" }}>
            {user.name}
          </User>
        );
      case "points":
        return (
          <div className="flex items-center gap-1">
            <Gem size={12} /> <span className="text-sm">{user.points}</span>
          </div>
        );
      default:
        return "-";
    }
  }, []);

  return loading ? (
    <div className="flex justify-center">
      <Spinner label="Loading..." />
    </div>
  ) : (
    <div>
      <div className="flex items-center flex-col">
        <Avatar isBordered size="lg" color="success" />
        <div className="font-semibold text-center mt-4 flex flex-col gap-2 mb-6">
          <p className="text-3xl">#1</p>
          <div className="flex items-center gap-1">
            <span>{first?.name}</span>
            {"("}
            <Gem size={12} /> <span className="text-sm">{first?.points}</span>
            {")"}
          </div>
        </div>
        <div className="w-[500px]">
          <Table
            isStriped
            fullWidth
            shadow="sm"
            aria-label="Points Leaderboard"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={rest}>
              {(item) => (
                <TableRow key={item.rank}>
                  {(columnKey) => (
                    <TableCell>
                      {renderCell(item, columnKey as keyof User)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

interface User {
  rank: number;
  name: string;
  points: number;
}

interface Column {
  key: React.Key;
  label: string;
}
