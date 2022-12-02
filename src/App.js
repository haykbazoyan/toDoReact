import "./App.css";

function App() {
  const data = ["Learn JS", "Learn ReactJS", "Learn Redux"];

  function ListItems(data) {
    data.map((el) => <div>{el}</div>);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
