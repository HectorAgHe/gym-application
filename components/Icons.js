import Entypo from '@expo/vector-icons/Entypo';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
// import AntDesign from '@expo/vector-icons/AntDesign';

/*En este archivo se recomienda exportar todos los iconos que se vayan a utilizar en la aplicacion*/

export const HomeIcon = (props)=>{
    return <Entypo name="home" size={24} color="white" {...props} />
}

export const ExcerciceIcon = (props)=>{
    return <FontAwesome name="list-ol" size={24} color="white" {...props} />
}

export const ArrowIcon = (props)=>{
    return <AntDesign name='arrowright' size={24} color="white" {...props}  />
}

export const UserIcon = (props)=>{
    return <AntDesign name="user" size={24} color="white" {...props} />
}

