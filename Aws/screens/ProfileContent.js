import React from 'react';
import {ImageBackground, Image, StyleSheet, Dimensions} from 'react-native';
import {Block, Text, theme, Button} from 'galio-framework';
import {Images, argonTheme} from '../constants';

import {DrawerContentScrollView} from '@react-navigation/drawer';

const {height, width} = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const widthDra = width * 0.8;

export default function ProfileContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Block flex>
        <ImageBackground
          source={Images.DrawImage}
          style={{height, widthDra, zIndex: 1}}>
          <Block flex style={styles.profileCard}>
            <Block middle style={styles.avatarContainer}>
              <Image source={Images.ProfilePicture} style={styles.avatar} />
            </Block>
            <Block middle style={styles.nameInfo}>
              <Text bold size={20} color="#32325D">
                Sakeshioyaki
              </Text>
              <Text size={16} color="#32325D" style={{marginTop: 10}}>
                Ha Noi, Viet Nam
              </Text>
            </Block>
            <Block style={styles.info}>
              <Block
                middle
                row
                space="evenly"
                style={{marginTop: 20, paddingBottom: 24}}>
                <Button small style={{backgroundColor: argonTheme.COLORS.INFO}}>
                  CONNECT
                </Button>
                <Button
                  small
                  style={{backgroundColor: argonTheme.COLORS.DEFAULT}}>
                  MESSAGE
                </Button>
              </Block>
              <Block row space="between">
                <Block middle>
                  <Text
                    bold
                    size={18}
                    color="#525F7F"
                    style={{marginBottom: 4}}>
                    2K
                  </Text>
                  <Text size={12} color={argonTheme.COLORS.TEXT}>
                    Follow
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    color="#525F7F"
                    size={18}
                    style={{marginBottom: 4}}>
                    10
                  </Text>
                  <Text size={12} color={argonTheme.COLORS.TEXT}>
                    Post
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    color="#525F7F"
                    size={18}
                    style={{marginBottom: 4}}>
                    89
                  </Text>
                  <Text size={12} color={argonTheme.COLORS.TEXT}>
                    Follower
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block flex>
              <Block middle style={{marginTop: 30, marginBottom: 16}}>
                <Block style={styles.divider} />
              </Block>
              <Block middle />
              <Block row space="between" />
              <Block style={{paddingBottom: 20}} />
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 10,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width * 0.8,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -50,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 38,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
});
