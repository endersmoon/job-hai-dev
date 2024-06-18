
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="border rounded-lg w-full mt-6">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Color</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B]" />
              </TableCell>
              <TableCell>Red</TableCell>
              <TableCell>$red</TableCell>
              <TableCell className="text-right">#FF6B6B</TableCell>
              <TableCell>A vibrant, passionate color associated with energy and excitement.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-[#4CAF50]" />
              </TableCell>
              <TableCell>Green</TableCell>
              <TableCell>$green</TableCell>
              <TableCell className="text-right">#4CAF50</TableCell>
              <TableCell>A refreshing, natural color that represents growth and harmony.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-[#2196F3]" />
              </TableCell>
              <TableCell>Blue</TableCell>
              <TableCell>$blue</TableCell>
              <TableCell className="text-right">#2196F3</TableCell>
              <TableCell>A calming and trustworthy color that evokes feelings of stability and intelligence.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-[#9B59B6]" />
              </TableCell>
              <TableCell>Purple</TableCell>
              <TableCell>$purple</TableCell>
              <TableCell className="text-right">#9B59B6</TableCell>
              <TableCell>A luxurious and creative color that represents royalty and imagination.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-[#FFC107]" />
              </TableCell>
              <TableCell>Yellow</TableCell>
              <TableCell>$yellow</TableCell>
              <TableCell className="text-right">#FFC107</TableCell>
              <TableCell>A warm and cheerful color that radiates positivity and optimism.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}