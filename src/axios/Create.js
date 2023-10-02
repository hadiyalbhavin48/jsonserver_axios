import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    // const [id,setid] = useState();
    // const [name,setname] = useState();
    // const [username,setusername] = useState();
    // const [email,setemail] = useState();
    // const [phone,setphone] = useState();

    // same like state

    const [value, setValue] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    // Custom Validation
    const isValid = () => {
        let isprocess = true;
        let error = "Please Enter Valid In ";
        if (value.name === null || value.name === '') {
            isprocess = false;
            error += ' Name'
        }
        if (value.username === null || value.username === '') {
            isprocess = false;
            error += ' username'
        }
        if (value.email === null || value.email === '') {
            isprocess = false;
            error += " Email"
        }

        if (!isprocess) {
            alert(error)
        } else {
            if (/^[a-zA-Z0-0]+@[a-zA-Z0-9]+\.[a-zA-z]+$/.test(value.email)) {

            } else {
                isprocess = false;
                alert("Please Enter Valid Email")
            }
        }

        return isprocess
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
            axios.post("http://localhost:3000/users", value)
                .then((res) => {
                    // console.log(res, "result")
                    // console.log(res.data.id, "result id");

                    navigate("/")
                }).catch((err) => {
                    console.log(err.message, "create error");
                })
        }


    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className='container' onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title text-center">
                                <h2>User Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* <div className="form-group">
                                            <label>ID</label>
                                            <input value={Id} disabled="disabled" className="form-control"></input>
                                        </div> */}
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type='text'
                                                name='name'
                                                // onChange={e => setname(e.target.value)}
                                                onChange={e => setValue({ ...value, name: e.target.value })}  // name is object like this name : '' 
                                                className="form-control" />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>username</label>
                                            <input
                                                type='text'
                                                name='username'
                                                // onChange={e => setusername(e.target.value)}
                                                onChange={e => setValue({ ...value, username: e.target.value })} // username is object like this username : ''
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type='text'
                                                name='email'
                                                // onChange={e => setemail(e.target.value)}
                                                onChange={e => setValue({ ...value, email: e.target.value })}  // email is object like this email : ''
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                type='text'
                                                name='phone'
                                                // onChange={e => setphone(e.target.value)}
                                                onChange={e => setValue({ ...value, phone: e.target.value })}  // phone is object like this phone : ''
                                                className="form-control" />

                                        </div>
                                    </div>


                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">

                                            <button className="btn btn-success me-2" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger me-2">Back</Link>
                                            {/* <button type='button' className="btn btn-danger"
                                            >Reset</button> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Create