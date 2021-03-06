import React, { useState, useReducer, useEffect } from 'react';
import PostList from './post/PostList';
import CreatePost from './post/CreatePost';
import UserBar from './user/UserBar';
import appReducer from './reducers';
import Header from './Header';
import { ThemeContext, StateContext } from './context';
import ChangeTheme from './ChangeTheme';


const defaultPosts = [
  { title: 'React Hooks', content: 'React!', author: 'Achraf' },
  { title: 'Using React Fragments', content: 'React Hooks!', author: 'Achraf' }
]



export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  const [state, dispatch] = useReducer(appReducer, {
    user: '', posts:
      defaultPosts
  })
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
    } else {
      document.title = 'React Hooks Blog'
    }
  }, [user])





  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}
