import { Post } from './components/Post';
import { Fragment } from 'react';

export function App() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <Post
        author={'Murilo Santos'}
        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a."} />
      <Post
        author={'Nicolas Santos'}
        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a."} />
    </Fragment>
  )
}


