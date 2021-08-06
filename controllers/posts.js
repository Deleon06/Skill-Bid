import Post from "../models/post.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    post.userId = req.user
    await post.save()
      res.status(201).json(post)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const newPost = await Post.findByIdAndUpdate(id, body, { new: true })
    newPost.userId = id
    res.status(201).json( newPost );
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndDelete(id)
    res.send(post)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
} 

export const getBathroom = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Bathroom"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getCeiling = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Ceiling"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getElectrical = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Electrical"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getFloor = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Floor"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getKitchen = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Kitchen"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getLandscape = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Landscape"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getPaint = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Paint"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getPlumbing = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Plumbing"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getRoof = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Roof"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getWall = async (req, res) => {
  try {
    const posts = await Post.find({projectType: "Wall"});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getBudget = async (req, res) => {
  try {
    const posts = await Post.find({budget});
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};