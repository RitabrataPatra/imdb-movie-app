import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import axios from "axios";
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=71aff28f";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        // console.log(results);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
    // console.log(s)
  };

  const openPopUp = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };
  const closePopUp = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  return (
    <div className="App">
      <header className="">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopUp={openPopUp} />
        {(typeof state.selected.Title != "undefined") ? (
          <Popup selected={state.selected} closePopUp={closePopUp} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
