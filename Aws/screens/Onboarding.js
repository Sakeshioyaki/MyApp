import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';
import argonTheme from '../constants/Theme';
import Images from '../constants/Images';

const {height, width} = Dimensions.get('screen');

class Onboarding extends React.Component {
  render() {
    const {navigation} = this.props;
    console.log(this.props);

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{height, width, zIndex: 1}}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{zIndex: 2}}>
            <Block style={styles.title}>
              <Block>
                <Text color="white" size={60}>
                  Litter
                </Text>
              </Block>
              <Block>
                <Text color="white" size={60}>
                  Do you know
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="white" size={16}>
                  Lyrics of your favorite song
                </Text>
              </Block>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate('Login')}
                textStyle={{color: argonTheme.COLORS.BLACK}}>
                <Text bold h5>
                  Login
                </Text>
              </Button>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate('SignUp')}
                textStyle={{color: argonTheme.COLORS.BLACK}}>
                <Text bold h5>
                  SignUp
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop: '-5%',
  },
  subTitle: {
    marginTop: 20,
  },
});

export default Onboarding;
