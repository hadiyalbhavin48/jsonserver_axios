import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Update = () => {

  // const [getData, setGetData] = useState([])
  const [values, setValue] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  })

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res, "updated Result");
      }).catch((err) => {
        console.log(err.message, "Updated Error");
      })

    navigate("/")

  }

  // data get

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then((res) => {
        // console.log(res, "update result");
        setValue(res.data)
      }).catch((err) => {
        console.log(err.message, "update Error");
      })
  }, [])
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className='container' onSubmit={handleSubmit}>
            <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title text-center">
                <h2>Update Record</h2>
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
                        value={values.name}
                        onChange={e => setValue({ ...values, name: e.target.value })}  // name is object like this name : '' 
                        required
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
                        value={values.username}
                        onChange={e => setValue({ ...values, username: e.target.value })} // username is object like this username : ''
                        required
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
                        value={values.email}
                        onChange={e => setValue({ ...values, email: e.target.value })}  // email is object like this email : ''
                        required
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
                        value={values.phone}
                        onChange={e => setValue({ ...values, phone: e.target.value })}  // phone is object like this phone : ''
                        required
                        className="form-control" />

                    </div>
                  </div>


                  <div className="col-lg-12 mt-3">
                    <div className="form-group">

                      <button className="btn btn-success me-2" type="submit">Update</button>
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

export default Update