import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    /*
    *useState: implementação de estado para componentes funcionais.
    * recebe um array com os parâmetros nome e função que manipula o valor.
    */
    const [numero, setNumero] = useState(0)


    function handleNumero(){
        const novo_numero = Math.floor(Math.random() * 10)
        setNumero(novo_numero)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}> 
                {numero}
            </Text>
            <TouchableOpacity style={style.botao} onPress = {handleNumero}>
                <Text>
                    Gerar número
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  botao: {
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default App;
