import { atom, selector, useRecoilValue } from 'recoil';
import { todoAtom } from './todos';

export const searchTermAtom = atom({
    key: 'searchTermAtom',
    default: ''
});

export const filteredTodoLength = selector({
    key: 'filteredTodoLength',
    get: ({ get }) => {
        const searchTermStatus = get(searchTermAtom);
        return (searchTermStatus == '');
    }
})

export const filteredTodoSelector = selector({
    key: 'filteredTodoSelector',
    get: ({ get }) => {
        const todoList = get(todoAtom);
        const searchTerm = get(searchTermAtom);

        if (searchTerm === '') {
            return todoList;
        } else {
            return todoList.filter((task) => {
                return (
                    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    task.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }
    },
});