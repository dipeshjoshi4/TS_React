import CreateTodo from "./create-todo"
import UserCard from "./UserCard";

const Card = () => {
    return (
        <>
            <h1>Hello Card Componenet</h1>
            <CreateTodo />
            <UserCard Name="Dipesh Joshi" Professional="Sodtware Engineer" />
            <UserCard Name="Hardik Joshi" Professional="Data Engineer" />
        </>
    )
}

export default Card;