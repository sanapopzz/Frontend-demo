import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'


const Student = () => {
  var[inputs,setInputs]=useState({
    "Adminno":'',
    "Name":'',
    "Age":'',
    "Course":"Bsc"

    });
    
    var[selectedimage,setSelectedimage]=useState(null);

    const inputHandler=(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]: value}))
    console.log(inputs)
    }
    const handleImage=(event)=>{
      const file=event.target.files[0];
      setSelectedimage(file)
      inputs.image1=file;
    }
    
    // const addHandler=()=>{
    // console.log("Clicked")
    // console.log(inputs)
    // axios.post("http://localhost:3001/new",inputs )
    // .then((response)=>{
    //   alert("record saved")
    // })
    //  .catch(err => console.log(err))
    // }

    const saveData=()=>{
      const formdata=new FormData();
      formdata.append('Adminno',inputs.Adminno);
      formdata.append('Name',inputs.Name);
      formdata.append('Age',inputs.Age);
      formdata.append('Course',inputs.Course);
      formdata.append('image1',selectedimage);

      fetch('http://localhost:3001/new',{
           method:'post',
           body:formdata,
      })

      .then((response)=>response.json())
      .then((data)=>{
        alert("record saved")
      })

      .catch((err)=>{
        console.log("err")
      })

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
<MenuItem value={"Bsc"}>Bsc</MenuItem>
<MenuItem value={"BBA"}>BBA</MenuItem>
<MenuItem value={"MBA"}>MBA</MenuItem>
</Select><br/><br/>
<label>Upload file</label>
<input type="file" onChange={handleImage}></input>

<Button variant="contained" onClick={saveData}>Submit</Button>
    </div>
  )
}

export default Student