import React from "react";
import {useState} from 'react';

const Contact = () => {
    const [Data,updateData] = useState({
        Name: '',        
        Email: '',
        Phone: '',
        Message: ''
    });

    const inputEvent = (event) => {
        const {name,value} = event.target;
        updateData((prevData) => {
            return {
            ...prevData,
            [name] : value,
            }
        })

    }
    const formSubmit = (e) =>  {
        e.preventDefault();

        alert(`My Name is ${Data.Name}. My mobile number is ${Data.Phone}. My Email is ${Data.Email}. My Message : ${Data.Message}`)

    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <form>
                <div className="form-group  mb-3">
                  <label for="FormName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormName"
                 
                    placeholder="Enter your name" name="Name" value={Data.Name} onChange={inputEvent} required="required"
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="FormEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="FormEmail"
                    placeholder="Enter your email"
                    required="required"
                    name="Email" value={Data.Email} onChange={inputEvent}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group mb-3">
                  <label for="FormPhone">Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="FormPhone"
                    placeholder="Enter your phone number"
                    required="required"
                    name="Phone" value={Data.Phone} onChange={inputEvent}
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="FormMessage">Message</label>
                  <textarea
                    type="text"
                    className="form-control"                                     
                    id="FormMessage"
                    placeholder="Enter your message"
                    required="required"
                    name="Message" value={Data.Message} onChange={inputEvent} 
                    style={{minHeight: '100px'}}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-outline-primary">
                  Submit Here
                </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
