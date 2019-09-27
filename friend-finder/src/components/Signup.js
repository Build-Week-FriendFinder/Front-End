// Kelly Code

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";


// components
import '../CSS/Signup.css';
import UserContext from '../contexts/UserContext.js';





const Signup = props => {
    const { getUser } = useContext(UserContext);

    const [ newUser, setNewUser ] = useState({      
        name: '',
        email: '',
        password: ''    

        
    });
    
   

    const handleChange = e => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });          
        console.log('handleChange', e.target.name, e.target.value, newUser);        
        
    };



    console.log('newuser', newUser)

    const handleSubmit = e => {
        e.preventDefault();
        props.history.push('./survey/:user_id')
        
        axios
            .post('https://friend-finder-levi.herokuapp.com/api/auth/register', newUser)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);                
                const user_id = res.data.user_id;
                
                
                
            })
            
            .catch(err => console.log('error in signup', err));
    };

    useEffect(
     () => {
         getUser(newUser);
     },
     [ newUser ]
    );
    

    
    // const [startDate, setStartDate] = useState(new Date());

    return (

        
        <>
        

            <form onSubmit={handleSubmit}>

                <h2>Welcome to Friend Finder!</h2>
                <h3>Start meeting new friends today</h3>

                
                <input  type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={newUser.name}
                         />

                <input  type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={newUser.email}
                         />

                <input  type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={newUser.password}
                         />

           
                         
                {/* <label>Date of Birth</label><br/>
                <br/>
                <DatePicker name="dob" selected={startDate} onChange={date => setStartDate(date)} /> */}

              

                 <button type="submit">Submit</button> 

            </form>
        </>
    )

}




export default Signup;
