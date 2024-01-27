type statusComProps = {
  status: boolean,
  children: React.ReactNode
}
export const StatusCom = (props: statusComProps) => {
  let message;
  if (!props.status) {
    message = 'Loading....'
  } else {
    message = 'Data fetched'
  }
  return (
    <div>
      {message}
      {props?.children}
    </div>
  )
}