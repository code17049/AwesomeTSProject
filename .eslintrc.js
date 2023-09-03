module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Ajustes específicos para ser menos restrictivo
    '@typescript-eslint/no-unused-vars': 'off', // Deshabilita la advertencia por variables no utilizadas
    'no-extra-boolean-cast': 'off', // Permite doble negación (!!) para convertir a booleano
  },

};
