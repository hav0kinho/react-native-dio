import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const githubColor = '#010409';
const githubFontColor = '#C9D1D9';
const githubDarkFontColor = '#4F565E';
const githubImageProfile =
  'https://avatars.githubusercontent.com/u/68474584?s=400&u=1882d6f66cff376323c0e1e971fb08b5cc2cee57&v=4';
const urlToMyGithub = 'https://github.com/hav0kinho';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={githubColor} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de Ruallyson Felype"
          style={style.avatar}
          source={{uri: githubImageProfile}}
        />
        <Text
          accessibilityLabel="Nome: Ruallyson Felype"
          style={[style.defaultText, style.name]}>
          Ruallyson Felype
        </Text>
        <Text
          accessibilityLabel="Nickname: hav0kinho"
          style={[style.defaultText, style.nickname]}>
          hav0kinho
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Licenciatura em Computação | Programador Web | Front-end
          com conhecimentos em Back-end | Amante de Astronomia | Editor de
          Vídeos | Procurando Estágio"
          style={[style.defaultText, style.description]}>
          Estudante de Licenciatura em Computação | Programador Web | Front-end
          com conhecimentos em Back-end | Amante de Astronomia | Editor de
          Vídeos | Procurando Estágio
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Gitgub
            </Text>
          </View>
        </Pressable>
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
  button: {
    marginTop: 20,
    backgroundColor: githubDarkFontColor,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
