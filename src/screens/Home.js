import React, { Component } from 'react'
import {
    Text,
    View,
    Animated,
    I18nManager,
    ImageBackground,
    StatusBar,
} from 'react-native';
import Header from '../components/customeComponent/HomesHeader';
import Footer from '../components/customeComponent/HomesFooter';
import Carousel from 'react-native-snap-carousel';
import { openDatabase } from 'react-native-sqlite-storage';
import Modal from "react-native-modal";
import { HomeStyles } from '../assetes/HomeStyles';
let db = openDatabase({ name: "test", createFromLocation: "~test.db" }, this.okCallback, this.errorCallback);
I18nManager.forceRTL(false);
import { screenW } from '../helper/Global'
export default class Home extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.animatedWidth = new Animated.Value(0);
        this.animatedMarginLeft = new Animated.Value(-screenW);
        this.state = {
            category: 2,
            currentIndex: 0,
            isModalVisible: false,
            visibleText: false,
            test: [],
        }
    }
    componentDidMount() {
        this.getData().then(() => {
            setTimeout(() => {
                this.animatedBox();
            }, 400);
        });
    }
    getData = async () => {
        const { category } = this.state;
        console.log('category', category)
        console.log('db :  ', db)
        await db.transaction(async (tx) => {
            console.log('tx: ', tx)
            try {
                let quoteArray = [];
                await tx.executeSql('SELECT * FROM test WHERE category = ?', [category], (tx, results) => {
                    console.log("Query completed");
                    var len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        quoteArray.push(results.rows.item(i));
                    }
                    this.setState({ test: quoteArray })
                    console.log('this.state.test')
                    console.log(this.state.test)
                });
            } catch (error) {
                console.log('error c    : ', error)
            }
        });
    }
    okCallback = () => {
        console.log('success :  ')
    }
    errorCallback = (error) => {
        console.log('error :  ', error)
    }
    animatedBox = () => {
        Animated.spring(this.animatedWidth, {
            toValue: screenW,
        }).start();
        Animated.spring(this.animatedMarginLeft, {
            toValue: 0,
        }).start();
    }
    like = () => {
        // console.log('db :  ', db)
        db.transaction(async (tx) => {
            // console.log('tx: ', tx)
            try {
                await tx.executeSql('UPDATE test set isfave=? WHERE id=?', [1, this.state.currentIndex + 1], (tx, results) => {
                    console.log("Query completed");
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        this.getData();
                        // console.log('Success', 'User updated successfully');
                        console.log(this.state.test)
                        // this.getData();
                    }
                });
            } catch (error) {
                console.log('error c    : ', error)
            }
        });
    }
    flatRenItem = ({ item }) => {
        return (
            <View style={{
                borderWidth: 0, borderColor: 'red',
                justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100%'
            }}>
                <View style={{
                    width: '100%', height: '90%',
                    justifyContent: 'center', alignItems: 'center',
                    borderWidth: 0, borderColor: 'red'
                }}>
                    <Text style={{ fontSize: 25, color: 'white', width: '80%', fontFamily: 'IRANSansMobile', borderWidth: 0, borderColor: 'red', textAlign: 'center', }}>{item.quote}</Text>
                    <Text style={{ fontSize: 25, color: 'white', marginTop: 10, fontFamily: 'IRANSansMobile', borderWidth: 0, borderColor: 'red', textAlign: 'auto' }}>"{item.speaker}"</Text>
                </View>
            </View>
        )
    }
    onSnapToItem = (index) => {
        this.setState({ currentIndex: index })
    }
    showQuotes = () => {
        return (
            <Carousel
                onSnapToItem={this.onSnapToItem}
                ref={ref => this._carousel = ref}
                data={this.state.test}
                renderItem={this.flatRenItem}
                sliderWidth={screenW}
                itemWidth={screenW}
            />
        )
    }
    toggleModal = () => {
        this.setState((prevState) => {
            return {
                isModalVisible: !prevState.isModalVisible
            }
        })
    };
    onThemePress = async (catID) => {
        console.log('home : catID : ', catID);
       await this.state.category != catID ?[ this.setState({ category: catID }),await this.getData()] :null 
        console.log('home : category : ', this.state.category)
 
    }
    render() {
        return (
            <View style={HomeStyles.container}>
                <StatusBar backgroundColor="black" />
                <Animated.View style={{ width: this.animatedWidth, height: '100%' }}>
                    <ImageBackground source={require('../assetes/images/stars.jpg')}
                        style={{ width: '100%', height: '100%' }}>
                        <Header
                            HomeStyles={HomeStyles}
                            NavigateToCat={this.NavigateToCat}
                            NavigateToDrawr={this.NavigateToDrawr}
                            NavigateToThem={this.NavigateToThem}
                            onThemePress={this.onThemePress}
                            marginLeft={this.animatedMarginLeft} />
                        <Animated.View
                            style={[
                                { marginLeft: this.animatedMarginLeft, width: screenW }
                                , HomeStyles.AniShowQoute
                            ]}>
                            {this.showQuotes()}
                        </Animated.View>
                        <Footer
                            HomeStyles={HomeStyles}
                            toggleModal={this.toggleModal}
                            dislike={this.onDislikePress}
                            like={this.like} />
                    </ImageBackground>
                </Animated.View>
                <Modal
                    style={HomeStyles.modalView}
                    onBackdropPress={this.toggleModal}
                    onBackButtonPress={this.toggleModal}
                    animationIn='slideInUp'
                    style={{ bottom: 0, position: 'absolute' }}
                    isVisible={this.state.isModalVisible}
                    onSwipeComplete={this.toggleModal}
                >
                    <View style={HomeStyles.modalsView}>
                    </View>
                </Modal >
            </View >
        )
    }
    onDislikePress = () => {
        this._carousel.snapToNext();
    }
    NavigateToCat = () => {
        this.props.navigation.navigate('Categoty', { onThemePress: this.onThemePress })
    }
    NavigateToRemindr = () => {
        this.props.navigation.navigate('Reminder')
    }
    NavigateToDrawr = () => {
        this.props.navigation.openDrawer()
    }
    NavigateToThem = () => {
        this.props.navigation.navigate('Them')
    }
}