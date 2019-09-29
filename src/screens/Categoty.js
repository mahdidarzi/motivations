import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import HeaderTop from '../components/customeComponent/HeaderTop';
import CategorysCopmtent from '../components/customeComponent/CategorysCopntent';
export default class Categoty extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: 1,
            genandfav: [
                {
                    id: 1,
                    src: require('../assetes/images/category/generol.png'),
                    catID: 2,
                    type: 'عمومی',
                  
                },
                {
                    id: 2,
                    src: require('../assetes/images/category/favorite.png'),
                    catID: 1,
                    type: 'مورد علاقه',
                   
                },
            ],
            hardTimes: [
                {
                    id: 3,
                    src: require('../assetes/images/category/hardT1.png'),
                    catID: 3,
                    type: 'تنهایی',

                },
                {
                    id: 4,
                    src: require('../assetes/images/category/hardT3.png'),
                    catID: 5,
                    type: 'عدم تمرکز',

                },
                {
                    id: 5,
                    src: require('../assetes/images/category/hardT3.png'),
                    catID: 5,
                    type: 'عدم تمرکز',

                },
                {
                    id: 6,
                    src: require('../assetes/images/category/hardT4.png'),
                    catID: 6,
                    type: 'غرور',

                },
            ],
            inspire: [
                {
                    id: 7,
                    src: require('../assetes/images/category/inspire1.png'),
                },
                {
                    id: 8,
                    src: require('../assetes/images/category/inspire3.png'),
                },
                {
                    id: 9,
                    src: require('../assetes/images/category/inspire4.png'),
                },
                {
                    id: 10,
                    src: require('../assetes/images/category/inspire5.png'),
                },
            ]
        }
    }
    setIsActive = (id, catID) => {
        console.log('isActive : ', id)
        this.setState({ isActive: id });
        this.props.navigation.state.params.onThemePress(catID);
        this.props.navigation.goBack();
    }
    onThemePress = (catID) => {
        console.log('onThemePress', this.props.navigation.state.params)  
    }
    render() {
        return (
            <ScrollView style={{ borderWidth: 0, borderColor: 'red', height: '100%' }}>
                <View style={{ borderWidth: 1, borderColor: 'gray', height: 56, alignItems: 'flex-end' }}>
                    <View style={{ borderWidth: 0, borderColor: 'cyan', height: 56, justifyContent: 'center', width: '50%' }}>
                        <HeaderTop title='دسته بندی'
                            style={{
                                borderWidth: 0, borderColor: 'cyan', height: 56 / 1.5, fontSize: 25, width: '100%', marginRight: '20%', ...Platform.select({
                                    android: {
                                        fontFamily: 'IRANSans_Bold'
                                    }
                                })
                            }} />
                    </View>
                </View>
                <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>
                    <View style={{ borderWidth: 0, borderColor: 'black' }}>
                        <CategorysCopmtent
                            onThemePress={this.onThemePress}
                            setIsActive={this.setIsActive}
                            isActive={this.state.isActive}
                            images={this.state.genandfav} />
                    </View>
                    <RenderCat
                        setIsActive={this.setIsActive}
                        isActive={this.state.isActive}
                        onThemePress={this.onThemePress}
                        catList={this.state.hardTimes}
                        title='گذشتن از شرایط سخت' />
                    <RenderCat
                        onThemePress={this.onThemePress}
                        setIsActive={this.setIsActive}
                        isActive={this.state.isActive}
                        catList={this.state.inspire}
                        title='بدست اوردن هدف های خود' />
                </View>
            </ScrollView>
        )
    }
}
const RenderCat = (props) => {
    const { catList, title, onThemePress, setIsActive, isActive } = props;
    return (
        <View style={{ borderWidth: 0, borderColor: 'black', marginTop: 30 }}>
            <View style={{ borderWidth: 0, borderColor: 'red', width: '100%' }}>
                <HeaderTop style={{
                    borderWidth: 0, borderColor: 'black',
                    fontSize: 20, width: '98%',
                    ...Platform.select({
                        android: {
                            fontFamily: 'IRANSans_Bold'
                        }
                    })
                }} title={title} />
            </View>
            <CategorysCopmtent
                setIsActive={setIsActive}
                isActive={isActive}
                onThemePress={onThemePress}
                images={catList} />
        </View>
    )

}