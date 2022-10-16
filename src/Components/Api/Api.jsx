import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Api = () => {     
      useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
          console.log(res)
          setMalumotlar(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])
      const [malumotlar, setMalumotlar] = useState([])
  return (
    <div>
        <form>
          <table>
            <tr>
              <th>id</th>
              <th>Gmails</th>
              <th>Phone Number</th>
              <th>Name</th>
            </tr>
            {malumotlar.map((data) =>{
              return(
                <tr key={data}>
                  <td style={{border: "1px solid green"}}>{data.id}</td>
                  <td style={{border: "1px solid green"}}>{data.email}</td>
                  <td style={{border: "1px solid green"}}>{data.phone}</td>
                  <td style={{border: "1px solid green"}}>{data.username}</td>
                </tr>
              )
            })}
          </table>
        </form>
    </div>
  )
}

export default Api