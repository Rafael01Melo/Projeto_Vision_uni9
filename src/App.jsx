import { Header } from "./components/Header";
import "./App.css";
import { Contador } from "./components/Contador";


function App() {
  const listas = [
    {
      nome: "Projeto Novo",
      responsavel: "Fernando Carlos",
      valor: 1200,

  },
  {
    nome: "Projeto Mar",
    responsavel: "Fonseca",
    valor: 4000,

},
];

console.log(listas); 

  return (
   <div className="container">
      <Header title="Projeto Vision do Rafael" />
    <h1>
      Conteúdo do projeto vision
    </h1>
    
    <main>
      <section>
        <img src="https://fastly.picsum.photos/id/1002/300/300.jpg?hmac=BoX0yYHGnuaryVR22pkiNUrVS3oOMU1nL4i3bObV6A4" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis odio doloribus impedit nobis obcaecati, omnis iste sit pariatur quas. Exercitationem saepe, necessitatibus quis vero illo distinctio quas aliquid magnam! 
        </p>
      </section>

      <section>
        <h1>
          Listas de projetos
        </h1>

        <article className="listas">
           
          {listas.map((item,index) =>{
            
            return(
            <div key={index}>
            <strong>Nome: </strong> <span>{item.nome}</span>
            <strong>Responsável: </strong> <span>{item.responsavel}</span>
            <strong>Valor: </strong> <span>{item.valor}</span>
          </div>
            )

          })}
        </article>
      </section>
    </main>
    <Contador />
   </div>
  )
}

export default App
