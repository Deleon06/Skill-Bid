import api from './apiConfig'

//posts(jobs)
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

export const getJob = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`)
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteJob = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    return res
  } catch (e) {
    throw e;
  }
};

export const updateJob = async (id, post) => {
  try {
    const res = await api.put(`/posts/${id}`, post )
    return res.data;
  } catch (e) {
    throw e;
  }
}
//job categories

export const getCategory = async (type) => {
    try {
        const res = await api.get(`/posts/${type}`)
        return res.data
    } catch(e) {
        throw e;
    }
} 
