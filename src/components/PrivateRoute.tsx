import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAuthenticated } from "@/functions/checkUserAuthenticated";
import { useRouter } from "next/navigation";

import { ReactNode, useEffect } from "react";

type PrivateRouteProps = {
  children: ReactNode;
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticated = checkUserAuthenticated();

  useEffect(() => {
    if(!isUserAuthenticated) {
      push(APP_ROUTES.public.login)
    }
  }, [isUserAuthenticated, push])

  return(
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}
