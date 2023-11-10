import Sidebar from './components/SideBar';
import { Post } from './components/Post';
import Header from './components/Header';
import { useState } from 'react'

import './global.css'
import styles from './app.module.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'Tony Stark',
      avatarURL: "https://img.freepik.com/fotos-premium/tony-stark-personagem-de-desenho-animado-do-homem-de-ferro-ia-generativa_934475-11586.jpg?w=200",
      role: "Iron Man",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hello Murilo 👨‍💻'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa, é um projeto que fiz para aprender React 🚀.'
      },
      {
        type: 'link',
        content: "TonyStark/starkindustries"
      },
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Steve Rogers',
      avatarURL: "https://i.pinimg.com/736x/ba/32/c3/ba32c3707b4625af137ee5892c10a36f.jpg",
      role: "American Capitain",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá Cara 😁'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto, estou a cada vez mais aprendendo as referências.'
      },
      {
        type: 'link',
        content: "SteveRogers/marvelComics"
      },
    ],
    publishedAt: new Date('2023-09-03 20:00:00')
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
