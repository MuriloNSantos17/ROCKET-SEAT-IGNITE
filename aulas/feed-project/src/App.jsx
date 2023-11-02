import Sidebar from './components/SideBar';
import { Post } from './components/Post';
import Header from './components/Header';
import { useState } from 'react'

import './global.css'
import styles from './app.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={'Murilo Santos'}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a."} />
          <Post
            author={'Nicolas Santos'}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a."} />
        </main>
      </div>
    </>
  )
}

export default App
