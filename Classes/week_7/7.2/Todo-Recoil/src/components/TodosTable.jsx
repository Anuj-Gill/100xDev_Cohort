import { useRecoilValue } from 'recoil';
import { todoAtom, todoLength } from '../store/atoms/todos';
import { filteredTodoLength, filteredTodoSelector } from '../store/atoms/search';


export function TodosTable() {

    const todos = useRecoilValue(todoAtom);
    const filteredTodos = useRecoilValue(filteredTodoSelector);
    const isFilteredTodoEmpty = useRecoilValue(filteredTodoLength);
    const isTodoEmpty = useRecoilValue(todoLength)
    console.log(isTodoEmpty);
    console.log(isFilteredTodoEmpty);
    console.log(todos)
    console.log(filteredTodos)

    return (
        <div>
            {isFilteredTodoEmpty ? 
            <div>
                {todos.map((task) => {
                    return(
                    <div key={`${task.title}+${task.description}`}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <button>Done</button>
                    </div>
                    )
                })}
            </div>
                : <div>
                    {filteredTodos.map((task) => {
                    return(
                    <div key={`${task.title}+${task.description}`}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <button>Done</button>
                    </div>
                    )
                })}
                </div>}
                {isTodoEmpty && <div>No tasks for today!!</div>}
        </div>
    )
}