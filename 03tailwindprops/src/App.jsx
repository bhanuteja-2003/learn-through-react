
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card"
import './App.css'
  
// props unables us to use a component at multiple places with different data within the component

function App() {
  let obj = {
    age:23,
    class:"4th year"
  }
  let newarr =[1,2,3,4,5]
  

  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4" >Tailwind test</h1>
    <Card  username="Jaanu"  btnText="click me"  /*someObj={obj} tarr={newarr}*/ />
    <Card  username="Priya"  btnText="visit me"  /*someObj={obj} tarr={newarr}*/ />
    </>
  )
}

export default App
