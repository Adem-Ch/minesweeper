import './App.css';
import Field from './field';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Field rows={10} columns={10} />
    </div>
  );
}

export default App;
