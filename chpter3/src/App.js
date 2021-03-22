import React from 'react';
import PostList from './post/PostList';

const posts = [
  { title: 'React Hooks', content: 'React Hooks!', author: 'Achraf' },
  { title: 'Using React Fragments', content: 'React Hooks!', author: 'Achraf' }
]

export default function App() {
  return <PostList posts={posts} />

}