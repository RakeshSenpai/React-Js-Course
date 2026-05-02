import Profile from "./Excercise"
import Header  from "./Header"
import { Image } from "./Excercise"
function App(){
  // console.log(sum())
  return(
    <div>
      <Header />
      <Profile></Profile>
      <Image></Image>
      <Example></Example>
      </div>
  )
}

function Example(){
  return( 
    <button>Click me</button>
  )
}



export default App 