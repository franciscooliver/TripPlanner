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
        let date = new Date();
        const trip = {
            id: date.getTime(),
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
        

        this.props.navigation.navigate('AddPointScreen', {id:trip.id })
        
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
                <TouchableOpacity style={styles.btnSave} onPress={this.handleSave}>
                  <Text style={styles.textButtonSave}>Salvar viagem</Text>
                </TouchableOpacity>

                <Text>{this.state.trip}</Text>
            </View> 
        );
    }
}

export default AddTripScreen;

