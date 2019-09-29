import { View, FlatList, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
import React, { } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class CategorysCopmtent extends React.Component {
    render() {
        const { images, onThemePress, isActive } = this.props;
        return (
            <View style={{ borderWidth: 0, borderColor: 'cyan', width: '100%' }}>
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{ margin: 3, alignItems: 'center' }}
                    scrollEnabled={true}
                    data={images}
                    keyExtractor={this.keyExtractorCat}
                    renderItem={this.renderCategoryItem}
                />
            </View>
        )
    }


    keyExtractorCat = (item) => item.id.toString();


    setIsActive = (id, catID) => () => {
        this.props.setIsActive(id, catID)

    }

    renderCategoryItem = ({ item }) => {
        const { onThemePress } = this.props;
        return (
            <TouchableOpacity
                onPress={this.setIsActive(item.id, item.catID)}

                style={{ margin: 3, borderRadius: 5, overflow: 'hidden' }}>
                <ImageBackground key={item.id} source={item.src}
                    style={{ width: (Dimensions.get('window').width / 2) - 9, height: 100 }} >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 25,
                            width: '50%',
                            marginLeft: '40%',
                            borderWidth: 0,
                            borderColor: 'red'
                        }}>{item.type}</Text>
                    {this.props.isActive == item.id ?
                        <View style={{justifyContent:'center',alignItems:'center',width:'100%',marginTop: '10%',}}>
                            <View
                                style={{
                                    backgroundColor: 'white'
                                    , borderRadius: 7,
                                    width: '25%',
                                    height: '45%',
                                    marginLeft: '70%',  
                                    // justifyContent: 'center',
                                    // alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: 'blue',
                                }}>
                                <View 
                                style={{ borderWidth: 0,
                                 borderColor: 'red', 
                                 height: '100%',
                                 padding:0,
                                 flexDirection:'row',
                                 width:'100%' ,
                                 alignItems:'center',
                                 justifyContent:'center'
                                }}>
                                    <Ionicons
                                        style={{  }}
                                        size={35}
                                        name='ios-checkmark' />
                                </View>
                            </View>
                        </View>
                        : null}

                </ImageBackground>
            </TouchableOpacity>
        )
    }
}
// export default CategorysCopmtent;