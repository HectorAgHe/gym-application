import imagePressBancaPlano from "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/pressBancaPlano.gif"
import imagePressSentado from  "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/pressSentadoM1.gif"
import imagePressSentado2 from   "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/pressSentadoM2.gif"
import imagePressSentado3 from "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/pressSentadoM3.gif"
import imageCablesRecto from "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/jalonCablesRecto.gif"
import imageCablesPie from "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/jalonCablesPie.gif"
import imageCables from "./Ejercicios/TrenSuperior/Pecho/pectoralMedio/enMaquina/jalonCables.gif"
const ejerciciosData = {
  ejercicios: [
    {
      id: 1,
      url: imagePressBancaPlano,
      nombre: "Press de banca - Plano",
      descripcion:
        "El press de banca plano es un ejercicio de entrenamiento de fuerza que se realiza en una banca horizontal. Consiste en bajar una barra cargada de peso hasta el pecho y luego empujarla hacia arriba hasta que los brazos estén extendidos. Este ejercicio trabaja principalmente los músculos pectorales.",
      instrucciones: [
        { id: 1, texto: "Preparación y posición: Acuéstate en la banca plana, apoyando bien la espalda y los pies en el suelo. Alinea los ojos debajo de la barra y asegúrate de que los hombros, la cabeza y los glúteos estén en contacto con la banca." },
        { id: 2, texto: "Agarre: Toma la barra con un agarre un poco más ancho que el ancho de los hombros. Envuelve bien los pulgares para asegurar la barra y mantener el control." },
        { id: 3, texto: "Desciende la barra: Inhala y baja la barra lentamente hacia el pecho, manteniendo los codos en un ángulo de aproximadamente 45 grados con respecto al torso. Baja la barra hasta que esté a la altura de los pezones o ligeramente por encima." },
        { id: 4, texto: "Empuje: Exhala y empuja la barra hacia arriba de forma controlada, estirando los brazos hasta que queden casi rectos (sin bloquear los codos por completo)." },
        { id: 5, texto: "Repetición: Repite el movimiento el número deseado de veces, manteniendo el control y la técnica en cada repetición." }
      ],
      recomendacion: "3x8"
    },
    {
      id: 2,
      url: imagePressSentado,
      nombre: "Press de banca en máquina - Sentado",
      descripcion:
        "El press de banca en máquina sentado es un ejercicio de fuerza que trabaja principalmente los músculos del pecho, los tríceps y los deltoides. Se realiza sentado en una máquina, empujando las manijas hacia adelante desde la altura del pecho, manteniendo la espalda apoyada en el respaldo. Es ideal para principiantes, ya que guía el movimiento y reduce el riesgo de lesiones.",
      instrucciones: [
        { id: 1, texto: "Ajusta el asiento para que las manijas queden a la altura de tu pecho." },
        { id: 2, texto: "Siéntate con la espalda recta, apoyada completamente en el respaldo." },
        { id: 3, texto: "Coloca las manos en las manijas con un agarre prono firme y los codos ligeramente flexionados." },
        { id: 4, texto: "Empuja las manijas hacia adelante hasta extender casi por completo los brazos, sin bloquear los codos." },
        { id: 5, texto: "Regresa lentamente a la posición inicial controlando el movimiento." }
      ],
      recomendacion: "3x8"
    },
    {
      id: 3,
      url: imagePressSentado2,
      nombre: "Press de banca en máquina - Sentado (Variante)",
      descripcion:
        "Otra máquina para el press de banca en máquina sentado que trabaja principalmente los músculos del pecho, los tríceps y los deltoides. Se realiza sentado en una máquina, empujando las manijas hacia adelante desde la altura del pecho, manteniendo la espalda apoyada en el respaldo.",
      instrucciones: [
        { id: 1, texto: "Ajusta la máquina para que las manijas estén alineadas con la altura de tu pecho cuando estés sentado. Asegúrate de que los pies estén firmemente apoyados en el suelo y que tu espalda esté completamente recta contra el respaldo." },
        { id: 2, texto: "Sujeta las manijas con un agarre neutral, asegurándote de que tus manos estén alineadas con los codos." },
        { id: 3, texto: "Mantén los hombros hacia atrás, el pecho ligeramente elevado y la espalda bien apoyada en el respaldo. Evita arquear la espalda o encorvarte durante el ejercicio." },
        { id: 4, texto: "Inhala y, mientras exhalas, empuja las manijas hacia adelante, extendiendo los brazos hacia el frente sin bloquear los codos." },
        { id: 5, texto: "Regresa lentamente las manijas hacia la posición inicial mientras inhalas, manteniendo el control y la tensión en los músculos del pecho." }
      ],
      recomendacion: "3x10 incrementando el peso en cada serie hasta llegar a tu peso máximo soportado."
    }
  ]
};

export default ejerciciosData;