import React, {useContext} from 'react'
// import { AppContext } from './context'
import { useGlobalContext } from './context';

const Home = () => {
  // const name = useContext(AppContext);
  const name = useGlobalContext();
  return (
    <div>Home {name}</div>
  )
}

export default Home