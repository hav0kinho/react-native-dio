import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const githubColor = '#010409';
const githubFontColor = '#C9D1D9';
const githubDarkFontColor = '#4F565E';
const githubImageProfile = 'https://avatars.githubusercontent.com/u/68474584?s=400&u=1882d6f66cff376323c0e1e971fb08b5cc2cee57&v=4';


const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={githubColor} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de Ruallyson Felype"
          style={style.avatar}
          source={{uri: githubImageProfile}}
        />
        <Text style={[style.defaultText, style.name]}>Ruallyson Felype</Text>
        <Text style={[style.defaultText, style.nickname]}>hav0kinho</Text>
        <Text style={[style.defaultText, style.description]}>
          Estudante de Licenciatura em Computação | Programador Web | Front-end com conhecimentos em Back-end | Amante de Astronomia | Editor de Vídeos | Procurando Estágio
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: githubColor,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: githubFontColor,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: githubDarkFontColor,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
