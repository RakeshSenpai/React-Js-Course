import Header  from "./Header"
function App(){
  console.log(sum())
  return(
    <div>
      <Header />
      <h1>Hello</h1>
      <Example></Example>
      </div>
  )
}

function Example(){
  return( 
    <button>Click me</button>
  )
}

function sum(){
  return 10 + 10
}

export default App 