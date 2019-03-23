import React, {Component}  from  'react';
import { View,  Text, ImageBackground, Image, TouchableWithoutFeedback}  from 'react-native'
import assets from './assets'
import styles from './styles'
import isIphoneX from '../../utils/IsIphoneX'

class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
     state = {
        show:false 
     }

     handleCounter = () => {
         this.setState({
             show:  !this.state.show
         });
     }

    render(){
        
        return( 
            <ImageBackground 
                source={ assets.background } 
                imageStyle={{ resizeMode:'stretch' }}
                style={ styles.background }>
                
                <View style={ styles.wrapperLogoTripPlanner }>
                    <Image source={assets.tripPlanner }/>
                </View>

                <View style={ styles.wrapperLogoDevpleno }>
                    <Image source={ assets.devPleno }/>
                </View>
                {
                    !this.state.show ? <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Trips')}>
                        <View style={ styles.buttonEmptyStateBackground }>
                                <Text style={ styles.buttonText }> Começar? </Text> 
                        </View>
                    </TouchableWithoutFeedback>
                     : 
                     <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Trips')  }>
                        <View style={ styles.buttonEmptyStateText }>
                            <Image source={ assets.pin }></Image>
                            <Text style={ styles.buttonText }> Vamos  planejar sua primeira viagem?</Text>
                            <Image source={ assets.arrowRight } style={[
                                isIphoneX() ? { marginBottom:20 } : null
                            ]}></Image>
                        </View>
                    </TouchableWithoutFeedback>
                }
            
            </ImageBackground>
        )
    }
}

export default HomeScreen;