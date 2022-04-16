import {useState} from "react";

export default function Search() {
    let items = ["aaa","bbb","ccc"];

    const [search,setSearch] = useState('')

    const findItem = items.filter((i)=>i.toLowerCase().includes(search.toLowerCase()))

    return (
        <>

            <input aria-label="search" placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
                Items: {items.length}
                 {!findItem.length && 'No item found'}
                {findItem.map(i=>(<><br /><span>{i}</span></>))}

            </>
    )
}
