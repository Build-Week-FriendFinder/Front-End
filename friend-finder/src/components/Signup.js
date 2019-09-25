// Kelly Code

import React, {useState, useEffect, useContext} from 'react';
// import axios from 'axios';
import ReactDOM from 'react-dom';


// components

import UserContext from '../contexts/UserContext.js';






const Signup = () => {
    // const { getUser } = useContext(UserContext);


    const [ newUser, setNewUser ] = useState({		
		name: '',
		email: '',
		password: '',
	
	});

    const handleChange = e => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		console.log('handleChange', e.target.name, e.target.value, newUser);
    };



    const handleSubmit = e => {
		e.preventDefault();
		// axios
		// 	.post('', newUser)
		// 	.then(res => {
		// 		console.log(res);
		// 		localStorage.setItem('token', res.data.token);
		// 		const id = res.data.id;
				
		// 	})
		// 	.catch(err => console.log('error in signup', err));
	};

	// useEffect(
	// 	() => {
	// 		getUser(newUser);
	// 	},
	// 	[ newUser ]
	// );
    

    


    return (
        <>
        

            <form onSubmit={handleSubmit}>
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
                        placeholder="PassWord"
                        onChange={handleChange}
                        value={newUser.password}
                         />

                 <button type="submit">Submit</button>               
            </form>
        </>
    )

}





export default Signup;

