import { atom, selector } from 'recoil';

export const todoAtom = atom({
    key: 'todoAtom',
    default: []

})

export const titleAtom = atom({
    key: 'titleAtom',
    default: ''
})

export const descriptionAtom = atom({
    key: 'descriptionAtom',
    default: ''
})

export const todoLength = selector({
    key: "todoLength",
    get: ({get}) => {
        const todoList = get(todoAtom);
        console.log(todoList.length != 0)
        return (todoList.length == 0);
    }
})