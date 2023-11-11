import { createContext } from "react"

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
    favoriteIcon: 'MeGustaAlVideo'
}

// Aqui se define lo que se mostrara
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void,
}

// Crear contexto 
export const AuthContext = createContext({} as AuthContextProps );

// Componete que provee el estado
export const AuthProvider = ({children}: any) => {
    return (
        <AuthContext.Provider
            value={{
                authState: authInicialState,
                singIn: () => {}
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}