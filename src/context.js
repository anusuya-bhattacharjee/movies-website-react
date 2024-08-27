// context API => context(warehouse) > Provider(Delivery Boy) > Consumer(you, useContext hooks)
import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

// Api url
const API_URL = `http://www.omdbapi.com/?s=titanic&apikey=45a868e8`

//we need to create a provider function
const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({show: false, msg: ""});

    const getMovies = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovies(data.Search);
            }else{
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
            
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getMovies(API_URL)
    }, [])

return <AppContext.Provider value={{isError, isLoading, movies}}>
{children}
</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};