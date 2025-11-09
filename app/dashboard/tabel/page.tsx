"use client"
import { useEffect, useState } from "react";
import { Prisma } from "@prisma/client";
import { Button } from "@/components/ui/button";

export default function FormKaryawan() {
  const [form, setForm] = useState({
    no_id: "",
    nama: "",
    jabatan: "",
    no_mesin: "",
    grub: "",
    status: "",
  });

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/karyawan");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);




  

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-5xl mx-auto">
        {/* === FORM === */}
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">
            TABEL KARYAWAN DIVISI 4 🧑‍💼
          </h1>
          {/* form-nya sama seperti sebelumnya */}
        </div>

        {/* === TABEL DATA === */}
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Data Karyawan 📋
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="border-black px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">No ID</th>
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">Jabatan</th>
                  <th className="px-4 py-2 text-left">No Mesin</th>
                  <th className="px-4 py-2 text-left">Grub</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-center">action</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td  className="text-center py-4 text-gray-500">
                      Belum ada data karyawan
                    </td>
                  </tr>
                ) : (
                  data.map((k) => (
                    <tr key={k.id} className="hover:bg-gray-100 text-black">
                      <td className="border px-4 py-2">{k.id}</td>
                      <td className="border px-4 py-2">{k.no_id}</td>
                      <td className="border px-4 py-2">{k.nama}</td>
                      <td className="border px-4 py-2">{k.jabatan}</td>
                      <td className="border px-4 py-2">{k.no_mesin}</td>
                      <td className="border px-4 py-2">{k.grub}</td>
                      <td className="border px-4 py-2">{k.status}</td>
                      <td className=" flex border px-4 py-2 text-center">

                    
                    <Button className="bg-red-600" >Hapus</Button>
                     <Button className="bg-blue-700">Edit</Button>
                  </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
             
          </div>
         
        </div>
      </div>
    </div>
  );
}
