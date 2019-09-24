import React, {useState} from 'react';
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

    return (

        <div>
        
        <form>
            <select type="gender"
                    name="gender"                    
                    placeholder="Gender"
                    onChange={handleChange}
                    value={newSurvey.gender}
                    required>                    
                    <option value="business">Male</option>
                    <option value="volunteer">Female</option>
                    <option value="volunteer">Other</option>
            </select>
            
                <input  type="number"
                        name="age"
                        placeholder="age"
                        onChange={handleChange}
                        value={newSurvey.age} />

                <input  type= "text"
                        name="hobbies"
                        placeholder="Swimmming, traveling, etc."
                        onChange={handleChange}
                        value={newSurvey.hobbies} />

                <input  type="text"
                        name="bio"
                        placeholder="Write your bio here"
                        onChange={handleChange}
                        value={newSurvey.bio}
                        style={{padding: 50}} />
        </form>
    </div>

    )

   


}



export default Survey;