import React from 'react';
type objType = {
  message: string,
  isVisible: boolean,
  count: number
}

export const Greet = ({ message, isVisible, count }: objType) => {
  return (
    <div>
      <h2> Hello World</h2>
      <h3>{message}</h3>
      {isVisible ? count : 'no count found'}
    </div>
  )
}