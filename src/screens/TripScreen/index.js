import React, { Component } from 'react';
import { View, Text,Image, FlatList,TouchableOpacity} from 'react-native';
import styles from './styles'

class TripScreen extends Component{
    static navigationOptions = {
        header:null
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
                    <View style={styles.circleBackground}>
                        <TouchableOpacity>
                            <Image source={ require('../../../assets/Ellipse.png') }/>
                            <Image style={styles.btnAdd} source={require('../../../assets/Union.png')}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>R$ {trip.price}</Text>
                </View>

                <FlatList style={{flex:1}}
                    data={trip.places}
                    renderItem={this.renderItem}
                    keyExtractor={ item => item.id}
                    contentContainerStyle={{
                        paddingTop:16,
                        paddingLeft:16,

                    }}
        
                />
                
            </View>
        );
    }
}

export default TripScreen;