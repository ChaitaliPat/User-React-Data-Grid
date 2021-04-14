import React, {useState, useEffect} from 'react'
import './BodyStyle.css'
import DataGrid from "react-data-grid"

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
        

    console.log("API CALLED **********",userData)
    return(
    <div className='bodyDiv'>
    <div className='searchDiv'>
        <input type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
        <button>DownLoad CSV</button>
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