import React from 'react'
import { AuthState } from './AuthContext'

type AuthAction = 
    | {type: 'singIn'}
    | {type: 'cambiarIconoFavorito', payload: string}

export const authReducer = (state: AuthState, action: AuthAction ): AuthState  => {
  switch (action.type) {
    case 'singIn':
        return {
            ...state,
            isLogig: true,
            useName: 'OtroNombre',
            favoriteIcon: 'Comenten'
        }
    case 'cambiarIconoFavorito':
        return {
            ...state,
            isLogig: true,
            useName: 'OtroNombre',
            favoriteIcon: action.payload
        }
        


    default:
        return state
  }
}
