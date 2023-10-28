import './App.css';

function App() {
  return (
    <div>
      Hello world!
      <form>
        <input
          id="dinosaur_name"
          name="dinosaur_name"
          className="dinosaur-input"
          aria-describedby="dinosaur_name_info"
        ></input>
      </form>
    </div>
  );
}

export default App;
