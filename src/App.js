import React from "react";
import Post from "./Post";
import Header from "./Header";

const category = "Posts da semana";
const posts = [
  {
    id: 1,
    title: "Título da notícia 1",
    subtitle: "Subtítulo da notícia 1",
    likes: 10,
  },
  {
    id: 2,
    title: "Título da notícia 2",
    subtitle: "Subtítulo da notícia 2",
    likes: 20,
  },
  {
    id: 3,
    title: "Título da notícia 3",
    subtitle: "Subtítulo da notícia 3",
    likes: 30,
  },
  {
    id: 4,
    title: "Título da notícia 4",
    subtitle: "Subtítulo da notícia 4",
    likes: 40,
  },
];

function App() {
  return (
    <>
      <Header>
        <h2>{category}</h2>
      </Header>

      <hr />

      {posts.map(({ id, ...otherProps }) => (
        <Post key={id} {...otherProps} />
      ))}
    </>
  );
}

export default App;
