import React, { useState, useEffect} from 'react';
import {ImageBackground, View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';
import Account from '../components/Account';
import SignUp from './SignUp';
import Card from '../components/Card';
import { color } from 'react-native-reanimated';
import { Block, theme} from 'galio-framework';
import {articles} from '../constants';
import {Articles} from '../screens';
import Images from '../constants/Images';


const { width, height } = Dimensions.get('screen');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }
    
    componentDidMount() {
        fetch('http://192.168.71.105:8001/login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })    
        .then((response) => response.json())
        .then((json) => {
            this.setState({ data: json.movies });
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState({ isLoading: false });
        });
    }
    

    renderArticles = () => {
        const { navigation } = this.props;
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}>
                    <Block flex>
                    <Card item={articles[0]} horizontal  />
                    <Block flex row>
                        <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
                        <Card item={articles[2]} />
                    </Block>
                    <Card item={articles[3]} horizontal />
                    <Block flex row>
                        <Card item={articles[5]}  full style={{ marginRight: theme.SIZES.BASE }} />
                        <Card item={articles[4]} full />
                    </Block>
                    <Card item={articles[6]} />
                    </Block>
            {/* <Text>
            Id: {JSON.stringify(this.props.route.params.id)}
            </Text>
            <Text>
            song: {JSON.stringify(this.props.route.params.song)}
            </Text> */}
            </ScrollView>
        )
    }   

    render() {
        return (
            <Block flex center style={styles.home}>
            {this.renderArticles()}
            {console.log('huhuhuhuko'+this.props.mee)}
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
  
