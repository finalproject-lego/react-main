import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import EmployeeInfo from './pages/EmployeeInfo';
import Notice from './pages/board/Notice';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <Main/> }/>
                    
                    <Route path='hr' element={ <EmployeeInfo />}/>
                        <Route path='/hr/empinfo' element={ <EmployeeInfo />}/>
                    <Route path='/noticeList' element={ <Notice />} />    
                </Route>

                
            </Routes>
        </BrowserRouter>
    );
}

export default App;