import Entypo from '@expo/vector-icons/Entypo';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
// import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/*En este archivo se recomienda exportar todos los iconos que se vayan a utilizar en la aplicacion*/

export const HomeIcon = (props)=>{
    return <Entypo name="home" size={20} color="white" {...props} />
}

export const ExcerciceIcon = (props)=>{
    return <FontAwesome name="list-ol" size={24} color="white" {...props} />
}

export const ArrowIcon = (props)=>{
    return <AntDesign name='arrowright' size={24} color="white" {...props}  />
}

export const UserIcon = (props)=>{
    return <AntDesign name="user" size={20} color="white" {...props} />
}
export const DateIcon = (props)=>{
    return <Fontisto name="date" size={20} color="white" {...props} />
}
export const LogoutIcon=(props)=>{
    return <MaterialIcons name="logout" size={40} color="orange" {...props} />
}
export const CalendarIcon=(props)=>{
    return <FontAwesome name="calendar" size={20} color="orange" {...props} />
}
export const EmailIcon=(props)=>{
    return <Fontisto name="email" size={20} color="white" {...props} />
}
export const AddIcon=(props)=>{
    return <Entypo name="add-to-list" size={40} color="orange" />
}

