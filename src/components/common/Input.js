import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#4a4a4a"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#00a7bf'
  },
  textInput: {
    color: '#000',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    lineHeight: 18,
    flex: 1,
    textAlign: 'center'
  }
};

export { Input };
