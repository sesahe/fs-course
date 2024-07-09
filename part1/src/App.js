import './App.css';
import Mensaje from './Mensaje.js';
import Description from './Description.js';

function App() {
  return (
    <div className='App'>
      <Mensaje message='Estamos trabajando'/>
      <Mensaje message='en un curso'/>
      <Mensaje message='de React'/>
      <Description />
    </div>
  );
}

export default App;