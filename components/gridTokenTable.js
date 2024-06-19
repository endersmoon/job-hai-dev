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
              <TableCell>xs</TableCell>
              <TableCell>2</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sm</TableCell>
              <TableCell>4</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>rg</TableCell>
              <TableCell>8</TableCell>
              <TableCell>12</TableCell>
            </TableRow><TableRow>
              <TableCell>xs</TableCell>
              <TableCell>12</TableCell>
              <TableCell>16</TableCell>
            </TableRow><TableRow>
              <TableCell>lg</TableCell>
              <TableCell>16</TableCell>
              <TableCell>20</TableCell>
            </TableRow><TableRow>
              <TableCell>xl</TableCell>
              <TableCell>20</TableCell>
              <TableCell>24</TableCell>
            </TableRow><TableRow>
              <TableCell>2xl</TableCell>
              <TableCell>24</TableCell>
              <TableCell>28</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
  