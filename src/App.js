import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
//bir component'in import olması için import olacak dosyanın açık olması lazım, burda Jsx1 açık olmalı mesela


const App = () => {
  return(
    <div>

{/* JSX comment böyle yapılır ctrl+shift+A */}




      {/* <HelloWorld/>
      <Jsx1/>
      <Jsx2/> 
      <Jsx3/>
      <Jsx4/>
      */}
       <Jsx5/>
      
      
      

    </div>
  )
}
export default App; //component isimleri büyük harfle başlar, export yapmazsak componenti başka yerde kullanamayız
 
