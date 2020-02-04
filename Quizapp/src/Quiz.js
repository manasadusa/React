import React, { Component } from 'react'
import Qdata from './Quizdata'
import Questionbox from './Questionbox'
import Result from './Result'
export default class Quiz extends Component {
    state={
        Qbank:[],
        score:0,
        resp:0
    }
    getQuestions=()=>{
        Qdata().then(q=>{
            console.log("query"+q);
            this.setState({
                Qbank:q
            })
        })
    }

    computeanswer=(answer,correct)=>{
        if(answer===correct){
            this.setState({
                score:this.state.score+1
            })
            
        }
        this.setState({
            resp:this.state.resp<5?this.state.resp+1:5
        })

    }

    componentDidMount(){
        this.getQuestions();
    }

    playagain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            resp:0
        })
    }
    render() {
        return (
            <div style={{textAlign:"center",backgroundColor:"lightpink",borderRadius:"30%"}}>
               <h1 >Quiz App</h1> 
        {this.state.Qbank.length>0 && this.state.resp<5 &&
        this.state.Qbank.map(
        ({question,options,correct,Qid}) => <Questionbox questions={question} options={options} key={Qid} selected={answer=>this.computeanswer(answer,correct)}/>
            )}
{console.log(this.state.resp)}
        {this.state.resp===5 ?(<Result score={this.state.score} playagain={this.playagain}/>):null}

            </div>
        )
    }
}
