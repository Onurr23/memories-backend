import express from "express";
import { createPost, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route(":/id").patch(updatePost);

export default router;
