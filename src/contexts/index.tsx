import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface AppContextProps {
  children: ReactNode;
}
export const AppContext = ({ children }: AppContextProps) => {
  return (
    <>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
    </>
  );
};