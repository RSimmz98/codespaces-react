import React from 'react'
import * as go from 'gojs'
import { ReactDiagram } from 'gojs-react'
import './App.css'

//lol what am I missing now lol 

function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram = 
    $(go.Diagram,
        {
            'undoManager.isEnabled': true,
            'clickCreatingTool.archetypeNodeData': {
                text: 'new node', color: 'lightblue'
            },
            model: new go.GraphLinksModel(
                {
                 linkKeyProperty: 'key'
                })
        })
    diagram.nodeTemplate = 
    $(go.Node, 'Auto',
    new go.Binding('fill', 'color'))
    $(go.TextBlock, 
        {margin: 8, editable: true},
        new go.Binding('text').makeTwoWay()
    )

        return diagram;

}

function handleModelChange(){
    alert('some model we are testing will this diagram even work xd😎')
}


function Go(){
    return (
      <div>
        ...
        <ReactDiagram
         initDiagram={initDiagram}
         divClassName='diagram-component'
         nodeDataArray={[
            {key: 0, text: 'Alpha', color:'tomato', loc: '0 0'},
            {key: 1, text: 'Beta', color:'burgundy', loc: '200 0'},
            {key: 2, text: 'Gamma', color:'purple', loc: '0 200'},
            {key: 3, text: 'Delta', color:'green', loc: '200 200'},
         ]}
         linkDataArray ={[
            {key: -1, from: 0, to: 1},
            {key: -2, from: 0, to: 2},
            {key: -3, from: 1, to: 1},
            {key: -4, from: 2, to: 3},
            {key: -5, from: 3, to: 0},
         ]}
         onModelChange = {handleModelChange}
         >
            ...
        </ReactDiagram>
      </div>
    )
}
export default Go