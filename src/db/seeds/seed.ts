import { Knex } from "knex";
export async function seed(knex: Knex) {
  const usersSeedData = [
    { username: "Mykhailo", bio: "-" },
    { username: "Rain", bio: "Chief Random Obsession Officer" },
  ];

  const postsSeedData = [
    {
      text: "Batman vs Superman is 10/10 movie",
      likes: 2,
      hashtags: "opinion, movies",
      user_id: 1,
    },
    {
      text: "Tallinn is the Estonian New-York",
      likes: 4,
      hashtags: "cities",
      user_id: 1,
    },
    {
      text: "Lenovo > Apple; ThinkPad > MacBook",
      likes: 34,
      hashtags: "opinion",
      user_id: 2,
    },
  ];

  await knex("users").insert(usersSeedData);
  await knex("posts").insert(postsSeedData);
}
