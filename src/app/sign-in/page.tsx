'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useRouter } from "next/navigation"
import api from "@/api/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button"

export default function SignIn(){
  const router = useRouter();

  type Inputs = {
    email: string
    senha: string
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try{
      const response = await api.post('/api/user/login', data);        
      if(response.data.error){
        toast.error("Erro ao fazer login");
      }
      toast.success("Usuario logado com sucesso!");
      console.log(response.data.token)
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      localStorage.setItem("token", JSON.stringify(response.data.token));
      router.push('/agendify');


    }catch(error){
      toast.error("Erro ao logar usuario")
      console.error("Erro ao logar usuario", error);
      throw error
    }
  }

  return(
    <div className="flex items-center flex-col ">
      <h1 className="text-5xl font-bold mt-10">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
              <Label htmlFor="email" className="text-xl">Email</Label>
              <Input placeholder="Digite o seu Email"
                className="w-[300px] mt-1"
                type="text"
                {...register("email")}
              />
          </div>
        <div className="mb-2">
              <Label htmlFor="senha" className="text-xl">Senha</Label>
              <Input placeholder="Digite sua Senha"
                className="w-[300px] mt-1"
                type="password"
                {...register("senha")}
              />
          </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}