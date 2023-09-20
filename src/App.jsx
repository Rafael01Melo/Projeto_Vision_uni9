import { Header } from "./components/Header";
import "./App.css";
import Router from "./Router";


function App(){
    return (
   <div className="container">
      <Header title="Projeto Vision do Rafael" />
      <Router/>
   </div>
  );
}

export default App;
