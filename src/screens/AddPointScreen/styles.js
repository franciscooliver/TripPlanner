import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper:{ 
        flex:1
    },
    header:{
        height:192,
        backgroundColor:'grey'
    },
    backButton:{
        position:'absolute',
        top:16,
        left:16,
    },
    circleBackground:{
        width:50, 
        height:50,
        position:'absolute',
        right:16,
        top:8
    },
    btnAdd:{
        position:'absolute',
        top:10,
        right:7,
    },
    tripName:{
        position:'absolute',
        left:16,
        bottom:16,
        color:'#fff'
    },
    tripPrice:{
        position:'absolute',
        bottom:16,
        right:16,
        textAlign:'right',
        backgroundColor:'#24c6dc',
        color:'white',
        padding:5,
        paddingLeft:20,
        paddingRight:20
    },
    item:{
        flex:1,
        flexDirection:"row",
        paddingBottom:16
    },
    wrapperInfo:{
        flex:1
    },
    itemName:{
        fontWeight:'bold',
         fontSize:18
    },
    wrapperItemPrice:{
        justifyContent: "center",
        alignItems:"center",
        paddingRight:16,

    },
    itemPrice:{
        textAlign:"right",
        color:'#24c6dc',
        fontWeight:'bold'
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