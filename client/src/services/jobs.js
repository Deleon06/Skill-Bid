import api from './apiConfig'

export const getAllJobs = async () => {
    try {
        const res = await api.get('/posts')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const createJob = async (input) =>{
    try{
        const res = await api.post("/posts", input)
        console.log(res.data)
    }catch(e) {
        throw e;
    }
}