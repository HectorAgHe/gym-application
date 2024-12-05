import images from "./images.js";

const ejerciciosData = {
  ejercicios: [
    {
      id: 1,
      url: images.imagePressBancaPlano,
      name: "Pecho - Press de banca Plano",
      description:
        "El press de banca plano es un ejercicio de entrenamiento de fuerza que se realiza en una banca horizontal. Consiste en bajar una barra cargada de peso hasta el pecho y luego empujarla hacia arriba hasta que los brazos estén extendidos. Este ejercicio trabaja principalmente los músculos pectorales.",
      instructions: [
        { id: 1, texto: "Preparación y posición: Acuéstate en la banca plana, apoyando bien la espalda y los pies en el suelo. Alinea los ojos debajo de la barra y asegúrate de que los hombros, la cabeza y los glúteos estén en contacto con la banca." },
        { id: 2, texto: "Agarre: Toma la barra con un agarre un poco más ancho que el ancho de los hombros. Envuelve bien los pulgares para asegurar la barra y mantener el control." },
        { id: 3, texto: "Desciende la barra: Inhala y baja la barra lentamente hacia el pecho, manteniendo los codos en un ángulo de aproximadamente 45 grados con respecto al torso. Baja la barra hasta que esté a la altura de los pezones o ligeramente por encima." },
        { id: 4, texto: "Empuje: Exhala y empuja la barra hacia arriba de forma controlada, estirando los brazos hasta que queden casi rectos (sin bloquear los codos por completo)." },
        { id: 5, texto: "Repetición: Repite el movimiento el número deseado de veces, manteniendo el control y la técnica en cada repetición." }
      ],
      recommend: "3x8"
    },
    {
      id: 2,
      url: images.imagePressSentado,
      name: "Pecho - Press de banca en máquina - Sentado",
      description:
        "El press de banca en máquina sentado es un ejercicio de fuerza que trabaja principalmente los músculos del pecho, los tríceps y los deltoides. Se realiza sentado en una máquina, empujando las manijas hacia adelante desde la altura del pecho, manteniendo la espalda apoyada en el respaldo. Es ideal para principiantes, ya que guía el movimiento y reduce el riesgo de lesiones.",
      instructions: [
        { id: 1, texto: "Ajusta el asiento para que las manijas queden a la altura de tu pecho." },
        { id: 2, texto: "Siéntate con la espalda recta, apoyada completamente en el respaldo." },
        { id: 3, texto: "Coloca las manos en las manijas con un agarre prono firme y los codos ligeramente flexionados." },
        { id: 4, texto: "Empuja las manijas hacia adelante hasta extender casi por completo los brazos, sin bloquear los codos." },
        { id: 5, texto: "Regresa lentamente a la posición inicial controlando el movimiento." }
      ],
      recommend: "3x8"
    },
    {
      id: 3,
      url: images.imagePressSentado2,
      name: "Pecho - Aperturas en maquina - contractor de pecho",
      description:
        "Las aperturas en máquina - contractor de pecho son un ejercicio que se enfoca en trabajar los músculos del pectoral mayor y medio. Se realiza sentado en una máquina, juntando los brazos desde los lados hacia el centro del pecho en un movimiento de 'abrazo'. Es ideal para aislar los pectorales y mejorar su definición.",
      instructions: [
        { id: 1, texto: "Ajusta la máquina: Coloca el asiento de la máquina a la altura adecuada para que las almohadillas estén alineadas con el nivel de tus brazos, justo por debajo de tus codos. Ajusta también el peso que utilizarás para el ejercicio." },
        { id: 2, texto: "Posición inicial: Siéntate en la máquina con la espalda completamente apoyada en el respaldo. Mantén los pies firmemente en el suelo y los codos ligeramente doblados mientras sujetas las manijas o las almohadillas con ambas manos. Los brazos deben estar extendidos hacia los lados, alineados con tu torso." },
        { id: 3, texto: "Alinea los codos y hombros: Mantén los hombros hacia atrás y el pecho ligeramente elevado para evitar encorvarte durante el movimiento. Los codos deben estar ligeramente hacia abajo y no completamente abiertos, para proteger las articulaciones del hombro." },
        { id: 4, texto: "Movimiento de cierre: Inhala y, mientras exhalas, lleva ambas manijas hacia el centro del pecho, como si estuvieras cerrando un abrazo. Asegúrate de apretar los pectorales al final del movimiento, concentrando el esfuerzo en los músculos del pecho." },
        { id: 5, texto: "Regreso controlado: Inhala mientras regresas lentamente las manijas a la posición inicial, asegurándote de mantener la tensión en los músculos del pecho en todo momento. Evita que las pesas choquen entre sí al final del movimiento." }
      ],
      recommend: "3x8 incrementando el peso en cada serie hasta llegar a tu peso máximo soportado."
    },
    {
      id: 4,
      url: images.imageRemo,
      name: "Espalda - Remo con polea",
      description:"El remo con polea sentado es un ejercicio que fortalece la musculatura de la espalda, enfocándose principalmente en los dorsales, trapecios y romboides, pero también activando los bíceps y los músculos del core. Se realiza en una máquina de polea sentado, lo que permite un control seguro del movimiento y la carga.",
      instructions:[
        {id: 1, texto: "Siéntate y ajusta la posición: Siéntate en la máquina con la espalda recta. Coloca los pies firmemente en los soportes para estabilizarte, asegurándote de que las rodillas estén ligeramente flexionadas."},
        {id: 2, texto: "Sujeta el mango con un buen agarre: Toma el mango (recto) con ambas manos. Mantén un agarre firme pero relajado, evitando tensar demasiado las muñecas."},
        {id: 3, texto: "Inicia el movimiento con una postura correcta: Mantén el pecho ligeramente levantado y los hombros hacia atrás. Jala el mango hacia tu abdomen, manteniendo los codos cerca del cuerpo y evitando que se abran hacia los lados."},
        {id: 4, texto: "Contrae la espalda al final del movimiento:Cuando el mango llegue cerca de tu torso, contrae los omóplatos juntos para maximizar la activación de la espalda. Evita encorvarte o forzar el movimiento con la cadera."},
        {id: 5, texto: "Regresa lentamente a la posición inicial: Extiende los brazos de manera controlada para regresar a la posición inicial, manteniendo siempre una ligera tensión en los músculos. Evita que el peso golpee o pierdas el control de la polea."},                
      ],
      recommend: "Principiantes: 3 series de 10-12 repeticiones con un peso moderado, enfocado en la técnica. Intermedios/Avanzados: 4 series de 8-10 repeticiones con un peso desafiante, manteniendo el control en todo momento. Consejo adicional: Combina este ejercicio con otros movimientos de espalda, como dominadas o remo con mancuernas, para trabajar la espalda desde diferentes ángulos.  Asegúrate de incluirlo en tu rutina de entrenamiento 2-3 veces por semana y descansa al menos 48 horas entre sesiones de espalda para permitir una recuperación adecuada.",
    },
    {
      id: 5,
      url: images.imagejalonAtras,
      name: "Espalda - Jalon atras",
      description:"El jalón hacia atrás es un ejercicio realizado en una máquina de polea alta, diseñado para fortalecer la espalda. Se enfoca principalmente en los dorsales, además de trabajar los trapecios, romboides y los músculos del bíceps. Este movimiento ayuda a desarrollar una espalda ancha y bien definida.",
      instructions:[
        {id: 1, texto: "Ajusta la máquina y siéntate correctamente: Siéntate en el banco de la máquina con los muslos bien sujetos bajo los cojines de soporte. Ajusta estos cojines para que se adapten cómodamente y no permitas que el cuerpo se eleve durante el movimiento."},
        {id: 2, texto: "Toma la barra con un agarre ancho: Agarra la barra con las palmas hacia adelante (agarre pronado) y las manos separadas un poco más allá del ancho de los hombros. Mantén los brazos extendidos pero relajados."},
        {id: 3, texto: "Prepara la postura: Inclina ligeramente el torso hacia atrás (unos 15-20 grados) mientras sacas el pecho hacia adelante. Mantén la espalda recta durante todo el ejercicio."},
        {id: 4, texto: "Jala la barra hacia abajo: Tira de la barra hacia la parte superior de tu pecho mientras mantienes los codos hacia abajo y ligeramente hacia atrás. Contrae los músculos de la espalda al final del movimiento, evitando arquear demasiado la espalda."},
        {id: 5, texto: "Regresa a la posición inicial de forma controlada:Extiende lentamente los brazos para devolver la barra a la posición inicial, permitiendo que los dorsales se estiren completamente sin perder la tensión en los músculos."},                
      ],
      recommend: "Principiantes: 3 series de 10-12 repeticiones con un peso moderado para aprender la técnica.  Intermedios/Avanzados: 4 series de 8-10 repeticiones con un peso desafiante, cuidando la forma.",
    },
    {
      id: 6,
      url: images.prensaPiernas,
      name: "Piernas - Prensa de piernas",
      description:"La prensa de piernas es un ejercicio que trabaja principalmente los músculos de las piernas, incluyendo los cuádriceps, glúteos, isquiotibiales y, en menor medida, los músculos de la pantorrilla. Se realiza en una máquina de prensa donde empujas una plataforma con los pies, lo que permite trabajar las piernas de manera aislada y con seguridad.",
      instructions:[
        {id: 1, texto: "Ajusta la máquina y siéntate adecuadamente: Siéntate en la máquina de prensa con la espalda completamente apoyada en el respaldo y los glúteos bien colocados. Ajusta el respaldo o la plataforma para que las rodillas queden a un ángulo de 90 grados al inicio del movimiento."},
        {id: 2, texto: "Coloca los pies en la plataforma: Sitúa los pies al ancho de los hombros sobre la plataforma, asegurándote de que estén centrados. Para variar la activación muscular, puedes ajustar la posición (más alta para glúteos e isquiotibiales, más baja para cuádriceps)."},
        {id: 3, texto: "Libera el seguro y extiende las piernas: Empuja la plataforma hacia adelante con ambos pies hasta que las piernas estén casi extendidas, pero sin bloquear las rodillas para evitar lesiones."},
        {id: 4, texto: "Desciende la plataforma controladamente: Baja la plataforma flexionando las rodillas de forma controlada, asegurándote de que no pasen por delante de la línea de los pies. Mantén la espalda y los glúteos en contacto con el respaldo en todo momento."},
        {id: 5, texto: "Empuja nuevamente para completar una repetición: Presiona con los pies para llevar la plataforma hacia adelante nuevamente, usando los músculos de las piernas. Mantén un ritmo constante y controlado durante todo el ejercicio."

        },                
      ],
      recommend: "Principiantes: 3 series de 10-12 repeticiones con un peso moderado que te permita mantener la técnica.   Intermedios/Avanzados: 4-5 series de 8-10 repeticiones con un peso desafiante, asegurando un control total en el movimiento.",
    },
    
    
  ]
};

export default ejerciciosData;