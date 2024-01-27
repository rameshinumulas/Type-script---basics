import React, { ChangeEvent } from "react"

type personType = {
  details: {
    firstName: string,
    lastName: string
  },
  ThisClick: (event: React.MouseEvent<HTMLButtonElement>, id: number, name: string) => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}
export const Person = ({details, ThisClick, handleChange, value} : personType) => {
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, 'pppp')
  }
  return (
    <div>
      <h3>Hello typescript</h3>
      {details.firstName}
      {details.lastName}
      <button onClick={(event) => ThisClick(event, 2, 'string')}>Click this button</button>
      <input onChange={(e) => handleChange1(e)} />
    </div>
  )
}