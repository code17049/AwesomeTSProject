import React from 'react'
import { AuthState } from './AuthContext'

type AuthAction = 
    | {type: 'singIn'}
    | {type: 'logOut'}
    | {type: 'cambiarIconoFavorito', payload: string}
    | {type: 'changeUseName', payload: string}

export const authReducer = (state: AuthState, action: AuthAction ): AuthState  => {
  switch (action.type) {
    case 'singIn':
        return {
            ...state,
            isLogig: true,
            useName: undefined,
            favoriteIcon: undefined,
        }
    case 'cambiarIconoFavorito':
        return {
            ...state,
            isLogig: true,
            useName: undefined,
            favoriteIcon: action.payload
        }

    case 'changeUseName':
        return {
            ...state,
            useName: action.payload, 
        }

     case 'logOut':
        return {
            ...state,
            isLogig: false
        }
        
    default:
        return state
  }
}
