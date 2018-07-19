import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const buttonStyles = Object.assign({}, styles.button, props.style)
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={buttonStyles}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    lineHeight: 17,
    letterSpacing: 0.5,
    width: 260,
    height: 20
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#00a7bf',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15
  }
};

export { Button };
