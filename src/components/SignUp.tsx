'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

//react-hook-form
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import api from "@/api/api"
import { useRouter } from "next/navigation"





export default function SignUp(){
  const router = useRouter();


  type Inputs = {
  nome: string
  email: string
  senha: string
  tipo: string
  telefone: string
}
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try{
      const response = await api.post('/api/user/create', data);
      console.log(response.data)        
      toast("Usuario criado com sucesso!", {
        description: "Clique para ir para a pagina de login!",
        action: {
          label: "Login",
          onClick:() => setInterval(() => {router.push('/sign-in')}, 2000)
        },
      })
      return response.data
    }catch(error){
      console.error("Erro ao criar usuario", error);
      throw error
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <Label htmlFor="nome" className="text-xl">Nome</Label>
            <Input placeholder="Digite o seu Nome"
              className="w-[300px] mt-1"
              type="text"
              {...register("nome")}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="email" className="text-xl">Email</Label>
            <Input placeholder="Digite o seu Email"
              className="w-[300px] mt-1"
              type="text"
              {...register("email")}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="password" className="text-xl">Senha</Label>
            <Input placeholder="Digite sua Senha"
              className="w-[300px] mt-1"
              type="password"
              {...register("senha")}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="tipo" className="text-xl">Tipo de conta</Label>
            <Controller
              name="tipo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[300px] mt-1">
                    <SelectValue placeholder="Usuario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cliente">Cliente</SelectItem>
                    <SelectItem value="Profissional">Profissional</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="telefone" className="text-xl">Telefone</Label>
            <Input placeholder="Digite seu Telefone"
              className="w-[300px] mt-1"
              type="text"
              {...register("telefone")}
            />
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
    </>
  )
}