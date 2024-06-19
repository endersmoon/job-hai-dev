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
    <div className="border rounded-lg w-full mt-6">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Color</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className=" w-1/3">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full  bg-blue-500" />
              </TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>$rec-brand</TableCell>
              <TableCell className="text-left">#3B82F6</TableCell>
              <TableCell className=" w-1/3">
                A vibrant, passionate color associated with energy and
                excitement.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-300" />
              </TableCell>
              <TableCell>Brand Muted</TableCell>
              <TableCell>$rec-brand-muted</TableCell>
              <TableCell className="text-left">#93C5FD</TableCell>
              <TableCell className=" w-1/3">
                A vibrant, passionate color associated with energy and
                excitement.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-green-500" />
              </TableCell>
              <TableCell>Success</TableCell>
              <TableCell>$sucess</TableCell>
              <TableCell className="text-left">#22C55E</TableCell>
              <TableCell className=" w-1/3">
                A refreshing, natural color that represents growth and harmony.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-green-100" />
              </TableCell>
              <TableCell>Success Muted</TableCell>
              <TableCell>$success-muted</TableCell>
              <TableCell className="text-left">#DCFCE7</TableCell>
              <TableCell className=" w-1/3">
                A refreshing, natural color that represents growth and harmony.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-red-500" />
              </TableCell>
              <TableCell>Failure</TableCell>
              <TableCell>$failure</TableCell>
              <TableCell className="text-left">#EF4444</TableCell>
              <TableCell className=" w-1/3">
                A calming and trustworthy color that evokes feelings of
                stability and intelligence.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-red-100 " />
              </TableCell>
              <TableCell>Failure Muted</TableCell>
              <TableCell>$failure-muted</TableCell>
              <TableCell className="text-left">#FEE2E2</TableCell>
              <TableCell className=" w-1/3">
                A calming and trustworthy color that evokes feelings of
                stability and intelligence.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-sky-500" />
              </TableCell>
              <TableCell>Info</TableCell>
              <TableCell>$info</TableCell>
              <TableCell className="text-left">#0EA5E9</TableCell>
              <TableCell className=" w-1/3">
                A luxurious and creative color that represents royalty and
                imagination.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-sky-100" />
              </TableCell>
              <TableCell>Info Muted</TableCell>
              <TableCell>$info-muted</TableCell>
              <TableCell className="text-left">#E0F2FE</TableCell>
              <TableCell className=" w-1/3">
                A luxurious and creative color that represents royalty and
                imagination.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-yellow-500" />
              </TableCell>
              <TableCell>Warning</TableCell>
              <TableCell>$warning</TableCell>
              <TableCell className="text-left">#EAB308</TableCell>
              <TableCell className=" w-1/3">
                A warm and cheerful color that radiates positivity and optimism.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-yellow-100" />
              </TableCell>
              <TableCell>Warning Muted</TableCell>
              <TableCell>$warining-muted</TableCell>
              <TableCell className="text-left">#FEFCE8</TableCell>
              <TableCell className=" w-1/3">
                A warm and cheerful color that radiates positivity and optimism.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-violet-500" />
              </TableCell>
              <TableCell>Discovery</TableCell>
              <TableCell>$discovery</TableCell>
              <TableCell className="text-left">#8B5CF6</TableCell>
              <TableCell className=" w-1/3">
                A warm and cheerful color that radiates positivity and optimism.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="w-8 h-8 rounded-full bg-violet-100" />
              </TableCell>
              <TableCell>Discovery Muted</TableCell>
              <TableCell>$discovery-muted</TableCell>
              <TableCell className="text-left">#EDE9FE</TableCell>
              <TableCell className=" w-1/3">
                A warm and cheerful color that radiates positivity and optimism.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
