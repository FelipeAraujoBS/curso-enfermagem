"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    // Importar AOS dinamicamente apenas no cliente
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800, // Duração da animação (ms)
        once: true, // Anima só uma vez
        offset: 100, // Distância antes de ativar
        easing: "ease-in-out", // Tipo de animação
      });
    });
  }, []);

  return null;
}
