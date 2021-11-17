import react, {useState,useEffect,useRef} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import {useDispatch,useSelector} from "react-redux"
import { modifySum,addPosition } from '../slice/todoslice';


const useStyle=makeStyles({table:{width:'90%',margin:'50px 0 0 50px'},
  tableh:{background:'black',color:'white',fontSize:'20px'},
clr:{background:'green'},})


const Book = () => {
  const state=useSelector(state=>state.todoSlice)
  useEffect(()=>{
    setTimeout(()=>{
      state.position.forEach((item)=>{
        document.getElementById(item).style.backgroundColor="green"
      })
    },500)
  },[])

    const classes =useStyle()
    const arrrow=[]
    const newarr=[]
    const arrcol=[""]
    const {id}=useParams()
    const [number,setNumber]=useState(10)
    const [number1,setNumber1]=useState(65)
    const [price,setPrice]=useState([])
    const [sum,setSum]=useState(0)

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

        {arrrow.map((ele,ind)=>{return <TableRow>
         
            <TableCell className={classes.tableh}>{ele}</TableCell>
            
            {arrcol.map((ele2,ind2)=>{return <TableCell>
              {newarr.push(ele*ele2)}
              <button id={ind+""+ind2} style={{width:"50px",height:"40px",backgroundColor:"red"}} onClick={(e)=>{
                e.target.style.backgroundColor="green"
                dispatch(addPosition([ind,ind2]))
                setPrice([...price,ind])
                }}></button>
                
                </TableCell>
             
               
                
            })}
           </TableRow>})}
          
        
      
           <Link to={`/book/theater/${id}`}><button onClick={()=>{
           const z=price.reduce((total,num)=>{
             total=total+(num+1)*100
             return total
           },0)
           dispatch(modifySum(z))
         }}>Submit</button></Link>
        </TableBody>
      </Table>
        </div>
    )
}
 export default Book

 