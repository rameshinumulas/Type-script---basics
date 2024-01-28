import { createContext } from "react"
import { theme } from './themes';


type providerPropsToUse = {
    children: React.ReactNode;
}

export const getContextPrvd = createContext(theme);

export const ContextProvider = ({ children }: providerPropsToUse) => {
return(
    <getContextPrvd.Provider value={theme}>
        {children}
    </getContextPrvd.Provider>
)
}