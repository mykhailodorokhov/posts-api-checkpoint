import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as postsModel from "../models/posts";

export default function getIndex(fastify: FastifyInstance): RouteOptions {
  return {
    method: "POST",
    url: "/posts",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const newPost = request.body as postsModel.Post;
      const post = await postsModel.createPost(newPost);
      reply.code(201).send(post);
    },
  };
}
