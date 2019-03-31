import React, { Component } from 'react';
import { View, Text,Image, TextInput,TouchableOpacity} from 'react-native';
import styles from './styles'
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps';

class AddTripScreen extends Component{
    static navigationOptions = {
        header:null
    }

    state = {
      position:{
        latitude: 37.78825,
        longitude: -122.4324,
      },
      pointName:'',
      description:'',
      price:0
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
                  <MapView style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}>
                      <Marker
                      coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                      }}
                      
                        onDragEnd={(evt) => this.setState({ position: evt.nativeEvent.coordinate })}
                        draggable
                      />
                    </MapView>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../assets/arrow-left.png')}/>
                        </TouchableOpacity>
                    </View>
        
                    {/* <View style={styles.circleBackground}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Addtrip')}>
                            <Image source={ require('../../../assets/Ellipse.png') }/>
                            <Image style={styles.btnAdd} source={require('../../../assets/Union.png')}/>
                        </TouchableOpacity>
                    </View> */}

                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>R$ {trip.price}</Text>
                </View>
                <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({pointName:txt})}/>
                <TextInput style={styles.input} placeholder="Descrição" onChangeText={txt => this.setState({description:txt})}/>
                <TextInput style={styles.input} placeholder="Preço" onChangeText={txt => this.setState({price:txt})}/>
                <TouchableOpacity style={styles.btnSave}>
                  <Text style={styles.textButtonSave}>Salvar ponto</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(this.state)}</Text>
            </View> 
        );
    }
}

export default AddTripScreen;

