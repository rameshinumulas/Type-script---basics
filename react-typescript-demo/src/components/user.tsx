import {  useState } from "react";

type userDetails = {
  name: string,
  email: string
}

export const UserComp = () => {
  const [userVal, setUserval] = useState<userDetails>({} as userDetails)
  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserval({
      name: e.target.value,
      email: userVal?.email
    })
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserval({
      email: e.target.value,
      name: userVal?.name
    })
  }
  const handleLogin = () =>{

  }
  return (
    <div>
      <input name='name' value={userVal?.name} onChange={handleUser} />
      <input name='email' value={userVal?.email} onChange={handleEmail} />
    </div>
  )
}