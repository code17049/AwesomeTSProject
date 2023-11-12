import React from 'react'
import { AuthState } from './AuthContext'

type AuthAction = {
    type: 'singIn'
}

export const authReducer = (state: AuthState, action: AuthAction ): AuthState  => {
  switch (action.type) {
    case 'singIn':
        return {
            ...state,
            isLogig: true,
            useName: 'OtroNombre',
            favoriteIcon: 'Comenten'
        }
        
    default:
        return state
  }
}
