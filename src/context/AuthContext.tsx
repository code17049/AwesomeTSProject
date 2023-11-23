import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// Que informacion deseo exponer
export interface AuthState {
    isLogig: boolean,
    useName?: string,
    favoriteIcon?: string
}

// Estado inicial
export const authInicialState: AuthState = {
    isLogig: false,
    useName: 'Suscribanse',
    favoriteIcon: undefined
}

// Aqui se define lo que se mostrara
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void,
    changeFavoriteIcon: (iconName: string) => void;
}

// Crear contexto 
export const AuthContext = createContext({} as AuthContextProps );

// Componete que provee el estado
export const AuthProvider = ({children}: any) => {
    const [authState, dispatch] = useReducer(authReducer, authInicialState)
    const singIn = () => {
        dispatch({type: "singIn"})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: "cambiarIconoFavorito", payload: iconName})
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                singIn,
                changeFavoriteIcon
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}