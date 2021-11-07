import React, { useState } from 'react';
import Post from '../Post';
import Header from '../Header';
import ThemeProvider from '../../context/ThemeContext';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia 1',
      subtitle: 'Subtítulo da notícia 1',
      likes: Math.floor(Math.random() * 100),
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 2',
      subtitle: 'Subtítulo da notícia 2',
      likes: Math.floor(Math.random() * 100),
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 3',
      subtitle: 'Subtítulo da notícia 3',
      likes: Math.floor(Math.random() * 100),
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 4',
      subtitle: 'Subtítulo da notícia 4',
      likes: Math.floor(Math.random() * 100),
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título da notícia ${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia ${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
        read: false,
      },
    ]);
  }

  function handleRemovePost(id) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === id ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}

export default App;
