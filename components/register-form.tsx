"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { NextResponse } from "next/server";
import { useState } from "react";
import { toast, Toaster } from "sonner"



export default function RegisterFormShadcn() {



    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
      const [form, setForm] = useState({
      nama: "",
      email: "",
      password: "",
      konfirmasiPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
  
      if (password !== password2) {
        alert("Password dan konfirmasi password tidak cocok!");
        return;
      }
  
      setLoading(true);
  
      try {
        // contoh request API register
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({name, email, password }),
        });
  
        const data = await res.json();
  
      setSuccess(data.message);
        setError("");
  
        if (res.ok) {
          toast.success("registrasi berhasil");
          window.location.href = "/dashboard";
        } else {
         toast.error("gagal melakukan registrasi")
        }
      } catch (err) {
        toast.error("server error")
      } finally {
        setLoading(false);
      }
    };






  return (
    
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
    <div >
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>




          <form onSubmit={handleSubmit}>
            <FieldGroup>


             {/* nama lengkap */}
              <Field>
                <FieldLabel htmlFor="name">nama lengkap</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="john doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}

                  required
                />
              </Field>

                {/* EMAILLL */}
                <Field>
                <FieldLabel htmlFor="email">email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                   value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>


{/*  ///PASSWORD */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value )} required />
              </Field>



{/* KNFERM ///PASSWORD */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel
                  htmlFor="password"
                  
                  >Konfirmasi Password</FieldLabel>
                </div>
                <Input 
                id="password2" 
                type="password" 
                value={password2}
              onChange={(e) => setPassword2(e.target.value )} 
              required />
              </Field>







              <Field>
                <Button type="submit" disabled={loading}
            className={`w-full py-3 mt-4 rounded-xl text-white font-semibold shadow-md transition-all duration-200 ${
              loading
                ? "bg-green-950 cursor-not-allowed"
                : "bg-black hover:bg-blue-900 hover:shadow-lg"
            }`}>register</Button>
                
                <FieldDescription className="text-center">
                  
                  Don&apos;t have an account? <Link href={"/shadcn/login"}>login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <Toaster/>
    </div>
    </div>
    </div>
  )
}
