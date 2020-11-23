
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity } from  'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card';

const App = () => {

  function handleRedeSociais(rede_sociais){
      switch(rede_sociais){
        case 'linkedin':
          Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/dami%C3%A3o-ferreira-0b08b292/')
          break
        case 'github':
          Alert.alert('Meu GitHub', 'https://github.com/damyaoferreyra')
          break
        case 'facebook':
          break
      }
  }

  return (
    <SafeAreaView style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Damião Francisco Ferreira</Text>
        <Text style={style.funcao}>Desenvolvedor mobile</Text>
        <View style={style.rede_sociais}>
          <TouchableOpacity>
            <Icon name='github' size={30} onPress={() => handleRedeSociais('github')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='facebook' size={30} onPress={() => handleRedeSociais('facebook')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='linkedin' size={30} onPress={() => handleRedeSociais('linkedin')}/>
          </TouchableOpacity>
        </View>
      </View>

      <Card titulo='Experiência Profissional'>
        <Text style={style.card_content_text}>SONDA</Text>
        <Text style={style.card_content_text}>iPremios</Text>
        <Text style={style.card_content_text}>FUNDEP</Text>
      </Card>
      <Card titulo='Formação Acadêmica'>
        <Text style={style.card_content_text}>Sistemas para Internet</Text>
        <Text style={style.card_content_text}>Gestão da Tecnologia da Informação</Text>
      </Card>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
    page: {
      backgroundColor: '#E7E7E7',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container_cabecalho: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    foto: {
      width: 150,
      height: 150,
      borderRadius: 75
    },
    nome: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10
    },
    funcao: {
      color: '#939393',
      marginBottom: 10
    },
    rede_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '70%',
      marginTop: 20,
      paddingLeft: 20
    },
    card_content_text:{
      color: '#939393',
      marginBottom: 10
    }
});

export default App;