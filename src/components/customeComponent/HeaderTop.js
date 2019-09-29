import { View, Text } from 'react-native';
import React, { } from 'react';
const HeaderTop = (props) => {
    const { title,style } = props;
    return (
       
        <Text style={style}>{title}</Text>
    )
}
export default HeaderTop;