import React from 'react'
import { Props } from './Hello'

export interface Props {
    name: string,
    enthusiasmLevel?: number
}

export interface State {
    currentEnthusiasm: number,
  }

class Hellooo extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = { currentEnthusiasm : props.enthusiasmLevel || 1}
        this.onDecrement = this.onDecrement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
    }
    onDecrement(){
        this.setState({
            currentEnthusiasm: this.state.currentEnthusiasm-1
        })
    }
    onIncrement(){
        this.setState({
            currentEnthusiasm: this.state.currentEnthusiasm+1
        })
    }
    render(){
        return (
            <div className="hello">
              <div className="greeting">
                Hello {this.props.name + getExclamationMarks(this.state.currentEnthusiasm)}
              </div>
              <button onClick={this.onDecrement}>-</button>
              <button onClick={this.onIncrement}>+</button>
            </div>
          );
    }
}

export default Hellooo

export const getExclamationMarks = (enthusiasmLevel: number) => {
    console.log("a",enthusiasmLevel)
    return Array(enthusiasmLevel +1).join("!")
}