import { useState } from "react";

export function useChoice(defaultChoice){
    const [choice, setChoice] = useState(defaultChoice)

    function onChange(e){
        setChoice(e.target.choice)
    }

    return{
        choice,
        onChange
    }
}