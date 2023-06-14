import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props){
        super(props)
        this.state = {name: "", email: "", password: ""}

        this.handleSubmit = (e)=> {
            e.preventDefault()
            console.log(this.state)
          }

          this.handleChange = (e)=> {
            e.preventDefault()
            this.setState({
                [e.target.name]: e.target.value
            })
          }

    }


    render() {
        return (
            <div className='App'>
                <h1>CLASS METHOD</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label >Name:</label>
                    <br />
                    <input type="text"  name="name" onChange={this.handleChange}/>
                    <br />
                    <label >Email:</label>
                    <br />
                    <input type="email" name="email" onChange={this.handleChange}/>
                    <br />
                    <label >Password:</label><br/>
                    <input type="password"  name="Password" onChange={this.handleChange}/>
                    <br />
                    <input type="submit" defaultValue="Submit" />
                </form>
                <hr></hr>
            </div>

        );
    }
}

export default ClassForm;
