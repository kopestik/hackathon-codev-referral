import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Table,
} from "@nextui-org/react";

export const ReferralsTable = () => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    date: "07/06/2024",
    stage: "CEO",
    cashIncentive: "999",
    points: "999",
  },
  {
    key: "2",
    name: "Zoey Lang",
    date: "07/06/2024",
    stage: "Technical Lead",
    cashIncentive: "999",
    points: "999",
  },
  {
    key: "3",
    name: "Jane Fisher",
    date: "07/06/2024",
    stage: "Senior Developer",
    cashIncentive: "999",
    points: "999",
  },
  {
    key: "4",
    name: "William Howard",
    date: "07/06/2024",
    stage: "Community Manager",
    cashIncentive: "999",
    points: "999",
  },
];

const columns = [
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
    label: "points",
  },
];
