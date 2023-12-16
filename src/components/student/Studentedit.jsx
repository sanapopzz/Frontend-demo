import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Studentedit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {
        const {name ,value } = event.target
        setInputs((inputs) =>({...inputs,[name]: value}))
        console.log(inputs)
    }

      const addHandler=()=>{
        if (props.method === 'put') 
        {
          console.log("bvhxcbvhc")
            axios.put("http://localhost:3001/edit/" + inputs._id, inputs)
            .then(response => {
                alert("Record updated")
                console.log("post data"+response.data)
                window.location.reload(false);
            })
            .catch(err => console.log(err))
        
      }

    }


  return (
    <div>
      <TextField label="Admission No" name="Adminno" variant="outlined" value={inputs.Adminno} onChange={inputHandler} /><br/><br/>
    <TextField label="Name" name="Name"  variant="outlined" value={inputs.Name} onChange={inputHandler}/><br/><br/>
    <TextField label="Age" name="Age" variant="outlined" value={inputs.Age} onChange={inputHandler}/><br/><br/>
    <TextField label="Course" name="Course" variant="outlined" value={inputs.Course} onChange={inputHandler}/>
    <InputLabel id="demo-simple-select-label">Course</InputLabel>
    <Select
labelId="demo-simple-select-label" name="Course" value={inputs.Course} onChange={inputHandler}>
<MenuItem value={"Bsc"}>Bsc</MenuItem>npm start
<MenuItem value={"BBA"}>BBA</MenuItem>
<MenuItem value={"MBA"}>MBA</MenuItem>
</Select><br/><br/>
<Button variant="contained" onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Studentedit

    

