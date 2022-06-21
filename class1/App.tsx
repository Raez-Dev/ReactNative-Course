import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import DrStrange from './app/resources/images/dr_strange.jpg';
const CLASS_NAME = 'Second group';

class App extends Component {

  constructor(props) {
    //  All is initializing when we up a class instance
    super(props);
    this.state = {
      email: 'Another name'
    }
    console.log("constructor: ", 'constructor')
    console.log("The email is: ", this.state.email)
    //  Initialize type state variables 
  }

  state = {
    email: 'marc'
  }
  componentDidMount() {
    //  Montado y aun no renderizado
    //  Consumir un endpoint de tu api
    //  Asignar valoroes a variables
    //  Ejecutar funciones (Inicializacion de configuraciones -> Login con google)
    console.log('componentDidMount :', 'componentDidMount')
  }

  login = async () => {
    console.log('Staring session')
    setTimeout(() => {
      console.log('Successful login');

    }, 4000)

  }

  componentDidCatch() {
    console.log('componentDidCatch :', 'componentDidCatch')

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate :', 'componentDidUpdate')
    if (prevProps !== props) {
      return true
    }

  }

  componentWillUnmount() {
    // Ejecutado al desmontar la vista
    console.log('componentWillUnmount :', 'componentWillUnmount')
  }

  render() {
    console.log('render :', 'render')
    return <View>
      <Text>First Group <Text>Another text</Text> {CLASS_NAME}</Text>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/71me10WulPL._AC_SY741_.jpg'
        }}
        style={{
          alignSelf: 'center',
          width: 200,
          height: 200
        }}
      />
      {/* Call local image */}
      {/* <Image
        source={DrStrange}
        style={{          
          alignSelf: 'center',
          width: 200,
          height: 200
        }}
      /> */}

      <TextInput
        placeholder="Enter your mail"
        keyboardType='number-pad'
        style={{
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 5,
          marginVertical: 10,
          marginTop: 10,
          paddingHorizontal: 15,
          marginHorizontal: 10
        }}
      />
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 5,
          marginVertical: 10,
          marginTop: 5,
          paddingHorizontal: 15,
          marginHorizontal: 10
        }}
      />

      <Text style={{
        alignSelf: 'center',
      }}
        onPress={() => {
          Alert.alert('Alert', 'I forgot my password')
        }}
      >Forgot Password</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          console.log('Touched!')
          await this.login();
        }}
      >
        <Text style={{
          color: '#000',
          textAlign: 'center',
        }}>Login</Text>
      </TouchableOpacity>


    </View>
  }
}


const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#F6D13A',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 5,
    marginHorizontal: 10,
    alignSelf: 'center',
    width: '50%'
  }
})

export default App;