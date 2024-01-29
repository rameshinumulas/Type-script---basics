import React from 'react';
type buttonProps = {
  colorVariant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>
export const CustomButton = ({ colorVariant, children, ...rest }: buttonProps) => {
  return (
    <button className={`button-width-${colorVariant}`} {...rest}>
      {children}
    </button>
  )
}