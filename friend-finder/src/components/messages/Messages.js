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

        <div className="friend-List-container">
            <h2>FRIENDS</h2>

            <div className="friend-List">
            <h4>list of friends</h4>
            <h4>list of friends</h4>
            <div className="imageholder">
            <img src="image"></img>
            </div>
            
            <div className="imageholder">
            <img src="image"></img>
            </div>

            </div>

        

        </div>

   
        <div className="MessageBox">
       
        <div className="MessageBoxTop">
        
        <div className="MessageUserImg">
            <img src="image"></img>
        </div>
    

    

  
    <div className="Messagebox2">
 

        <Form>

            Send Message: 
            <Field type="text" name="message" placeholder="Enter Message" />
            {touched.message && errors.message && (
            <p className="error">{errors.message}</p>
            )}

        </Form>
        
            <div>

            {/* <li>{message}</li> */}

            </div>

        </div>

    </div>   
          
            <button type="submit" className="Btn">Send Message</button> 
             
        
        </div>

        </div>
        // END Message Container


      );
    }
        const FormikMessageForm = withFormik({

            mapPropsToValues({message}){

                return {
                
                  message: message || ""
               
                };
              },

           


        })


    
     (MessageForm);
    export default FormikMessageForm;
