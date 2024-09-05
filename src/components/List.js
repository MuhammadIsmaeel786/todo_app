import { FcFullTrash} from "react-icons/fc";

function List(props){
    const remove = () =>{
    props.deleteItem(props.newTodo.id)
 }
    return(
        <div >
            <div className="TodoInput">
                <p className="todo-task">{props.newTodo.name}</p>
                <button onClick={remove} className="trashbutton"><FcFullTrash/></button>
                </div>
        </div>
    );
}
export default List;