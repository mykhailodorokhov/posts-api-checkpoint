import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as postsModel from "../models/posts";

export default function getIndex(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/posts",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const posts = await postsModel.getPosts();
      reply.send(posts);
    },
  };
}
