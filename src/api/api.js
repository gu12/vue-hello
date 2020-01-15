import  axios from  'axios'
axios.defaults.baseURL = 'http://localhost:2333'


export const getTreeList = ()=>{
    return axios.get('/getTreeList')
}
