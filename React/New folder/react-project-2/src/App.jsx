import UserCards from "./components/UserCards"
import './App.css'
function App() {
  return (
    <div className="container ">
    <UserCards name="sam" desc="desc1" style={{"border-radius":"40px"}}/>
    <UserCards name="tom" desc="desc2"/>
    <UserCards name="bill" desc="desc3"/>

     
    </div>
  )
}

export default App
