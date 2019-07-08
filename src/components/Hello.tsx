import React from 'react'

//functional components with typescript


export interface Props {
    name: string,
    enthusiasmLevel?: number
}

const Hello = ({name, enthusiasmLevel = 1}: Props) => {

    if(enthusiasmLevel <= 0){
        throw new Error("you could be happier")
    }
    return (
        <div>
            Hello {name} your enthusiasm is {getExclamationMarks(enthusiasmLevel)}
        </div>
    )
}

export const getExclamationMarks = (enthusiasmLevel: number) => {
    console.log("a",enthusiasmLevel)
    return Array(enthusiasmLevel +1).join("!")
}

export default Hello;