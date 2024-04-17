import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-5xl font-bold text-center mt-10">Faça seu cadastro ou entre!</h1>
        <Link href="/sign-up" className="border-2 p-2 border-black rounded-md w-20 text-2xl">Entrar</Link>

     
    </main>
  );
}
