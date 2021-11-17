import react, {useState,useEffect} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import {useDispatch } from "react-redux"


const useStyle=makeStyles({table:{width:'90%',margin:'50px 0 0 50px'},
  tableh:{background:'black',color:'white',fontSize:'20px'},
clr:{background:'green'},})

const Book = () => {
    const classes =useStyle()
    const arrrow=[]
    const newarr=[]
    const arrcol=[""]
    const {id}=useParams()
    const [number,setNumber]=useState(10)
    const [number1,setNumber1]=useState(65)
    console.log(newarr)

 const dispatch = useDispatch()
 

for(var i=1 ;i<=number;i++)
{
  arrrow.push(i)
}
for(var i=50 ;i<=number1;i++)
{
  arrcol.push(i)
}
    return (
        <div>
        <hr/>
        <Table className={classes.table}>
        <TableHead >
        {arrcol.map((ele)=>{return<TableCell>
            <TableRow className={classes.tableh}></TableRow>
              <TableRow className={classes.tableh}>{ele}</TableRow>
            </TableCell>})}
        
        </TableHead>
        <TableBody>{arrcol.shift()}

        {arrrow.map((ele)=>{return <TableRow>
         
            <TableCell className={classes.tableh}>{ele}</TableCell>
            
            {arrcol.map((ele2)=>{return <TableCell>
              {newarr.push(ele*ele2)}
              <Link to={`/book/theater/${id}`}><Button color='primary' variant="contained" style={{width:"5px",height:"40px"}}></Button></Link>
                
                </TableCell>
             
               
                
            })}
           </TableRow>})}
          
        
      
         
        </TableBody>
      </Table>
        </div>
    )
}
 export default Book

 