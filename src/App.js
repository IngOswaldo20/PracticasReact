import logo from './logo.svg';
import './App.css';

function App() {
  const now = new Date();
  const a =10;
  const b=20;
  return (
    <div>
      <h3>Hola mundo, la hora es, {now.toString()}</h3>
      <p>
        {a} + {b} = {a+b}
      </p>
    </div>
  );
}

export default App;
