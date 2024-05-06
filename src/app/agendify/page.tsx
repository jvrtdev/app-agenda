'use client'
import api from "@/api/api"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { AxiosHeaders } from "axios"
import { useEffect, useState } from "react"



const Agendify = () => {  

  type EmpresasProps = {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    celular: string;
  }
  const [ empresas, setEmpresas ] = useState<EmpresasProps[]>([]);


  useEffect(() => {
    getEmpresas()
  }, [])      

    const getEmpresas = async () => {  

      try{
        const token = localStorage.getItem('token');//pega o token do localstorage
        const jsonStringWithoutQuotes = JSON.stringify(token).replace(/\\|\"/g, '');//retira as aspas e barras que acabam entrando no token


        const headers = {
          Authorization: `Bearer ${jsonStringWithoutQuotes}`
        };
      
        const response = await api.get('/api/users', {headers})
        setEmpresas(response.data);
      }
      catch(error){
        console.error(error)
        return error
      }
    }
  return(
    <main className="flex justify-center flex-col items-center gap-2">
      <MaxWidthWrapper>
        <h1 className="text">pagina inicio do app</h1>
        {empresas.map((empresa: EmpresasProps) => (
          <div key={empresa.nome} className="flex flex-col gap-2 items-center border-2 m-2">
            <p>{empresa.nome}</p>
            <p>{empresa.email}</p>
            <p>{empresa.senha}</p>
            <p>{empresa.celular}</p>
          </div>
        ))}
      </MaxWidthWrapper>

    
    </main>
  )
}
export default Agendify