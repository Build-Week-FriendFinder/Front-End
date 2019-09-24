import React, {useState} from 'react';
import axios from 'axios';
import '../CSS/Signup.css';





const Survey = () => {


    const [ newSurvey, setNewSurvey ] = useState({		
        gender: '',
        age: '',
        hobbies: '',
        bio: ''
	
	});

    const handleChange = e => {
		setNewSurvey({ ...newSurvey, [e.target.name]: e.target.value });
		console.log('handleChange', e.target.name, e.target.value, newSurvey);
    };

    const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('', newSurvey)
			.then(res => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				const id = res.data.id;
				
			})
			.catch(err => console.log('error in survey', err));
	};


    return (

        <div>
        
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

                <input  type="number"
                        name="age"
                        placeholder="Age"
                        onChange={handleChange}
                        value={newSurvey.age} />

                
                <input  type= "text"
                        name="hobbies"
                        placeholder="Hobbies: Swimmming, traveling, etc."
                        onChange={handleChange}
                        value={newSurvey.hobbies} />

                
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