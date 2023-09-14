/** React components
 * extendes class component
 * render 
 * props => colecciones de datos que se le pasa del padre al hijo
 * hooks que comience con use
 */

import { Component } from "react";

export default class Button extends Component {

    state = {
        contador: 0
    }

    handleIncrement = () =>{
        this.setState({
            contador:this.state.contador+1
        })
    }

    render() {
        return (<>
        <div>
          
            <p>Hola mi nombres es: {this.props.name},
                mi edad es: {this.props.age}</p>
            <p>{this.state.contador}</p>
            <button onClick={this.handleIncrement}>Incrementar</button>
            {this.props.children}
            </div>
        </>);
    }

}