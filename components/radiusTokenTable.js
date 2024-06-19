import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export default function Component() {
  return (
    <div className="overflow-auto border rounded-lg mt-3">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Token</TableHead>
            <TableHead>Value (Desktop)</TableHead>
            <TableHead>Value (Mobile)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>sm</TableCell>
            <TableCell>2</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>md</TableCell>
            <TableCell>4</TableCell>
            <TableCell>8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>lg</TableCell>
            <TableCell>8</TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>full</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
