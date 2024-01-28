import { createContext, useState } from "react"
import { theme } from './themes';


type providerPropsToUse = {
  children: React.ReactNode
}

type userObj = {
  name: string,
  email: string
}

// INITIALIZE CONTEXT STATE TYPES
type userContext = {
  userVal: userObj | null,
  //COPY THE TYPE OF SETUSER ON USESTATE WHILE HOVER ON setUser METHOD AND COPY
  setUser: React.Dispatch<React.SetStateAction<userObj | null>>,
  // THEMES STYLES TYPES DECLARATION
  theme: {
    primary: {
      mainBackground: string,
      mainText: string
    }
    secondry: {
      backGrndColor: string,
      text: string
    }
  }
}

export const getContextPrvd = createContext({} as userContext);

export const ContextProvider = ({ children }: providerPropsToUse) => {
  const [userVal, setUser] = useState<userObj | null>(null)
  return (
    // USE CONTEXT VALUES IN VALUE PROP TO ACCESS WHEREEVER U WANT
    <getContextPrvd.Provider value={{ userVal, setUser, theme }}>
      {children}
    </getContextPrvd.Provider>
  )
}