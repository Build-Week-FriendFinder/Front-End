
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const HomeForm = ({status, touched, errors}) => {
    const [user, setUser] = useState([]);
console.log("is touched", touched);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="user-form">
        <div className="user-photo">
        
        </div>
      
    <Form>
        
    {/* Gender */}

        <Field component="select" className="gender" name="Gender">
          <option>Please Choose a Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </Field>

    {/*  DOBIRTH */}

        <Field type="text" name="date" placeholder="Enter Date" />
         {touched.date && errors.date && (
          <p className="error">{errors.date}</p>
        )}

    {/* LOCATION */}

        <Field type="text" name="location" placeholder="Enter Location" />
        {touched.location && errors.location && (
          <p className="error">{errors.location}</p>
        )}

    {/* MOVIES */}

        <Field type="text" name="movie" placeholder="Enter Movie" />
        {touched.movie && errors.movie && (
          <p className="error">{errors.movie}</p>
        )}

    {/* BOOK */}

        <Field type="text" name="book" placeholder="Enter Book" />
        {touched.book && errors.book && (
          <p className="error">{errors.book}</p>
        )}

    {/* MUSIC */}

        <Field type="text" name="music" placeholder="Enter Music" />
        {touched.music && errors.music && (
          <p className="error">{errors.music}</p>
        )}



        </Form>

        </div>

      );
    }
        const FormikHomeForm = withFormik({

            mapPropsToValues({gender, date, location, movie, book, music}){

            
                return {
                  
                  //gender: gender || "",
                  date: date || "",
                  location: location || "",
                  movie: movie || "",
                  book: book || "",
                  music: music || ""

                };
              },

              validationSchema: Yup.object().shape({
                date: Yup.string().required('Enter a date!'),
                location: Yup.string().required('Enter a location!'),
                movie: Yup.string() .required('Enter a movie!'),
                book: Yup.string() .required('Enter a book!'),
                music: Yup.string() .required('Enter a music!'),


              }),


        })


    
     (HomeForm);
    export default FormikHomeForm;
