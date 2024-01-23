import React from 'react';

export const Temas = {
    claro : { backgroundColor: "#black", color: "black" },
    oscuro : { backgroundColor: "black", color: "#fff" },
}

export const ContextoAplicacion = {
    temaOscuro : false,
    cambiarTema : () => {},
}

export const Contexto = React.createContext (ContextoAplicacion);