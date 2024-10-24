import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@nextui-org/react";
import { Gem } from "lucide-react";
import { useCallback } from "react";

export const ClaimHistory = () => {
  const renderCell = useCallback(
    (referral: Claims, columnKey: keyof Claims) => {
      const cellValue = referral[columnKey];

      switch (columnKey) {
        case "points":
          return (
            <>
              <Gem className="inline -mt-1 mr-1" size={16} />
              <span>{cellValue}</span>
            </>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table isStriped aria-label="Claims History Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No record to display."} items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof Claims)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const rows: Claims[] = [
  {
    key: "1",
    date: "07/06/2024",
    item: "PlayStation 5 Disc",
    points: "1000",
  },
  {
    key: "2",
    date: "07/06/2024",
    item: "Steam Deck OLED 256gb",
    points: "1500",
  },
  {
    key: "3",
    date: "07/06/2024",
    item: "House & Lot",
    points: "9999",
  },
  {
    key: "4",
    date: "07/06/2024",
    item: "Tesla Cybertruck Dual Motor",
    points: "999",
  },
];

const columns: ClaimsColumn[] = [
  {
    key: "date",
    label: "Date Referred",
  },
  {
    key: "item",
    label: "Item",
  },
  {
    key: "points",
    label: "Points Consumed",
  },
];

type Claims = {
  key: string;
  date: string;
  item: string;
  points: string;
};

type ClaimsColumn = {
  key: string;
  label: string;
};
