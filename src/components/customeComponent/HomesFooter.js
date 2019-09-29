import {
    View,
    Animated,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Footer = (props) => {
    const { toggleModal, dislike, like, HomeStyles } = props;
    return (
        <View style={HomeStyles.footerMAinVu}>
            <View
                style={HomeStyles.footerContainVu}>
                <TouchableOpacity style={HomeStyles.emptyHeartTouch} onPress={like}>
                    <Ionicons style={HomeStyles.emptyHeartIcon} size={35} name="ios-heart-empty" color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyles.thumbsTouch} onPress={dislike}>
                    <Ionicons style={HomeStyles.thumbsIcon} size={35} name="ios-thumbs-down" color='white' />
                </TouchableOpacity>
            </View>
            <View style={HomeStyles.shareVU}>
                <View style={{ width: '50%', borderWidth: 0, borderColor: 'red ', marginLeft: '12.5%' }}>
                    <Animated.View style={[HomeStyles.AniViewlistIcon, { marginLeft: this.animatedMarginLeft }]}>
                        <TouchableOpacity style={[HomeStyles.iconTouchlistIcon], { width: 50 }} onPress={toggleModal}>
                            <Ionicons style={HomeStyles.iconTouchlistIcon} size={35} name='ios-share' color='white' />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}
export default Footer;