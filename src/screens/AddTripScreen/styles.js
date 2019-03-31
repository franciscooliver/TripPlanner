import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper:{ 
        flex:1
    },
    header:{
        height:60,
        backgroundColor:'grey'
    },
    backButton:{
        position:'absolute',
        top:16,
        left:16,
    },
    btnAdd:{
        position:'absolute',
        top:10,
        right:7,
    },
    input:{
        backgroundColor:"#e5e5e5",
        marginLeft:16,
        marginTop:16,
        marginRight:16,
        fontSize:16,
        paddingTop:15,
        paddingLeft:5,
        paddingBottom:15,
        color:"#000"
    },
    btnSave:{
        backgroundColor:"#e5e5e5",
        marginLeft:16,
        marginTop:16,
        marginRight:16,
        padding:20,
    },
    textButtonSave:{
        textAlign:"center"
    }

});