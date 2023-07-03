import axios from 'axios';

axios.interceptors.request.use(
  function (req) {
    console.log("req");
    return req;
  },
  (err) => {
    console.log("req")
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (res) {
    console.log("ok")
    return res;
  },
  (err) => {
    console.log(err)
    return Promise.reject(err);
  }
);

const apiUrl = "http://localhost:5235"

export default {
  getTasks: async () => {
    console.log('getTask')
    const result = await axios.get(`${apiUrl}/items`)
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result=await axios.post(`${apiUrl}/items`,{id:0,name:name})
    return result.data;
  },

  setCompleted: async(id,name,isComplete)=>{
    console.log('setCompleted', {id,name ,isComplete})
    const result=await axios.put(`${apiUrl}/items/${id}`,{name:name,isComplete:true})
    return result.data;
  },

  deleteTask:async(id)=>{
    await axios.delete(`${apiUrl}/items/${id}`)
    console.log('deleteTask')
  }
};
