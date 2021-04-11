import React, {useState, useEffect} from 'react'
import './BodyStyle.css'
import DataGrid from "react-data-grid";

const BodyComp =()=>{

    const[userData, setUserData]=useState('')

    const columns = [
        { key: "id", name: "ID" },
        { key: "name", name: "Name" },
        { key: "username", name: "Username" },
        { key: "email", name: "Email" },
        { key: "phone", name: "Phone" },
        { key: "website", name: "Website" },
      ];


    //   const rows = _.map(userData, obj => {
    //       return _.omit(obj, ['address','company'])
    //   })

      const rows = userData

    useEffect(()=>{
        console.log("USE EFFECT RAN*********")
        userAPICall()
        
    },[])

    const userAPICall=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>res.json()
        ).then(
            res=>{setUserData(res)}
        )
    }

    console.log("API CALLED **********",userData)
    return(
    <div className='bodyDiv'>
    <div className='searchDiv'>
        <h2>Search Functionality</h2>
    </div>
    <div className='dataDiv'>
      <DataGrid className='grid'
      columns={columns}
      rows={rows}
     
      />
    </div>
    </div>
    )
}

export default BodyComp