
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const MessageForm = ({}) => {


return(
    
    <Field
    component="textarea"
    type="text"
    name="notes"
    placeholder="Notes"
        />

    <button type="submit">Submit!</button>
    

)
 
    
    }