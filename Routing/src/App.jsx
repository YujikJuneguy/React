import { useState } from "react";
import WebRoutes from "./Components/WebRoutes";


const App = () => {
  const [route,setRoute] = useState('/')
  return (
    <div>
      <WebRoutes/>
        
    </div>
  )
}

export default App
