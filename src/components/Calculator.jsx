import React, { useState } from "react"

export default function Calculator(props) {
    const [count, setCount] = useState(0)

    return <div>
        count: { count }
        <button onClick={() => setCount(count + 1)}>+1\??2</button>
    </div>
}