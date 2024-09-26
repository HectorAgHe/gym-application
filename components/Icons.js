import Entypo from '@expo/vector-icons/Entypo';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';

/*En este archivo se recomienda exportar todos los iconos que se vayan a utilizar en la aplicacion*/

export const HomeIcon = (props)=>{
    return <Entypo name="home" size={24} color="black" {...props} />
}

export const ExcerciceIcon = (props)=>{
    return <FontAwesome name="list-ol" size={24} color="black" {...props} />
}

