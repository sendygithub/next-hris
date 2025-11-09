import React from 'react'
import { TableCell,TableHead, Table, TableHeader, TableRow, TableBody } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
const PayrollPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Payroll</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>fullname</TableHead>
            <TableHead>departmen</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Net salary</TableHead>
            <TableHead>Pay date</TableHead>
            <TableHead>action</TableHead>

          </TableRow>
        </TableHeader>

        <TableBody>
          
            <TableRow >
              <TableCell>sendy</TableCell>
              <TableCell>IT</TableCell>
              <TableCell>5000</TableCell>
              <TableCell>4500</TableCell>
              <TableCell>2023-03-01</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className='bg-green-400 hover:bg-green-500'>
                  Edit
                </Button>
                <Button variant="outline" size="sm" className='bg-red-400 hover:bg-red-500'>
                  delete
                </Button>
                <Button variant="outline" size="sm" className='bg-blue-400 hover:bg-blue-500'>
                  view
                </Button>
              </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </div>
  )
}

export default PayrollPage