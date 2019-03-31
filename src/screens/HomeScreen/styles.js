import { StyleSheet  } from 'react-native';
export default styles = StyleSheet.create({
    background:{
        flex:1,
        flexDirection:'column',
        justifyContent: "space-between",
        alignItems:"stretch"
    },
    wrapperLogoTripPlanner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    wrapperLogoDevpleno:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        paddingBottom:32
    },
    buttonText:{
        paddingBottom:16,
        paddingTop:16, 
       fontSize:18
    },
    buttonEmptyStateBackground:{
        alignItems:"center",
        backgroundColor: 'white' ,
        paddingBottom:5,
        paddingTop:5,
    },
    buttonEmptyStateText:{
        textAlign:'center', 
        alignItems:"center",
        backgroundColor: 'white' , 
        paddingTop:14,
        paddingBottom:14
    }


})