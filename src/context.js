// context API => context(warehouse) > Provider(Delivery Boy) > Consumer(you, useContext hooks)
import React, {useContext} from "react";

const AppContext = React.createContext();

//we need to create a provider function
const AppProvider = ({children}) => {
return <AppContext.Provider value="thapa">
{children}
</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};