import axios from "axios"


   const url=`http://localhost:3003/Employee`;

   export const getData =async () => {
    return await axios.get(`${url}`)
        }


    export const getupdateData =async (id) => {
        return await axios.get(`${url}/${id}`)
                        } 
                                                       