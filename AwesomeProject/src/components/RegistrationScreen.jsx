import {StyleSheet, View, Text, TextInput } from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>Руєстріція</Text>
      <TextInput keyboardType="text" placeholder="Логін"/>
      <TextInput keyboardType="email-address" placeholder="Адреса електронної пошти"/>
      <TextInput keyboardType="password" placeholder="Пароль"/>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    marginTop: '100%',
    paddingTop: 92,
    backgroundColor: 'red',
  },
})

export default RegistrationScreen;
