import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export default function Component() {

  const colorTokens = [
    {
      color: "bg-white",
      tailwindClass: "white",
      name: "Background",
      token: "--background",
      value: "#FFFFFF",
      description: "Primary background color for the application."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Foreground",
      token: "--foreground",
      value: "#0F1729",
      description: "Primary text and content color for maximum readability."
  },

  {
    color: "bg-emerald-600",
    tailwindClass: "emerald-600",
    name: "Success",
    token: "$success",
    value: "#059669",
    description: "Color for success states and positive actions."
  },


  {
    color: "bg-green-50",
    tailwindClass: "green-50",
    name: "Success Foreground",
    token: "$success-foreground",
    value: "#ECFDF5",
    description: "Text color for content on success backgrounds."
  },


  {
    color: "bg-yellow-500",
    tailwindClass: "yellow-500",
    name: "Warning",
    token: "$warning",
    value: "#F59E0B",
    description: "Color for warning states and cautionary actions."
  },


  {
    color: "bg-yellow-50",
    tailwindClass: "yellow-50",
    name: "Warning Foreground",
    token: "$warning-foreground",
    value: "#FFFBEB",
    description: "Text color for content on warning backgrounds."
  },


  {
    color: "bg-blue-600",
    tailwindClass: "blue-600",
    name: "Info",
    token: "$info",
    value: "#6366F1",
    description: "Color for informational states and messages."
  },
  {
    color: "bg-blue-50",
    tailwindClass: "blue-50",
    name: "Info Foreground",
    token: "$info-foreground",
    value: "#EEF2FF",
    description: "Text color for content on info backgrounds."
  },


  {
    color: "bg-violet-600",
    tailwindClass: "violet-600",
    name: "Discovery",
    token: "$discovery",
    value: "#A855F7",
    description: "Color for discovery and exploration features."
  },


  {
    color: "bg-violet-50",
    tailwindClass: "violet-50",
    name: "Discovery Foreground",
    token: "$discovery-foreground",
    value: "#FAF5FF",
    description: "Text color for content on discovery backgrounds."
  },


  {
    color: "bg-blue-600",
    tailwindClass: "blue-600",
    name: "Brand Rec",
    token: "$brand-rec",
    value: "#2563EB",
    description: "Primary brand recognition color."
  },


  {
    color: "bg-blue-100",
    tailwindClass: "blue-100",
    name: "Brand Rec Muted",
    token: "$brand-rec-muted",
    value: "#EFF6FF",
    description: "Muted version of the brand recognition color."
  },


  {
    color: "bg-teal-500",
    tailwindClass: "teal-500",
    name: "Brand JS",
    token: "$brand-js",
    value: "#14B8A6",
    description: "Secondary brand color for specific applications."
  },


  {
    color: "bg-teal-50",
    tailwindClass: "teal-50",
    name: "Brand JS Muted",
    token: "$brand-js-muted",
    value: "#F0FDFA",
    description: "Muted version of the secondary brand color."
  },
  {
      color: "bg-white",
      tailwindClass: "white",
      name: "Card",
      token: "--card",
      value: "#FFFFFF",
      description: "Background color for card components."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Card Foreground",
      token: "--card-foreground",
      value: "#0F1729",
      description: "Text color for content within card components."
  },
  {
      color: "bg-white",
      tailwindClass: "white",
      name: "Popover",
      token: "--popover",
      value: "#FFFFFF",
      description: "Background color for popover elements."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Popover Foreground",
      token: "--popover-foreground",
      value: "#0F1729",
      description: "Text color for content within popover elements."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Primary",
      token: "--primary",
      value: "#0F1729",
      description: "Primary brand color for key elements and actions."
  },
  {
      color: "bg-slate-50",
      tailwindClass: "slate-50",
      name: "Primary Foreground",
      token: "--primary-foreground",
      value: "#F8FAFC",
      description: "Text color for content on primary-colored backgrounds."
  },
  {
      color: "bg-slate-100",
      tailwindClass: "slate-100",
      name: "Secondary",
      token: "--secondary",
      value: "#F1F5F9",
      description: "Secondary color for supporting elements."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Secondary Foreground",
      token: "--secondary-foreground",
      value: "#0F1729",
      description: "Text color for content on secondary-colored backgrounds."
  },
  {
      color: "bg-slate-100",
      tailwindClass: "slate-100",
      name: "Muted",
      token: "--muted",
      value: "#F1F5F9",
      description: "Subtle background color for muted or inactive elements."
  },
  {
      color: "bg-slate-500",
      tailwindClass: "slate-500",
      name: "Muted Foreground",
      token: "--muted-foreground",
      value: "#64748B",
      description: "Subtle text color for muted content."
  },
  {
      color: "bg-slate-100",
      tailwindClass: "slate-100",
      name: "Accent",
      token: "--accent",
      value: "#F1F5F9",
      description: "Accent color for highlighting or emphasis."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Accent Foreground",
      token: "--accent-foreground",
      value: "#0F1729",
      description: "Text color for content on accent-colored backgrounds."
  },
  {
      color: "bg-red-500",
      tailwindClass: "red-500",
      name: "Destructive",
      token: "--destructive",
      value: "#EF4444",
      description: "Color for destructive actions or error states."
  },
  {
      color: "bg-slate-50",
      tailwindClass: "slate-50",
      name: "Destructive Foreground",
      token: "--destructive-foreground",
      value: "#F8FAFC",
      description: "Text color for content on destructive-colored backgrounds."
  },
  {
      color: "bg-slate-200",
      tailwindClass: "slate-200",
      name: "Border",
      token: "--border",
      value: "#E2E8F0",
      description: "Color for borders and dividers."
  },
  {
      color: "bg-slate-200",
      tailwindClass: "slate-200",
      name: "Input",
      token: "--input",
      value: "#E2E8F0",
      description: "Border color for input elements."
  },
  {
      color: "bg-slate-900",
      tailwindClass: "slate-900",
      name: "Ring",
      token: "--ring",
      value: "#0F1729",
      description: "Color for focus rings and outlines."
  },
  {
      color: "bg-red-500",
      tailwindClass: "red-500",
      name: "Chart 1",
      token: "--chart-1",
      value: "#E54D2E",
      description: "Primary chart color for data visualization."
  },
  {
      color: "bg-teal-600",
      tailwindClass: "teal-600",
      name: "Chart 2",
      token: "--chart-2",
      value: "#2A9D8F",
      description: "Secondary chart color for data visualization."
  },
  {
      color: "bg-cyan-900",
      tailwindClass: "cyan-900",
      name: "Chart 3",
      token: "--chart-3",
      value: "#1E3A4C",
      description: "Tertiary chart color for data visualization."
  },
  {
      color: "bg-yellow-400",
      tailwindClass: "yellow-400",
      name: "Chart 4",
      token: "--chart-4",
      value: "#F8C51B",
      description: "Fourth chart color for data visualization."
  },
  {
      color: "bg-orange-400",
      tailwindClass: "orange-400",
      name: "Chart 5",
      token: "--chart-5",
      value: "#FB923C",
      description: "Fifth chart color for data visualization."
  },

];

  return (
    <div className="w-full mt-6 border rounded-lg">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Color</TableHead>
              <TableHead>Name</TableHead>
              
              <TableHead>Value</TableHead>
              <TableHead>Tailwind</TableHead>
              <TableHead className="w-1/3">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colorTokens.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className={`w-8 h-8 rounded-full border ${item.color}`} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
               
                <TableCell className="text-left">{item.value}</TableCell>
                <TableCell>{item.tailwindClass}</TableCell>
                <TableCell className="w-1/3">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
  