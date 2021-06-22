import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class Inputs extends Component {
  state = {isFocused: false};
  onFocusChange = () => {
    this.setState({isFocused: true});
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Input
          placeholder={this.props.name}
          placeholderTextColor="white"
          style={{color: 'white'}}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          secureTextEntry={this.props.pass}
          onChangeText={this.props.handleText}
          leftIcon={
            <Icon
              name={this.props.icon}
              size={20}
              color={this.props.iconColor}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 45,
    marginVertical: 8,
    borderColor: 'white',
    // borderWidth: 1,
  },
});

export default Inputs;
