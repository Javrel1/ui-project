import React from 'react';
import Main from "./Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./Content/SignInPage/SignInPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="blogs" element={<SignInPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
