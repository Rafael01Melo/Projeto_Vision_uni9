import { Link } from "react-router-dom";
import { Contador } from "../components/Contador";

const Home = () => {
  const listas = [
    {
      nome: "Projeto Novo",
      responsavel: "Fernando Carlos",
      valor: 1200,
    },
    {
      nome: "Projeto do Mar",
      responsavel: "Fonseca",
      valor: 4000,
    },
    {
      nome: "Zéquinha",
      responsavel: "Felipinho",
      valor: 8000,
    },
  ];

  return (
    <div>
      <h1>Conteúdo do projeto vision</h1>

      <div>
        <Link to="/Contato">Vai para contato</Link>
      </div>

      <main>
        <section>
          <img
            src="https://fastly.picsum.photos/id/1002/300/300.jpg?hmac=BoX0yYHGnuaryVR22pkiNUrVS3oOMU1nL4i3bObV6A4"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero
            consectetur ipsum asperiores ipsa vitae reprehenderit praesentium
            nemo hic? Mollitia iusto dolores ratione laboriosam voluptas qui
            voluptates expedita facere cupiditate.
          </p>
        </section>

        <section>
          <h1>Lista de projetos</h1>

          <article className="listas">

            {listas.map((item, index) => {

              return (
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

export default Home;