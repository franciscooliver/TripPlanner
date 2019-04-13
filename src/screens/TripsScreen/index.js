import React, {Component} from 'react';
import { View,Image, Text,AsyncStorage, FlatList,StyleSheet,TouchableHighlight  } from 'react-native';
import Trip from './Trip';
import isIphoneX from '../../utils/IsIphoneX';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';

export default class TripsScreen extends Component{
    static navigationOptions = {
        header:null
    }

    state = {
        trips:[]
    }
   
    renderItem = item => {
        {/* component Trip */}
         return <Trip onPress={ () => this.props.navigation.navigate('Trip') } title={ item.item.name } price={item.item.price}/>
         
    }

    componentDidMount(){
        this.loadData()
    }

    loadData = async() => {
        const tripsAS = await AsyncStorage.getItem('trips')
        
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        
        this.setState({trips:trips})
    }

     render(){  
        console.log(isIphoneX())
        const trips = [
            {id:'1', name:'Eurotrip 2019', price:'R$ 4.000' },
            {id:'2', name:'Expedição atacama', price:'R$ 2.000'},
            {id:'30', name:'Alasca tour 2019', price:'R$ 5.000'}
        ];

         return(
            <View style={{ 
                flex:1,
                justifyContent:"space-between",
                alignItems:"stretch"
                }}>
                <View style={{flex:1}}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View style={{
                        position:'absolute',
                        top:300,
                        right:16
                    }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Addtrip')}>
                            <Image source={require('../../../assets/Ellipse.png')}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <Image style={{
                                position:'absolute',
                                top:-40,
                                left:7
                            }} source={require('../../../assets/Union.png')}/>     
                        </TouchableHighlight>
                    </View>

                </View>
                {/*flatList */}

                <View style={{ backgroundColor:'pink'}}>
                    <FlatList 
                        data={trips}
                        renderItem={this.renderItem }
                        horizontal 
                        pagingEnabled
                        keyExtractor={ item => item.id }
                        style={[
                            isIphoneX() ? {marginBottom: 20} : null
                        ]}
                    />
                </View>     
            </View>

         );
     }
}
const styles = StyleSheet.create({
    map:{
        ...StyleSheet.absoluteFillObject
    }
});
