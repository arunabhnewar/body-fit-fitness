import { useEffect, useState } from "react";

const usePrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch(`./programs.json`)
            .then(res => res.json())
            .then(data => setPrograms(data));
    }, [])
    return programs;
}

export default usePrograms;