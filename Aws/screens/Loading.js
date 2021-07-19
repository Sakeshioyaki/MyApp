import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import animation from '../assets/animation';

const styles = StyleSheet.create({
  containLoading: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: 250,
    height: 250,
  },
});

const Loading = () => {
  const showLoadingScreen = useSelector(
    state => state.common.showLoadingScreen,
  );
  return (
    <Modal visible={showLoadingScreen} transparent={true}>
      <View style={styles.containLoading}>
        <LottieView
          style={styles.lottieView}
          source={animation.loading}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

export default React.memo(Loading);
