import React from 'react'
import { prisma } from '@/lib/prisma'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'


export default async function Page() {
  

  return (

    <div>
      <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold mb-4">Department</h1>
        <Button variant="outline" size="sm" className='bg-black text-white hover:bg-blue-500'>
          Add Department
        </Button>
      </div>


    <div >
      <Table >
        <TableHeader >
          <TableRow >
            <TableHead>Name Department</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          
            <TableRow >
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              
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
    </div>
  )
}