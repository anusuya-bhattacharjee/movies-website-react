// context API => context(warehouse) > Provider(Delivery Boy) > Consumer(you, useContext hooks)
import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

//we need to create a provider function
const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({show: false, msg: ""});
    const [query, setQuery] = useState("titanic");

    // Api url
const API_URL = `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`

    const getMovies = async (url) =>{
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: ""
                })
                setMovies(data.Search);
            }else{
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
            
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(API_URL)
        }, .800);

        return () => clearTimeout(timerOut);
      
    }, [query])

return <AppContext.Provider value={{isError, isLoading, movies, query, setQuery}}>
{children}
</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};