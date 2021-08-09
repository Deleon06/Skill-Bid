// import Post from "../models/post.js";

// const authPost = (req, res, next) => {
//   try {
//     const user = Post.userId;
//     if (user) {
//       req.user = user.id
//       next()
//     }
//   } catch (e) {
//     console.log(e.message);
//     res.status(403).json({error: "Unauthorized"})  
//   }
// };

// export default authPost;