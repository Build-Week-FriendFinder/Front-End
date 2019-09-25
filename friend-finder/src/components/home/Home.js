
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import './home.css';

const HomeForm = ({status, touched, errors, setCurrentNavTitle,match}) => {
    const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  useEffect(() => {
    const componentTitle = "User Profile";
    setCurrentNavTitle(componentTitle);
  }, [match.url]);

  return (
    <div className="user-profile">
      <div className="user-form">
        {/* user photo */}
        <div className="user-photo">
          <input type="file" />
        </div>
      
        <Form>
        
        {/* Gender */}
          <div>
          <Field component="select" className="gender" name="Gender">
            <option>Please Choose a Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Field>
          </div>

        {/*  DOBIRTH */}
          <div>
          <Field type="text" name="date" placeholder="Enter Dateadfasdf" />
          </div>
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
