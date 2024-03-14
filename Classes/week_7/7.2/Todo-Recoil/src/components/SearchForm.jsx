import { searchTermAtom } from "../store/atoms/search";
import { todoAtom } from "../store/atoms/todos";
import {useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil'

export function SearchForm() {

    const [searchTerm,setSearchTerm] = useRecoilState(searchTermAtom);
    
    return(
        <div>
            <form>
                <input type="text" name="" id="" onChange={(e) => (setSearchTerm(e.target.value))} />
            </form>
        </div>
    )
}