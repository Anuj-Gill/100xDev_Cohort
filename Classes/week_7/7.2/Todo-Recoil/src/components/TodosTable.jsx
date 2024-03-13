import { useRecoilValue } from 'recoil';
import { todoAtom, todoLength } from '../store/atoms/todos';


export function TodosTable() {

    const todos = useRecoilValue(todoAtom);
    const todoIsEmpty = useRecoilValue(todoLength);
    console.log(todoIsEmpty);
    console.log(todos)

    return (
        <div>
            {todoIsEmpty ? 
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
                    No todo's added yet!!
                </div>}
        </div>
    )
}