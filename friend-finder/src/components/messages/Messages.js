// Ben Solt
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
// import * as Yup from "yup";

import { NavLink } from "react-router-dom";



const MessageForm = ({status, touched, errors}) => {
    const [user, setUser] = useState([]);
console.log("is touched", touched);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (


    <div className="Message-Container">


    {/* <h1>MESSAGES</h1>    */}
   

        <div className="friend-photo">
        
        </div>

    <div className="friend-List-container">
        <h2>FRIENDS</h2>

        <div className="friend-List">
        
        <img src="image"></img>

        <img src="image"></img>

        <img src="image"></img>

        </div>

        

    </div>

   
   <div className="MessageBox">
       
    <div className="MessageUserImg">
        <h6>Profile Image</h6>
    </div>
    

    <div className="Inputcontainer">

      

       <h4>Send Message:</h4>

    <Form>
    
        <Field type="text" name="Message" placeholder="Enter Message" />
        {/* {touched.music && errors.music && (
        <p className="error">{errors.music}</p> */}

    </Form>

       
      
       

        </div>

        <button type="submit" className="Btn">Send Message</button> 
        
        </div>

        </div>
        // END Message Container


      );
    }
        const FormikMessageForm = withFormik({

            mapPropsToValues({gender, date, location, movie, book, music}){

            
                return {
                  
                  
                  date: date || "",
                  location: location || "",
                  movie: movie || "",
                  book: book || "",
                  music: music || ""

                };
              },

           


        })


    
     (MessageForm);
    export default FormikMessageForm;
