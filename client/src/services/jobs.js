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
    console.log(res.data)
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

export const getBathroom = async () => {
    try {
        const res = await api.get('/posts/bathroom')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getCeiling = async () => {
    try {
        const res = await api.get('/posts/ceiling')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getElectrical = async () => {
    try {
        const res = await api.get('/posts/electrical')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getFloor = async () => {
    try {
        const res = await api.get('/posts/floor')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getKitchen = async () => {
    try {
        const res = await api.get('/posts/kitchen')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getLandscape = async () => {
    try {
        const res = await api.get('/posts/landscape')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getPaint = async () => {
    try {
        const res = await api.get('/posts/paint')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getPlumbing = async () => {
    try {
        const res = await api.get('/posts/plumbing')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getRoof = async () => {
    try {
        const res = await api.get('/posts/roof')
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const getWall = async () => {
    try {
        const res = await api.get('/posts/wall')
        return res.data
    } catch(e) {
        throw e;
    }
} 