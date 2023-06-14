import React, { useState } from 'react';

const FunctionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }



    return (

        <div className='App'>
            <h1>FUNCTION METHOD</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                ></input>
                <br />

                <label>Email:</label>
                <br />
                <input
                    type="email"
                    name="email"
                    onChange={handleChange} />
                <br />
                <label>Password:</label><br />
                <input
                    type="password"
                    name="Password"
                    onChange={handleChange} />
                <br />
                <input type="submit" defaultValue="Submit" /><br />
            </form>

        </div>

    );
}

export default FunctionForm;
