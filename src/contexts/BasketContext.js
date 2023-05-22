import { createContext, useState } from 'react';

export const BasketContext = createContext(null);

export const BasketContextProvider = ({children}) =>{
    const [basket, setbasket] = useState([])
    const values = {
        basket,
        setbasket
    }
    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
    

}
