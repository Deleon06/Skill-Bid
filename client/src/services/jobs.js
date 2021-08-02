import api from './apiConfig'

export const getAllTasks = async () => {
    try {
        const res = await api.get('/tasks')
        console.log(res)
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const createTask = async (input) =>{
    try{
        const res = await api.post("tasks", input)
        console.log(res.data)
    }catch(e) {
        throw e;
    }
}