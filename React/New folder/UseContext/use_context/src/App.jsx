import { useState,useEffect,useContext, createContext } from 'react'
import ChildA from './components/ChildA';
import './App.css'
// step1: Create context
// step2: Wrap all the child inside Provider
// step3: Pass value
// step4: Consume the value inside the consumer
// const UserContext=createContext();
const ThemeContext=createContext();
function App() {
  // const [user, setUser] = useState({name:"Tejas"});
  const [theme,setTheme]=useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
        <ChildA/>
      </div>
      

    </ThemeContext.Provider>
    // <div>
    //   {/* Hello Jee
    //   <UserContext.Provider value={user}>
    //   <ChildA/>
    //   </UserContext.Provider> */}
    // </div>

  )
}
// export {UserContext}
export {ThemeContext}
export default App
