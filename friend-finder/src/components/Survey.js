import React, {useState} from 'react';
import axios from 'axios';
import '../CSS/Signup.css';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import userContext from '../contexts/UserContext.js'




const Survey = () => {

    const [ newSurvey, setNewSurvey ] = useState({      
        gender: '',        
        // hobbies: '',
        bio: '',
        // name: 'test again',
        // email: 'testing@email.com',
        // password: '123',
        // user_id: 6,
        dob: null,
        coordinates: null,
        location: "test location",
        profile_img: null   
    });
    
   

    const handleChange = e => {
        setNewSurvey({ ...newSurvey, [e.target.name]: e.target.value });
        console.log('handleChange', e.target.name, e.target.value, newSurvey);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const thisUser = 5
        axios
            .put(`https://friend-finder-levi.herokuapp.com/api/survey/${thisUser}`, newSurvey)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                // const user_id = res.data.user_id;
                
                
            })
            
            .catch(err => console.log('error in survey', err));
    };

    return (

        <div>

            <h2>Welcome to Friend Finder! We'd love to learn more about you.</h2>
        
        <form onSubmit={handleSubmit}>

            
            <select type="gender"
                    name="gender"                    
                    placeholder="Gender"
                    onChange={handleChange}
                    value={newSurvey.gender}
                    required> 
                    <option>Gender</option>                   
                    <option value="gender">Male</option>
                    <option value="gender">Female</option>
                    <option value="gender">Other</option>
            </select>              

                {/* add a btn under this input, and then click handler where its making a request to post */}
                {/* <input  type= "text"
                        name="hobbies"
                        placeholder="Hobbies: Swimming, traveling, yoga etc."
                        onChange={handleChange}
                        value={newSurvey.hobbies} /> */}

                
                <input  type="text"
                        name="bio"
                        placeholder="Write your bio here"
                        onChange={handleChange}
                        value={newSurvey.bio}
                        style={{padding: 50}} />

                <button type="submit">Submit</button>
        </form>
    </div>

    )

   

}


export default Survey;
