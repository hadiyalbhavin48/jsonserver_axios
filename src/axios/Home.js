import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // Read Data

  const readData = (id) => {
    navigate("/read/" + id)
  }

  // Edit Data

  const editData = (id) => {
    navigate("/edit/" + id)
  }

  // Delete Record

  const deleteRecord = (id) => {

    const confirm = window.confirm("Do You Like To Deleted")

    if (confirm) {
      axios.delete("http://localhost:3000/users/" + id)
        .then((res) => {
          // console.log(res, "delete record");
          window.location.reload();
        }).catch((err) => {
          console.log(err.message, "delete Error");
        })
    }

  }

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        // console.log(res)
        setData(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [])
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-title text-center">
            <h2>User Listing</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="/create" className="btn btn-success mb-3">Add (+)</Link>
            </div>

            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td align="right">id</td>
                  <td>Name</td>
                  <td>UserName</td>
                  <td>Email</td>
                  <td>Phone</td>
                  {/* <td>website</td> */}
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>

                {
                  data && data.map((curElm) => (
                    <tr key={curElm.id}>
                      <td>{curElm.id}</td>
                      <td>{curElm.name}</td>
                      <td>{curElm.username}</td>
                      <td>{curElm.email}</td>
                      <td>{curElm.phone}</td>
                      {/* <td>{curElm.website}</td> */}

                      <td>
                        <a
                          onClick={() => { editData(curElm.id) }}
                          className="btn btn-success me-2">Edit</a>
                        <a
                          onClick={() => { deleteRecord(curElm.id) }}
                          className="btn btn-danger me-2">delete</a>
                        <a
                          onClick={() => { readData(curElm.id) }}
                          className="btn btn-info me-2">read</a>
                      </td>
                    </tr>
                  ))

                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home