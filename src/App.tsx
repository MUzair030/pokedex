import React from 'react';
import {Background} from "./components/Backgrounds";
import "./scss/index.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BaseLayout} from "./layouts/BaseLayout";
import Pokemon from "./pages/Pokemon";
import SearchPokemon from "./pages/SearchPokemon";
import MyList from "./pages/MyList";
import ComparePokemon from "./pages/ComparePokemon";
import About from "./pages/About";

function App() {
  return (
    <div className="main-container">
        <Background/>
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route element={ <BaseLayout /> }>
                        <Route path="/" element={ <Pokemon/> } />
                        <Route path="/pokemon" element={ <Pokemon/> } />
                        <Route path="/search" element={ <SearchPokemon/> } />
                        <Route path="/compare" element={ <ComparePokemon/> } />
                        <Route path="/list" element={ <MyList/> } />
                        <Route path="/about" element={ <About/> } />

                        {/*<Route path="/" element={ <Navigate to="/dashboard" replace={true} /> } />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
