import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Submit = props => {
  const {email, password, press} = props;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: props.color}]}
      onPress={() => press(email, password)}>
      <Text style={styles.submitText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 40,
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default Submit;
