import React, { Component } from 'react';
import { View, Text,Image, TextInput,TouchableOpacity, AsyncStorage} from 'react-native';
import styles from './styles'

class AddTripScreen extends Component{
    static navigationOptions = {
        header:null
    }

    state = {
      trip:'',
    }

    handleSave = async() => {
        const trip = {
            id:new Date.getTime(),
            trip: this.state.trip,
            price:0,
            latitude:0,
            longitude:0
        }

        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }

        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        
    }

    renderItem = item => {
        return <View style={styles.item}>
         <View style={styles.wrapperInfo}>
            <Text style={styles.itemName}>{item.item.name}</Text>
            <Text>{item.item.description}</Text>
         </View>
         <View style={styles.wrapperItemPrice}>
            <Text style={styles.itemPrice}>{item.item.price}</Text> 
         </View>
        </View>
    }

    render(){
        const trip = {
            name: 'Eurotrip 2019',
            price:'R$ 4.000',
            places:[
                { id:'1', name:'Amsterdan', price: 100,description: 'Chegada', lat:0, log:0 },
                { id:'2', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
                { id:'3', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
                { id:'4', name:'Amsterdan', price: 100,description: 'Chegada', lat:0, log:0 },
                { id:'5', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
                { id:'6', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
                { id:'7', name:'Amsterdan', price: 100,description: 'Chegada', lat:0, log:0 },
                { id:'8', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
                { id:'9', name:'bruxelas', price: 150, description:'Hospedagem', lat:0, log:0 },
            ]
        };
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                  <View style={styles.backButton}>
                      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                          <Image source={require('../../../assets/arrow-left.png')}/>
                      </TouchableOpacity>
                  </View>
                </View>
                
                <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({trip:txt})}/>
                <TouchableOpacity style={styles.btnSave}>
                  <Text style={styles.textButtonSave}>Salvar viagem</Text>
                </TouchableOpacity>
            </View> 
        );
    }
}

export default AddTripScreen;

