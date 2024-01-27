type personListTypes = {
  useList: {
    firstName: string,
    lastName: string,
    age?: number
  }[]
};

export const PersonList = (props: personListTypes) => {
  return (
    <div>
      {props.useList.map(each => (
        <div>
          {each.firstName}
          {each.lastName}
          {each.age}
        </div>
      ))}

    </div>
  )
}