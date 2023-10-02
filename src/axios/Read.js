import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Read = () => {

  const [readData, setReadData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then((res) => {
        // console.log(res,"read Result");
        setReadData(res.data)
      }).catch((err) => {
        console.log(err.message, "read Error");
      })
  }, [])

  return (
    <div>
      <div>
        <div className="container">
          <div className="card row" style={{ "textAlign": "left" }}>
            <div className="card-title text-center">
              <h2>Read Data  : </h2>
              <hr />
            </div>
            <div className="card-body"></div>
            {readData &&
              <div>
                <h2>The Employee name is : <b>{readData.name}</b>  ({readData.id})</h2>
                <hr />
                <h3>Contact Details : {readData.phone}</h3>
                <hr />
                <h5>Email is : {readData.email}</h5>
                <hr />
                <h5>Phone is : {readData.phone}</h5>
                <hr />
                <Link className="btn btn-success me-2 mb-3" to={`/edit/${id}`} >Edit</Link>
                <Link className="btn btn-danger mb-3" to="/">Back to Listing</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read