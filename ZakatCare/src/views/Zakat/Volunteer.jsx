import { useState,useEffect } from "react";

function Volunteer({title,desc,img}) {

    const [count, setCount] = useState(0);  // State to track the current count

    useEffect(() => {
        let start = 0;  // Start counting from 0 or any other number
        const end = parseInt(title);  // The final value that we want to reach

        if (start === end) return;  // If start equals end, no need to count

        let incrementTime = (end - start) / 100;  // Duration of animation in ms (e.g., 100ms)

        let timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === end) clearInterval(timer);  // Clear the interval once we reach the end
        }, incrementTime);

        return () => clearInterval(timer);  // Clean up timer on component unmount
    }, [title]);
    return (<>
        <div  className="volunteer flex flex-column items-center justify-evenly">
            <div className="volImgg">
                <img src={img} alt="" />
            </div>
            <div className="volHead">
                <h3>{count}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </>);
}

export default Volunteer;