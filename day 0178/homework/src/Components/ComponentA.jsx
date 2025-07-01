import { useContext } from "react"
import { TextContent } from "../App"

function ComponentA() {
    const count = useContext(TextContent)

    return (
        <div className="bg-stone-500 rounded-2xl border m-2 p-2">
            <h2>Component A: {count}</h2>
        </div>
    )
}

export default ComponentA;
