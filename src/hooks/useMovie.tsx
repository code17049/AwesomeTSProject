
import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Peliculas, PeliculasNow } from "../interfaces/movieInterface";

export const useMovie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasActuales, setPeliculasActuales] = useState<Peliculas[]>([]);

    const getPeliculas = async() => {
      const resp = await movieDB.get<PeliculasNow>('/now_playing');
      setPeliculasActuales(resp.data.results);
      setIsLoading(false);
      /* then(resp => {
        console.log(resp.data.results[0].title);
      }) */
    }
    
    useEffect(() => {
      getPeliculas();
    }, [])

    return {
        peliculasActuales,
        isLoading
    }
  
}


