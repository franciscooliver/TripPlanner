import React, { Component } from 'react';
import { View, Text,Image, TextInput,TouchableOpacity, AsyncStorage} from 'react-native';
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
    
    handleSave = async() => {
      const id = this.props.navigation.state.params.id
      const pointsAS = await AsyncStorage.getItem('trip-'+id);
      let points = [];

      if(pointsAS){
        points = JSON.parse(pointsAS)
      }

      points.push(this.state)
      await AsyncStorage.setItem('trip-'+id, JSON.stringify(points));

      let total = 0;
      points.forEach(p => {
        total += p.price
      });

      const tripsAS  = await AsyncStorage.getItem('trips')
      let trips = [];
      if(tripsAS){
        trips = JSON.parse(tripsAS)
      }

      trips.forEach((trip, index) => {
        if(trip.id === id){
          trips[index] = total
          trips[index].latitude = points[0].position.latitude
          trips[index].longitude = points[0].position.longitude
          
        }
      });

      await AsyncStorage.setItem('trips', JSON.stringify(trips))

      alert(JSON.stringify(points))

    }

    renderItem = item => {
        return <View style={styles.item}>
         <View style={styles.wrapperInfo} >
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

                </View>
                <TextInput style={styles.input} placeholder="Nome do ponto" onChangeText={txt => this.setState({pointName:txt})}/>
                <TextInput style={styles.input} placeholder="Descrição" onChangeText={txt => this.setState({description:txt})}/>
                <TextInput style={styles.input} placeholder="Preço" onChangeText={txt => this.setState({ price:parseFloat(txt) })}/>
                <TouchableOpacity style={styles.btnSave} onPress={this.handleSave}>
                  <Text style={styles.textButtonSave}>Salvar ponto</Text>
                </TouchableOpacity>
                {/* <Text>{JSON.stringify(this.state)}</Text> */}
                <Text>{this.props.navigation.state.params.id}</Text>
            </View> 
        );
    }
}

export default AddTripScreen;

