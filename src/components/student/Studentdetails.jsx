import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Buffer} from 'buffer';
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';


const Studentdetails = () => {
  var[selected,setSelected]=useState();
  var[update,setUpdate]=useState(false)

  var[student,setStudent]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/view")
    .then(response=>{
      console.log("dkjhdg")
      setStudent(response.data)
      console.log(response.data)
    })
    .catch(err => console.log(err))
  },[])

   const updateValues=(row)=>{
    setSelected(row)
    setUpdate(true)
   }
  var result=
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell>Admission No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row,pos) => (

           
            <TableRow key={pos}>
              
              
              <TableCell >{row.Adminno}</TableCell>
              <TableCell >{row.Name}</TableCell>
              <TableCell >{row.Age}</TableCell>
              <TableCell >{row.Course}</TableCell>
              <TableCell>
                <img src={`data:image/jpeg;based64,
                ${Buffer.from(row.image1.data).toString('base64')}`}
                width="50" height="50" alt="Error"></img>
              </TableCell>
              <TableCell><EditIcon onClick={()=>updateValues(row)}></EditIcon></TableCell>
            </TableRow>
          
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  if(update)
  { result=<Studentedit data={selected} method='put'/>
}
 

return(result)}
export default Studentdetails
