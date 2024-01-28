import { useContext } from "react";
import { getContextPrvd } from "./ContextProvider";

export const MainCom = () => {
  const mainStyContext = useContext(getContextPrvd);
  const handleLogin = () =>{
    mainStyContext.setUser({
      name: 'Hello Ramesh',
      email: 'inumularamesh1@gmail.com'
    })
  }
  const handleLogout = () => {
    mainStyContext.setUser({
      name: '',
      email: ''
    })
  }
  return (
    <div style={{ backgroundColor: mainStyContext.theme.primary.mainBackground, color: mainStyContext?.theme.primary?.mainText }}>
    <h2>this is the context provider styles we are using</h2>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h3>User Name: {mainStyContext.userVal?.name}</h3>
      <h3>User Email: {mainStyContext.userVal?.email}</h3>
    </div>
  )
}