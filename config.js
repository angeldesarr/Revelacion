const CONFIG_BODA = {
  novios: {
    el: "Erick",
    ella: "Bianca",
    frase: "¡Con amor y mucha emoción, estamos esperando la llegada de nuestro bebé!✨"
  },

  estilosNombres: {
    fuente: "'Great Vibes', cursive",
    color: "#8B7A5A",  // Rosa medio de la invitación
    sombra: "0 2px 15px rgba(201, 123, 132, 0.25)",
    tamaño: "clamp(3rem, 8vw, 4.5rem)"
  },

  mensajeInvitados: {
    preTitulo: " Pronto habrá una nueva sonrisa",
    mensajeEmotivo: "Iluminando nuestras vidas. Deseamos compartir junto a ti la revelación de sexo de nuestro amado bebé Maldonado Romero. 🐰✨",
    fraseRevelacion: "✨ ¡Los esperamos para descubrir juntos si es niño o niña! ✨"
  },

  fotoNoviosHero: "./assets/BEBE1.jpg",
  fechaEvento: "2026-08-29T16:00:00",

  calendario: {
    titulo: "¡Reserva la fecha!",
    mes: "Agosto",
    año: "2026",
    diaEspecial: 29
  },
  
  colores: {
    primario: "#8B7A5A",      // Rosa medio (títulos)
    secundario: "#B8942E",    // Rosa empolvado (texto principal)
    acentoOcasional: "#D4AF37 ", // Rosa intenso (acentos)
    fondoContraste: "#F5EDE3"  // Beige/Crema (fondo)
  },
  
  ceremonia: {
    hora: "16:00 hrs",
    lugar: "Salón de Eventos",
    direccion: "Av. Reforma número 62 esquina calle 6 pte Candelaria Purificación Tepeaca, Puebla.",
    mapaUrl: "https://maps.app.goo.gl/a6dwZEnBfAfqpGDN9?g_st=aw",
    imagen: "./assets/salon1.jpg"
  },
  
  recepcion: {
    lugar: "no habra misa",
    direccion:"no habra misa"
  },
  
  recomendaciones: {
    titulo: "Recomendaciones",
    items: [
      "**🤍 Dress code:** Vestir de blanco y/o beige.",
      "**🎀 Team Girl:** Gorritos (color neutro).",
      "**🧦 Team Boy:** Calcetines (color neutro).",
      "**⏰ Puntualidad:** Te invitamos a llegar a las 4:00 pm.",
      "**🚗 Estacionamiento:** Hay espacio disponible en el salón.",
      
    ],
    colorFondo: "#F5EDE3",    // Beige/Crema
    colorBorde: "#F5EDE0",    // Rosa empolvado
    iconoGeneral: "🐰"
  },
  
  itinerario: [
    { hora: "16:00 PM", evento: "Recibimiento", icono: "copas" },
    { hora: "16:30 PM", evento: "Juegos", icono: "Juegos" },
    { hora: "17:30 PM", evento: "Revelación", icono: "Revelacion" },
    { hora: "18:00 PM", evento: "Celebración", icono: "musica" }
  ],
  
  sugerenciaRegalos: "Tu presencia es nuestro mejor regalo. Si deseas hacernos un detalle, contaremos con una lluvia de sobres en la recepción. 🐰",
  contactoWhatsApp: "2223052344",
  
  rutasImagenes: {

    fotoNoviosPortadaCinema: "./assets/PAPAS.",
    fotoNoviosCierre: "./assets/abierto.png",//confirmacion de la invitacion
    musicaAudio: "./assets/bruno.mp3",

    fotoGaleriaPrincipal: "./assets/PAPAS.jpeg",//foto de efecto sticky segunda foto abajo del cisculo 
    
    fotoRasgadaFondo: "./assets/BEBE2.jpg",

  },

  iconosItinerario: {
    iglesia: "./assets/iglesia.png",
    copas: "./assets/salon.png",
    plato: "./assets/comida.png",
    musica: "./assets/baile.png",
    Revelacion: "./assets/revelacion.png",
    Juegos: "./assets/juegos.png",
   
  },

  confirmacionMensaje: {
    titulo: "🐰 Confirmar Asistencia",
    mensaje: "¡Tu presencia es muy importante para nosotros! Confirma tu asistencia para que podamos contemplarte en esta celebración tan especial. 🐰",
    botonTexto: "Enviar confirmación ✦",
    placeholderNombre: "Nombre y apellido",
    radioSi: "🎉 ¡Muchas gracias por invitarnos! Nos vemos el 29 de Agosto para celebrar juntos la revelacion del bebé. 🐰✨",
    radioNo: "💔 Lamento no poder asistir. Pero los llevaremos en el corazón durante su celebración! 🐰",
    agradecimiento: "¡Gracias por confirmar"
  },


// ============================================================
// FONDO DINÁMICO - CONFIGURABLE
// ============================================================
fondoDinamico: {
  // 🎨 ÍCONOS DISPONIBLES:
  // 'nube', 'nube_sol', 'nube_lluvia', 'nube_luna', 'estrella',
  // 'estrella_brillante', 'sol', 'luna', 'flor', 'corazon',
  // 'conejo', 'mariposa', 'arcoiris', 'copo_nieve', 'hoja',
  // 'pluma', 'ave', 'sparkle', 'magia'
  icono: 'nube',           // Cambia esto para usar otro ícono
  cantidad: 40,            // Número de elementos flotantes
  velocidad: 25,           // Segundos en cruzar la pantalla
  tamaño: '3rem',          // Tamaño de cada elemento
  opacidad: 0.08,          // Transparencia (0-1)
  color: '#C9A84C',        // Color del ícono (puedes usar 'var(--color-primario)')
}

  
};
