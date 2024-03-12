import { atom, selector } from 'recoil';

export const countAtom = atom({
    key: 'countAtom',  //uniquley identify a atom
    default: 0  //default value
}); 

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});
