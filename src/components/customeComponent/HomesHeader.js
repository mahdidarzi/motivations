import React from 'react';
import {
    View,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
    const { HomeStyles,marginLeft, NavigateToCat, NavigateToRemindr, NavigateToDrawr, NavigateToThem } = props;
    return (
        <Animated.View 
        style={{ flexDirection: 'row-reverse', borderWidth: 0, borderColor: 'red', height: '10%', alignItems: 'center', }}>
            <View
                style={HomeStyles.headerContainerVie}>
                <TouchableOpacity style={HomeStyles.touchBuffer}
                    onPress={NavigateToCat}>
                    <Ionicons
                        style={HomeStyles.ICONBuffer}
                        size={35} name="logo-buffer"
                        color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.touchbrush}
                    onPress={NavigateToThem}>
                    <Ionicons
                        style={HomeStyles.Iconbrush}
                        size={35}
                        name="ios-brush"
                        color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={HomeStyles.touchbrush}
                    onPress={NavigateToRemindr}>
                    <Ionicons
                        style={HomeStyles.Iconnotifications}
                        size={35}
                        name="ios-notifications-outline"
                        color='white' />
                </TouchableOpacity>
            </View>
            <View style={HomeStyles.shareVU}>
                <View style={{ width: '50%', borderWidth: 0, borderColor: 'red ', marginLeft: '12.5%' }}>
                    <Animated.View style={[HomeStyles.AniViewlistIcon, { marginLeft: marginLeft }]}>
                        <TouchableOpacity
                            style={[HomeStyles.iconTouchlistIcon],{width:50}}
                            onPress={NavigateToDrawr}>
                            <Ionicons
                                style={HomeStyles.iconTouchlistIcon}
                                size={35}
                                name='ios-list'
                                color='white' />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </Animated.View>
    )
}
export default Header;