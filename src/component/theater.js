import react,{useState,useEffect} from 'react'
import {Box,Paper,Typography} from "@material-ui/core";
import { useParams,useHistory } from 'react-router'
import { getupdateData} from '../api/api'
import { useSelector } from 'react-redux';

const Theater = () => {
    const {id}=useParams()
    const history=useHistory()
    const [info,setInfo]=useState('')
    // const [count,setCount]=useState(5)
     const count=5;
     let time=count*60;
     useEffect(()=>{
        const updatetime=document.getElementById('time')
        setInterval(timer,1000)
        function timer(){
            const min=Math.floor(time/60);
            let sec=time%60
           
        sec=sec<10?'0'+sec:sec
            updatetime.innerHTML=`${min}:${sec}`
            time--;
        }
     },[])
    useEffect(()=>{
        loadData()
        
        setTimeout(() => {
            history.push('/book/:id')
        }, 300000);
    },[])
const state=useSelector(state=>state.todoSlice)
const loadData=async()=>{
    let response =await getupdateData(id)
    setInfo(response.data)
}

    return (
        <div>
        <Paper elevation={6}>
        <Box p={1}>
          <Typography variant="h5"><span>Movie name:{info.title}</span>
          <diV>Screen No:{info.Screen}</diV>
          <diV>Show_time:{info.Show_time}</diV>
          <div id='time'>5:0</div></Typography>
          <div>{state.sum}</div>
          {console.log(state.position)}
        </Box>
      </Paper>
        </div>
    )
}

export default Theater
