import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../components/Card';
import {Block, theme} from 'galio-framework';
import {articles} from '../constants';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default class MyArticles extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        {/* <Text>
        Id: {JSON.stringify(this.props.route.params.id)}
        </Text>
        <Text>
        song: {JSON.stringify(this.props.route.params.song)}
        </Text> */}
        <Block flex>
          <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card item={articles[1]} style={{marginRight: theme.SIZES.BASE}} />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Block flex row>
            <Card
              item={articles[5]}
              full
              style={{marginRight: theme.SIZES.BASE}}
            />
            <Card item={articles[4]} full />
          </Block>
          <Card item={articles[6]} />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
        {console.log('huhuhuhuko' + this.props.mee)}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
