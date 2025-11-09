import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'

const EmployeePage = () => {
  return (
    <Table>
      <TableCaption>A list of employees</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Hire date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>Software Engineer</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>2022-01-15</TableCell>
          <TableCell>
            <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Edit</Button>
            <Button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</Button>
            </TableCell>
        </TableRow>
        <TableRow>

          <TableCell>Jane Smith</TableCell>
          <TableCell>Product Manager</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>2021-11-03</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default EmployeePage