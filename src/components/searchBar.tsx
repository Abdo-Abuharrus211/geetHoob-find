import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/searchSlice";

export default function SearchBar() {
    const [target, setTarget] = useState("");
    const searchHistory = useSelector((state) => state.history)
    const dispatch = useDispatch();
    // TODO: need another state variable for returned data?
    // const { isPending, isError, data } = useQuery({
    //     queryKey: [currentSearch],
    //     queryFn: () => {
    //         fetch(`https://api.github.com/search/users?q=`).then((res) => {
    //             res.json
    //             //TODO: set the data into state?
    //         })
    //     }
    // });

    // if (isPending) return "Waiting..."
    // if (isError) throw new Error("Error occured fetching results!")

    const getUsers = async () => {
        try {
            console.log(target)
            const res = await fetch(`https://api.github.com/search/users?q=${target}`);
            if (!res) throw new Error("Error occured fetching results!")
            const info = await res.json();
            //TODO: set the results array info.items
        } catch (e) {
            console.log(`Error occurred fetching data: ${e}`)
        }
    }


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                getUsers();
                dispatch(add(target));
            }}>
                <input
                    type="text"
                    placeholder="Search for GitHub user"
                    onChange={(e) => setTarget(e.target.value)}
                    value={target}
                />
                <input type="submit" name="Find" />
            </form>
        </>
    )
}