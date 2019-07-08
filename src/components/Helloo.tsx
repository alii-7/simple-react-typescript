import React from 'react'
import { Props, getExclamationMarks } from './Hello'

class Helloo extends React.Component<Props>{
    render() {
        const { name, enthusiasmLevel = 1} = this.props

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div>
                Helloo {name} your enthusiasm is {getExclamationMarks(enthusiasmLevel)}
            </div>
        )
    }

}

export default Helloo