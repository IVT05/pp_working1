import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import NftStore from "./store/NftStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
            user: new UserStore(),
            nft: new NftStore(),
    }}>
        <App />
    </Context.Provider>,


  document.getElementById('root')
);
