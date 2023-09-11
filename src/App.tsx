import { Main } from './Pages/Main/Main';
import { CharPage } from './Pages/Main/CharPage/CharPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {

    return (
        <Router>
            <Routes>
            <Route path="/" element={
                <>
                    <Main />
                </>
            } />
            <Route path="/characters/:id" element={<CharPage/>} />
            </Routes>

        </Router>

    );
}

export default App;
