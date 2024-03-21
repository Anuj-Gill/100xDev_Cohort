import { todoAtom } from "../store/atoms/todos";
import { titleAtom } from "../store/atoms/todos";
import { descriptionAtom } from "../store/atoms/todos";
import {useRecoilState, useSetRecoilState,RecoilRoot} from 'recoil';

export function TodoForm() {
    const [todos, setTodos] = useRecoilState(todoAtom);
    const [title, setTitle] = useRecoilState(titleAtom);
    const [description, setDescription] = useRecoilState(descriptionAtom);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, {title : title,  description: description}]);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="description" id="" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}