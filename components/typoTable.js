import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
  } from '@/components/ui/table';
import { Copy } from 'lucide-react';
  
  export default function Component() {
  
    const colorTokens = [
      {
        
        name: "Display-lg",
        class: "text-5xl font-bold",
        size:"3rem",
        lineheight: "3rem",
        description: " "
    },
    {
        
        name: "Display",
        class: "text-4xl font-bold",
        size:"2.25rem",
        lineheight: "2.5rem",
        description: " "
    },
    {
        
        name: "Display-sm",
        class: "text-3xl font-bold",
        size:"1.875rem",
        lineheight: "2.25rem",
        description: " "
    },
    {
        
        name: "Heading-lg",
        class: "text-2xl font-bold",
        size:"1.5rem",
        lineheight: "2rem",
        description: " "
    },
    {
        
        name: "Heading",
        class: "text-xl font-bold",
        size:"1.25rem",
        lineheight: "1.75rem",
        description: " "
    },
    {
        
        name: "Heading-sm",
        class: "text-lg font-bold",
        size:"1.125rem",
        lineheight: "1.75rem",
        description: " "
    },
    {
        
        name: "lg",
        class: "text-base ",
        size:"1rem",
        lineheight: "1.5rem",
        description: " "
    },
    {
        
        name: "Base",
        class: "text-sm ",
        size:"0.875rem",
        lineheight: "1.25rem",
        description: " "
    },
    {
        
        name: "sm",
        class: "text-xs",
        size:"0.55rem",
        lineheight: "1rem",
        description: " "
    },
    {
        
        name: "Emphesized-lg",
        class: "text-base font-medium",
        size:"1rem",
        lineheight: "1.5rem",
        description: " "
    },
    {
        
        name: "Emphesized",
        class: "text-sm font-medium",
        size:"0.875rem",
        lineheight: "1.25rem",
        description: " "
    },
    {
        
        name: "Emphesized-sm",
        class: "text-xs font-medium",
        size:"0.55rem",
        lineheight: "1rem",
        description: " "
    },

  
  ];
  
    return (
      <div className="w-full mt-6 border rounded-lg">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                
                <TableHead>Name</TableHead>
                
                <TableHead>Tailwind</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Line Height</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorTokens.map((item, index) => (
                <TableRow key={index}>
                 
                  <TableCell><div className={item.class}>
                  {item.name}
                    </div></TableCell>
                 
                  <TableCell className="flex items-center gap-2 text-left">
                    <code 
                      className='flex items-center gap-2 p-2 text-xs border rounded cursor-pointer bg-gray-50 hover:bg-gray-100'
                      onClick={() => navigator.clipboard.writeText(item.class)}
                      title="Click to copy"
                    >
                        <div>
                        {item.class}
                        </div>
                     
                      <Copy size={16} />
                    </code>
                    
                  </TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.lineheight}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
    