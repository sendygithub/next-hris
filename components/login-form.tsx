"use client";
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
import { useState } from "react";
import Link from "next/link";
import { toast, Toaster } from "sonner";




export function LoginFormshadcn( ) {
  const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
  

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        // Contoh: kirim data ke API login
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
  
        const result = await res.json();
  
        if (res.ok) {
          toast.success("login berhasil", { description:"wellcome back"});
          // redirect ke dashboard
          window.location.href = "/dashboard";
        
        
        }
        
        else {
          
        toast.error('Login gagal')
        }
      } catch (err) {
         toast.error( "Gagal login");
      } finally {
        setLoading(false);
      }
    };





  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
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
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  
                </div>
                <Input
                id="password" 
                type="password" 
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} required />
              </Field>
              <Field>
                <Button type="submit" disabled={loading}
            className={`w-full py-3 mt-4 rounded-xl text-white font-semibold shadow-md transition-all duration-200 ${
              loading
                ? "bg-green-950 cursor-not-allowed"
                : "bg-black hover:bg-blue-900 hover:shadow-lg"
            }`}>Login</Button>
                
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href={"/shadcn/register"}>register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
     
    </div>
    </div>
    
  )
}
