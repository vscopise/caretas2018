import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

function uuid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const appenedElements = {}
const appendElementContainer = document.querySelector('.append-element-container')

function getAppendedElements() {
    const elements = []
  
    const keys = Object.keys(appenedElements)
    const length = keys.length
  
    if (length > 0) {
      keys.forEach((key) => {
        elements.push(appenedElements[key])
      })
    }
  
    return elements
}

class AppendBodyComponent extends Component {
    constructor(props){
        super(props)

        this.appendElementContainer = appendElementContainer
    }

    setAppendElementId(id){
        this.appendElementId = id
    }

    updateAppendElement(content){
        appenedElements[this.appendElementId] = content

        this.updateAppendElements()    
    }

    updateAppendElements(){
        ReactDOM.render(<span>{getAppendedElements()}</span>, appendElementContainer)
    }

    removeAppendElement(){
        delete appenedElements[this.appendElementId]

        this.updateAppendElements()
    }
}

class Modal extends AppendBodyComponent {
    constructor(props){
        super(props)

        this.uniqueId = uuid()

        this.setAppendElementId(this.uniqueId)
    }

    componentDidMount(){
        this.updateSelf()
    }

    componentDidUpdate(){
        this.updateSelf()
    }

    componentWillUnmount(){
        this.removeAppendElement()
    }

    updateSelf(){
        this.updateAppendElement(
            <div
              key={this.uniqueId}
              className="modal"
            >
              <div className="modal__container">
                {this.props.children}
              </div>
            </div>
        )
    }

    render(){
        return null
    }
}

ReactDOM.render ((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
