import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
export default class App extends React.Component{
constructor(){
    super()
    this.state={
        list:[],
        newitem:""
    }
}
additem=()=>{
    const newitem={
        id:1+Math.random(),
    
        value:this.state.newitem
    }

    const list=[...this.state.list]
    list.push(newitem)
    this.setState({
        list,
        newitem:""
    })
}
createitem=(e)=>{
    const {name, value}=e.target
    this.setState({
        [name]:value
    })
}

deleteaction(id){
    console.log("id",id);
        const list=[...this.state.list]
        const ulist=list.filter(item=>item.id!==id)
        this.setState({
            list:ulist
        })
}
render(){
    return(
        <div>
            <label className="textbox">
            <h4>Add items to action</h4>
           
            <input type="text" placeholder="enter item" value={this.state.newitem} name="newitem"onChange={this.createitem} />
            <button onClick={this.additem}>add item</button>
            </label>
            {this.state.list.map(
                item=>{
                    return(
                        <ul key={item.id}>
                            
                            <li>{item.value} <button onClick={()=>this.deleteaction(item.id)}>delete</button></li>
                        </ul>
                    )
                }
            )}

        </div>
    )
}
}