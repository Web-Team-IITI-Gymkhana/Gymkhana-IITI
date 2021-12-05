import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {

    return (
        <>  
            <div className='display-3 text-center'>
                Welcome to Students' Gymkhana IIT Indore
            </div>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' exact component={LoginPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
