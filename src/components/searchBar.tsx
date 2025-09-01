import { useQuery } from "@tanstack/react-query";
import { useState } from "react"


export default function SearchBar() {
    const { currentSearch, setCurrentSearch } = useState("");
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
            const res = await fetch(`https://api.github.com/search/users?q=${currentSearch}`);
            if (!res) throw new Error("Error occured fetching results!")
            const info = res.json();
        } catch (e) {
            console.log(`Error occurred fetching data: ${e}`)
        }
    }

    return (
        <>
            <form onSubmit={getUsers}>
                <input type="text" placeholder="Search for GitHub user" onChange={setCurrentSearch} value={currentSearch} />
                <input type="submit" name="Find" />
            </form>
        </>
    )
}