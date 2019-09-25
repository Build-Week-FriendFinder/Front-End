// Ben Solt
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
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


    <div className="Message-Container">

        <div className="friend-List-container">
            <h2>FRIENDS</h2>

            <div className="friend-List">
            <h4>friend 1</h4>
            <h4>friend 2</h4>
            <h4>friend 3</h4>
            <h4>friend 4</h4>
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
          
          <div className="ProfileBox">
            
            <div className="UserImg">

              <img src="image"></img>

            </div>

              <h4>User Name</h4>

              <button type="submit" className="Btn2">Remove Friend</button> 

          </div>
        
         

  
    <div className="formholder">
 

        <Form>

            Send Message: 
            <Field type="text" name="message" placeholder="Enter Message" />
            {/* {touched.message && errors.message && (
            <p className="error">{errors.message}</p>
            )} */}

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
        

        // validationSchema: Yup.object().shape({
        // message: Yup.string().required("You silly!!!"),
        // }),


        handleSubmit(user, { setUser}) {
            axios
              .post("", user)
              .then(res => {
                setUser(res.data);
              })
              .catch(err => console.log(err.response));
          }

    })(MessageForm);

    export default FormikMessageForm;
