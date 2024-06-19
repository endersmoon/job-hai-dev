'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectTrigger, SelectGroup, SelectValue, SelectLabel, SelectItem } from '@/components/ui/select';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import Link from 'next/link';
import { BookOpen, CheckIcon, FigmaIcon, LinkIcon } from 'lucide-react';

export default function Component() {
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({
    status: [],
    mobile: [],
    desktop: [],
    owner: [],
  });
  const handleSearch = (e) => setSearch(e.target.value);
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  const filteredData = useMemo(() => {
    let data = [
      {
        component: 'Button',
        status: 'Stable',
        mobile: true,
        desktop: true,
        description: 'A customizable button component',
        figma: '#',
        docs: '#',
        owner: 'Jane Doe',
      },
      {
        component: 'Modal',
        status: 'Beta',
        mobile: true,
        desktop: true,
        description: 'A reusable modal component',
        figma: '#',
        docs: '#',
        owner: 'John Smith',
      },
      {
        component: 'Dropdown',
        status: 'Alpha',
        mobile: true,
        desktop: true,
        description: 'A dropdown menu component',
        figma: '#',
        docs: '#',
        owner: 'Sarah Lee',
      },
      {
        component: 'Card',
        status: 'Stable',
        mobile: true,
        desktop: true,
        description: 'A flexible card component',
        figma: '#',
        docs: '#',
        owner: 'Michael Brown',
      },
      {
        component: 'Accordion',
        status: 'Deprecated',
        mobile: true,
        desktop: true,
        description: 'An accordion component for collapsible content',
        figma: '#',
        docs: '#',
        owner: 'Emily Davis',
      },
      {
        component: 'Tabs',
        status: 'Legacy',
        mobile: true,
        desktop: true,
        description: 'A tabbed interface component',
        figma: '#',
        docs: '#',
        owner: 'David Lee',
      },
    ];
    if (search) {
      data = data.filter(
        (item) =>
          item.component.toLowerCase().includes(search.toLowerCase()) ||
          item.status.toLowerCase().includes(search.toLowerCase()) ||
          item.mobile.toLowerCase().includes(search.toLowerCase()) ||
          item.desktop.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.owner.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filters.status.length > 0) {
      data = data.filter((item) => filters.status.includes(item.status));
    }
    if (filters.mobile.length > 0) {
      data = data.filter((item) => filters.mobile.includes(item.mobile));
    }
    if (filters.desktop.length > 0) {
      data = data.filter((item) => filters.desktop.includes(item.desktop));
    }
    if (filters.owner.length > 0) {
      data = data.filter((item) => filters.owner.includes(item.owner));
    }
    if (sortColumn) {
      data.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [search, sortColumn, sortOrder, filters]);
  return (
    <div className="border rounded-lg w-full mt-6">
     
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort('component')}
              >
                Component
                {sortColumn === 'component' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort('status')}
              >
                Status
                {sortColumn === 'status' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort('mobile')}
              >
                Mobile
                {sortColumn === 'mobile' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort('desktop')}
              >
                Desktop
                {sortColumn === 'desktop' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Figma</TableHead>
              <TableHead>Docs</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort('owner')}
              >
                Owner
                {sortColumn === 'owner' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.component}</TableCell>
                <TableCell> <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "Alpha"
                        ? "bg-yellow-100 text-yellow-800"
                        : item.status === "Beta"
                        ? "bg-blue-100 text-blue-800"
                        : item.status === "Stable"
                        ? "bg-green-100 text-green-800"
                        : item.status === "Legacy"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span></TableCell>
                <TableCell>{item.mobile?  <CheckIcon className="w-5 h-5 text-green-500" />: null}</TableCell>
                <TableCell>{item.desktop ?  <CheckIcon className="w-5 h-5 text-green-500" />: null}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Link
                    href="#"
                    className="text-primary underline"
                    prefetch={false}
                  >
                    <FigmaIcon className="w-5 h-5 text-blue-500" />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href="#"
                    className="text-primary underline"
                    prefetch={false}
                  >
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </Link>
                </TableCell>
                <TableCell>{item.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
