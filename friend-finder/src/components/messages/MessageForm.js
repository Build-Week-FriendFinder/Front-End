import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";



const MessageForm = ({status, touched, errors}) => {
  const [user, setUser] = useState([]);
console.log("is touched", touched);
useEffect(() => {
  if (status) {
    setUser([...user, status]);
  }
}, [status]);




return (


<div className="MessageBox">
       
       <div className="MessageBoxTop">
         
         <div className="ProfileBox">
           
           <div className="UserImg">

             <img src="image"></img>

           </div>

              {/* <h4>I{friendName}I</h4> */}

             <button type="submit2" className="Btn2">Remove Friend</button> 

         </div>
       
        

 
   <div className="formholder">


       <Form>

           Send Message: 
           <Field type="text" name="message" placeholder="Enter Message" />
            {touched.message && errors.message && (
           <p className="error">{errors.message}</p>
           )} 

       </Form>

       {/* USER MESSAGE DISPLAYED ON SCREEN */}
           <div>

             {user.map(person => (

               <li>{person.message}</li>

             ))}
            
           </div>

       </div> 
       {/* END Formholder*/}

   </div>   
         
         <div className="btn-holder">
         <button type="submit" className="Btn">Send Message</button> 
            
         </div>
           
       
       </div>

)}
const FormikMessageForm = withFormik({

    mapPropsToValues({message}){

        return {
        
          message: message || ""
       
        };
      },

      // validationSchema: Yup.object().shape({
        // message: Yup.string().required("You silly!!!"),
        // }),



// .post = MESSAGE friend

        handleSubmit(e, user, { setUser}) {
            e.preventDefault();
            const user_id = 1;
            const friend_id = 1;
            axios
              .get(`https://friend-finder-levi.herokuapp.com/api/friends/${user_id}`)
              .post(`https://friend-finder-levi.herokuapp.com/api/messages/user_id/${friend_id}`, user)
              .then(res => {
                setUser(res.data);
              })
              .catch(err => console.log(err.response));
          }







    })(MessageForm);

    export default FormikMessageForm;