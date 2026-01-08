
import Greeting from "./props/Greetings";
import UserCard from "./props/UserCard";
import ButtonOne from "./props/ButtonOne";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import HoverFont from "./hooks/HoverFont";
import AccessWithLimit from "./hooks/AccessWithLimit";
import PostLikes from "./hooks/PostLikes";
import CheckboxSummary from "./hooks/CheckboxSummary";
import ParentLoginForm from "./hooks/useState/ParentLoginForm";
import ParentSumaForm from "./hooks/ParentSumaForm";
import DocumentTitleChanger from "./hooks/useState/DocumentTitleChanger";
import SumaInput from "./hooks/useState/SumaInput";
import CalculoTrapecio from "./hooks/useState/CalculoTrapecio";
import LogEffect from "./hooks/useEffect/LogEffect";
import FetchUser from "./hooks/useEffect/FetchUser";
import Clock from "./hooks/useEffect/Clock";
import ScrollLogger from "./hooks/useEffect/ScrollLogger";
import DynamicTitle from "./hooks/useEffect/DynamicTitle";
import SafeFetch from "./hooks/useEffect/SafeFetch";

function App() {
  const userData = { name: "Alison", age: 19 };
  const handleClick = () => {
    alert("Botón clickeado");
  };

  
  return (
    <>
    <HoverFont/>
    <AccessWithLimit/>
    <PostLikes/>
    <CheckboxSummary/>
    <ParentLoginForm/>
    <ParentSumaForm/>
    <DocumentTitleChanger/>
      <Greeting name="Alison" apellido="Venegas"/>
      <UserCard user={userData} />
      <ButtonOne onClick={handleClick} />
      <ParentIncrementButton />
      <ParentInputNotifier />
      <SumaInput/>
      <CalculoTrapecio/>
      <LogEffect/>
      <FetchUser/>
      <Clock/>
      <ScrollLogger/>   
      <DynamicTitle/>
      <SafeFetch/>
    </>
  );
}

export default App;
