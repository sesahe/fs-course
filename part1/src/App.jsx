import Mensaje from './Mensaje.jsx'

const Descripcion = () => {
  return <span>Esta es la app del curso de Fullstack</span>
}
const App = () => {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Mensaje color="red" message="Estamos trabajando"></Mensaje>
      <Mensaje color="blue" message="en un curso"></Mensaje>
      <Mensaje color="green" message="de React"></Mensaje>
      <br></br>
      <Descripcion></Descripcion>
    </div>
  )
}


export default App;
