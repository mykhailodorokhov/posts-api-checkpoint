import { FastifyInstance } from "fastify";

import deletePost from "./delete-post";
import getPost from "./get-post";
import getPosts from "./get-posts";
import postPosts from "./post-posts";

export default async function (fastify: FastifyInstance) {
  fastify.route(getPost(fastify));
  fastify.route(getPosts(fastify));
  fastify.route(postPosts(fastify));
  fastify.route(deletePost(fastify));
}
