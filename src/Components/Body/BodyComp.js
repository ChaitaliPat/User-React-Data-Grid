import React, {useState, useEffect} from 'react'
import './BodyStyle.css'
import DataGrid from "react-data-grid"
import { CSVLink } from "react-csv"

const BodyComp =()=>{

    const[userData, setUserData]=useState('')
    const[q,setQ]=useState("")

    const columns = [
        { key: "id", name: "ID" },
        { key: "name", name: "Name" },
        { key: "username", name: "Username" },
        { key: "email", name: "Email" },
        { key: "phone", name: "Phone" },
        { key: "website", name: "Website" },
      ];

      const headers = [
          {label: 'ID' , key: 'id'},
          {label: 'Name' , key: 'name'},
          {label: 'Username' , key: 'username'},
          {label: 'Email' , key: 'email'},
          {label: 'Phone' , key: 'phone'},
          {label: 'Website' , key: 'website'},
      ]

    //   const rows = _.map(userData, obj => {
    //       return _.omit(obj, ['address','company'])
    //   })

      const rows = userData;

      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const d = new Date();
        const dformat = `${d.getDate()}_${monthNames[d.getMonth()]}_${d.getFullYear()}_${d.getHours()}H_${d.getMinutes()}M`;
        const filename = ("Report_"+dformat+".csv")
        // console.log("getCurrentDate : ", d, dformat)

      const csvReport = {
          filename: filename,
          headers: headers,
          data: search(rows)
      }

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

    function search(rows){
        if(q)
        {return rows.filter((row)=> 
            row.name.toLowerCase().indexOf(q) > -1 ||
            row.username.toLowerCase().indexOf(q) > -1 ||
            row.email.toLowerCase().indexOf(q) > -1 ||
            row.phone.toLowerCase().indexOf(q) > -1 ||
            row.website.toLowerCase().indexOf(q) > -1
            
        )}
        else
        {return userData}
    }

    // console.log("API CALLED **********",userData)
    
    return(
    <div className='bodyDiv'>
    <div className='searchDiv'>
        <input type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
        <CSVLink {...csvReport}>Export CSV</CSVLink>
    </div>
    <div className='dataDiv'>
      <DataGrid style={{height:'100%'}}
      columns={columns}
      rows={search(rows)}
      />
    </div>
    </div>
    )
}

export default BodyComp