import { useState, createContext } from 'react';
import Main from './pages/Main';

import './App.css';

export const AppContext = createContext<any>([]);

function App() {
    const [library, setLibrary] = useState<any>([]);
    const [bag, setBag] = useState<any>([]);

    return (
        <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
            <Main />
        </AppContext.Provider>
    );
}

export default App;
