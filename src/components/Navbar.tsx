import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { MenuIcon , CalendarDays, Menu } from "lucide-react";
import { ModeToggle } from "./theme";

function Navbar() {
  return (
      <div className="flex justify-center w-full">
      <header className="sticky z-50 top-0 inset-x-0 h-16 flex flex-col justify-around w-full max-w-screen-lg mt-1 bg-[#95a5a6] rounded-full dark:bg-gray-950 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <Link className="flex items-center" href="/">
            <CalendarDays />
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className={buttonVariants({ variant: "ghost" })}
              >
              Agendamento
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: "ghost" })}
              >
                Entrar
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({ variant: "ghost" })}
              >
                Criar conta
              </Link>             
              <div className="ml-4 flow-root lg:ml-6">
                <ModeToggle />
              </div>
            </nav>
          <div/>
          </div>
            <div className="flex lg:hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Sheet>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription className="flex flex-col items-center justify-center" >
                      <Link
                        href="/"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Agendamento
                      </Link>
                      <Link
                        href="/sign-up"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Entrar
                      </Link>
                      <Link
                        href="/sign-in"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Criar conta
                      </Link>             
                      <div className="ml-4 flow-root lg:ml-6">
                        <ModeToggle />
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
