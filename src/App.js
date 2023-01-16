import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Jsx7 from "./components/03-jsx/jsx7";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props-1/greetings";
import Products from "./components/07-props-2/products";
import Clock2 from "./components/08-clock2/clock2";
import Gallery from "./components/09-image/gallery";
import Image from "./components/09-image/image";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icon from "./components/12-icons/icon";
import Events from "./components/13-events/events";
import Shop from "./components/14-products/shop";
import State from "./components/15-usestate/state";
import Stateless from "./components/15-usestate/stateless";
import Counter from "./components/16-counter/counter";
import Birthday from "./components/17-birthday/birthday";
import UseEffect1 from "./components/18-useEffect/useeffect1";
import UseEffect2 from "./components/18-useEffect/useeffect2";
import Clock3 from "./components/19-clock-3/clock3";
import CountryFilter from "./components/20-country-filter/contry-filter";
import Scroll from "./components/21-useref/scroll";
import UseRef from "./components/21-useref/useref";
import ClassComp from "./components/22-class-type-component/class-comp";
import UserCards from "./components/23-fetch-users/user-cards";
import Countries from "./components/24-axios-countries/countries";
import ParentComp from "./components/25-child-to-parent/parent-comp";
import Form1 from "./components/26-forms/form1";
import Form2 from "./components/26-forms/form2";
import Form3 from "./components/26-forms/form3";
import Form4 from "./components/26-forms/form4";
import ProductList2 from "./components/replit/product-list2";

//bir component'in import olması için import olacak dosyanın açık olması lazım, burda Jsx1 açık olmalı mesela

const App = () => {
  //return ile const App arasında bir şey tanımlanmaz
  return (
    <div>
      {/* JSX comment böyle yapılır ctrl+shift+A */}

      {/* <HelloWorld/>
      <HelloReact />
      <Jsx1/>
      <Jsx2/> 
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Jsx6/>
      <Jsx7 />
      <Style1/>
      <Style2/>
      <Style3 />
      <Style4 />
      <Clock1 />
      <Greetings />
      <Products />
      <Clock2 textColor="blue" bgColor="yellow" />
      <Image />
      <Gallery />
      <ProfileCard
        avatar="profile.jpg"
        name="Ali Gel"
        location="Turkey, Istanbul"
        shot="3"
        followers="23432"
        following="234"
      />
      <BootstrapStatic />
      <BootstrapDynamic />
      <Icon />
      <Events />
      <Shop />
      <Stateless />
      <State />
      <Counter />
      <Birthday />
      <UseEffect1 />
      <Clock3 />
      <UseEffect2 />
      <CountryFilter />
      <UseRef />
      <Scroll />
      <ClassComp />
      <UserCards />
      <Countries />
      <ParentComp />
      <Form1 />
      <Form2 />
      <Form3 />
      */}

      <Form4 />
    </div>
  );
};
export default App; //component isimleri büyük harfle başlar, export yapmazsak componenti başka yerde kullanamayız
