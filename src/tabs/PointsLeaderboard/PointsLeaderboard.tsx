import {
  Avatar,
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

const columns = [
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
] as const;

const rows: User[] = [
  {
    key: "1",
    rank: 2,
    name: "Jane Doe",
    points: 400,
  },
  {
    key: "2",
    rank: 3,
    name: "Jane Doe",
    points: 400,
  },
  {
    key: "3",
    rank: 4,
    name: "Jane Doe",
    points: 400,
  },
];

export const PointsLeaderboard = () => {
  const renderCell = useCallback((user: User, columnKey: ColumnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "rank":
        return "#" + cellValue;
      case "name":
        return (
          <User name={cellValue} avatarProps={{ size: "sm" }}>
            {cellValue}
          </User>
        );
      case "points":
        return (
          <div className="flex items-center gap-1">
            <Gem size={12} /> <span className="text-sm">{cellValue}</span>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <div className="flex items-center flex-col">
        <Avatar isBordered size="lg" color="success" />
        <div className="font-semibold text-center mt-4 flex flex-col gap-2 mb-6 dark:text-[#dddad5]">
          <p className="text-3xl">#1</p>
          <div className="flex items-center gap-1">
            <span>John Doe</span>
            {"("}
            <Gem size={12} /> <span className="text-sm">999</span>
            {")"}
          </div>
        </div>
        <div className="w-[500px]">
          <Table isStriped fullWidth shadow="sm">
            <TableHeader columns={columns as unknown as Column[]}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow>
                  {(columnKey) => (
                    <TableCell className="dark:text-[#dddad5]">
                      {renderCell(item, columnKey as ColumnKey)}
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
  key: React.Key;
  rank: number;
  name: string;
  points: number;
}

interface Column {
  key: React.Key;
  label: string;
}

type ColumnKey = (typeof columns)[number]["key"];
