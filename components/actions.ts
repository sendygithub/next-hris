"Server Component"

import React from 'react'
import z, { int, object, string } from 'zod'
import { prisma } from '@/lib/prisma'
import { error } from 'console'

import { redirect } from 'next/dist/server/api-utils'

const ContactSchema = z.object({
    
    no_id: z.string().min(4),
    name: z.string().min(6),
    jabatan: z.string().min(5),
    no_mesin: z.string().min(5),
    grub: z.string().max(7),
    status:z.string().min(5),
    
})


const UpdateKaryawan = async( id:string, prevSate: any, formdata : FormData) => {

    const validatedFields = ContactSchema.safeParse(
        Object.fromEntries(formdata.entries())
    )
    if (!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await prisma.dbkaryawan.update
        ({
            data: {
                no_id: validatedFields.data.no_id,
                nama: validatedFields.data.name,
                jabatan: validatedFields.data.jabatan,
                no_mesin: validatedFields.data.no_mesin,
                grub: validatedFields.data.grub,
                status: validatedFields.data.status
            },
            where:{ id: Number(validatedFields.data) },
        })
        
    } catch (error) {
       return{message : "gagal update data karyawan" } 
    }

 
}

export default UpdateKaryawan