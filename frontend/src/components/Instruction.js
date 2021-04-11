import React, { Component } from 'react'

export default class Instruction extends Component {
    constructor(props){
        super(props);
        this.state={
            accepted:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        if(this.state.accepted === true){
            window.location.href='/calibration';
        }
        else{
            alert('accept the instructions');
        }
    }
    render() {
        return (
            <div>
                <div div class="mx-auto" style={{width:'60%',height:'60%'}}>
                    <div style={{padding: '3vh', borderRadius: '5px',backgroundColor: '#727985',color: 'white',margin:'auto',textAlign:'center'}}><h1> Insturctions for Test paper</h1></div>
                    <ol class="list-group" type='1' style={{fontSize:'1.4rem',paddingTop:'2%',paddingLeft:'4vh'}}>
                        <li>Student must be in the frame throughout the test. <br/>If he/she moves out, it will generate warning.</li>
                        <li>Test duration: 15 mins</li>
                        <li>Student should not switch tabs during examination.</li>
                        <li>Camera will be on during the test, if 3 warning are called, test will be terminated.</li>
                        <li>Every correct answer will award you 1 mark.</li>
                        <li>And incorrect will deduct .25 mark.</li>
                        <li>Test will have __ number of questions.</li>
                        <li>__ Maximum marks</li>
                        <li>During test proper internet collectivity must be maintained.</li>
                        <li>It will be MCQ test</li>
                    </ol>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={()=>this.setState({accepted:true})} value={this.state.accepted}/>
                    <label class="form-check-label" for="exampleCheck1">Ready for exam ?</label>
                    <button class="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
                </div>
            </div>
        )
    }
}
