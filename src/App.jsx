import './App.css';

const Header=()=>{
  return <h1>Hello world</h1>
  
}
const Field=()=>{
  return <input type='text' placeholder='Typing'/>
}

const Button=()=>{
  const user = true
  const login = 'login'
  return <button>{user ? 'logout':login}</button>
}


function App() {
  return (
    <div className='App'>
      <Header/>
      <Field/>
      <Button/>

    </div>
  )
    
  
}

export default App;
