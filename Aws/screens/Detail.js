import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import Images from '../constants/Images';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const Detail = () => {
    return (
        <Block
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
            <Block flex={1} >
                <ImageBackground
                    source={Images.Onboarding}
                    style={styles.profileContainer}
                    imageStyle={styles.profileBackground}
                >
                    <Block flex style={styles.profileCard}>
                        <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
                            <Block >
                                <Block middle >
                                    <Text
                                        style={{
                                            fontFamily: 'montserrat-bold',
                                            marginBottom :theme.SIZES.BASE/100,
                                            marginTop: theme.SIZES.BASE*3,
                                            fontWeight: '900',
                                            fontSize: 26,
                                            color: "white",
                                            fontSize: 40,
                                            width: width,
                                            textAlign: "center",
                                            backgroundColor: "#000000a0"
                                        }}
                                        color='#ffffff'
                                    >
                                        Weight of the world
                                    </Text>
                                </Block>
                                <Block style={styles.info}>
                                    <Block row space="around">

                                        <Block middle>
                                            <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
                                                Taylor ...
                                            </Text>
                                        </Block>

                                    </Block>
                                </Block>
                            </Block>

                        </Block>
                    </Block>
                </ImageBackground>
            </Block>
            <Block flex={3} style={{ padding: theme.SIZES.BASE}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block flex style={{ marginTop: 20 }}>
                        <Block middle>
                            <Text
                                style={{
                                    color: '#2c2c2c',
                                    fontWeight: 'bold',
                                    fontSize: 19,
                                    fontFamily: 'montserrat-bold',
                                    marginTop: 15,
                                    marginBottom: 30,
                                    zIndex: 2
                                }}
                            >
                                About me
                            </Text>
                            <Text
                                size={16}
                                muted
                                style={{
                                    textAlign: 'left',
                                    fontFamily: 'montserrat-regular',
                                    zIndex: 2,
                                    lineHeight: 25,
                                    color: 'black',
                                    paddingHorizontal: 15
                                }}
                            >
                                I feel like I'm losing hope{"\n"}
                                In my body and my soul{"\n"}
                                And the sky, it looks so ominous {"\n"}
                                And as time comes to a halt {"\n"}
                                Silence starts to overflow{"\n"}
                                My cries are inconspicuous{"\n"}
                                Tell me God, are you punishing me?{"\n"}
                                Is this the price I'm paying for my past mistakes?{"\n"}
                                This is my redemption song{"\n"}
                                I need you more than ever right now{"\n"}
                                Can you hear me now?{"\n"}
                                'Cause we're gonna shout it loud{"\n"}
                                Even if our words seem meaningless{"\n"}
                                It's like I'm carrying the weight of the world
                                I wish that someway, somehow
                                That I could save every one of us
                                But the truth is that I'm only one girl
                                Maybe if I keep believing my dreams will come to life
                                Come to life
                                After all the laughter fades
                                Signs of life all washed away
                                I can still, still feel a gentle breeze
                                No matter how hard I pray
                                Signs of warning still…
                            </Text>
                        </Block>
                        <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
                            <Text bold size={16} color="#2c2c2c" style={{ marginTop: 3 }}>
                                Album
                            </Text>
                            <Button
                                small
                                color="transparent"
                                textStyle={{ color: 'white', fontSize: 14 }}
                            >
                                View all
                            </Button>
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        </Block>


    )
}





const styles = StyleSheet.create({

    profileContainer: {
        flex : 0.5,
        width,
        height :height/3,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width,
        height: height * 0.2
    },

    info: {
        marginTop: 30,
        paddingHorizontal: 10,
        height: height * 0.8
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80
    },
    avatar: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 50,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
    social: {
        justifyContent: 'center'
    }
})

export default Detail;