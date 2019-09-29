import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Dimensions, I18nManager, ImageBackground, StatusBar, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
I18nManager.forceRTL(false);
const wS = Dimensions.get('window').width;
export default class HomePage extends Component {
   static navigationOptions = {
      header: null,
   };
   constructor(props) {
      super(props);
     
      this.animatedWidth = new Animated.Value(0);
      this.state = {
         visibleText:false,
         quoteArray: [
            {
               quoteText: 'لذت ببر اما قبلش به عواقبش فک کن',
               quotesWriter: '"اپیکور"',
               id: 1
            },
         ]
      }
   }

   animatedBox = () => {
      Animated.spring(this.animatedWidth, {
         toValue:wS ,
      }).start(()=> {
         this.setState({visibleText:true})
      })

   }
   flatRenItem = ({ item }) => {
      return (
         <View style = {{
            width : W, height : '100%',justifyContent : 'center', alignItems : 'center'}}>
          <Text style = {{fontSize : 30 ,width : '50%', fontFamily : 'IRANSansMobile'}}>{item.quoteText}</Text>
            
            <Text style = {{fontSize : 25, marginTop: 10, fontFamily : 'IRANSansMobile'}}>{item.quotesWriter}</Text> 
         </View>
      )

   }

   componentDidMount() {
      setTimeout(() => {
         this.animatedBox();
      }, 400);

   }

   render() {
      const animatedStyle = { width: this.animatedWidth, height: '100%' }
      return (

         <View style={styles.container}>
            <StatusBar backgroundColor="black" />
            <Animated.View style={[styles.box, animatedStyle]}>

               <View style={{ flex: 1 }}>

                  <ImageBackground source={require('../assetes/images/images.jpg')}
                     style={{ width: '100%', height: '100%' }}>
                     <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <View style={{ borderEndColor: 'black', borderWidth: 0 }}>

                        <View style={{ width: '100%', height: 56, backgroundColor: 'transparent', }}>
                           <View style={{ flex: 1 }}>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                 <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                                    <Ionicons style={{ right: -10 }} size={35} name="logo-buffer" color='white' />
                                    <Ionicons style={{ right: 20 }} size={35} name='ios-brush' color='white' />
                                    <Ionicons style={{ right: 30 }} size={35} name='ios-notifications-outline' color='white' />
                                 </View>
                                 <View style={{ flexDirection: 'row', right: 20, width: '50%', justifyContent: 'flex-end' }}>
                                    <Ionicons style={{ right: 10 }} size={35} name='ios-list' color='white' />
                                 </View>
                              </View>

                           </View>
                        </View>
                     </View>

                     <View style={{ borderWidth: 1, borderColor: 'black', width: '100%',flex:1,alignItems : 'center'}}>
                        <View style ={{width:'100%',height:'100%',alignSelf:'center'}}>
                        <FlatList
                           // ListEmptyComponent={() => this.state.show_spiner == 0 ? <Spinner /> : null}
                           contentContainerStyle={{flex:1, width:'100%',height:'100%',justifyContent:'center'}}
                           data={this.state.quoteArray}
                           keyExtractor={(item) => item.id.toString()}
                           renderItem={this.flatRenItem} />
                           </View>
                     </View>
                     <View style={{ borderEndColor: 'black', borderWidth: 0, width: '100%' }}>
                        <View style={{ width: '100%', height: 56, backgroundColor: 'transparent' }}>
                           <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
                              <View style={{ flexDirection: 'row' }}>
                                 <View style={{ width: '50%', flexDirection: 'row', margin: 5 }}>
                                    <Ionicons style={{ left: 10 }} size={35} name="ios-heart-empty" color='white' />
                                    <Ionicons style={{ left: 30 }} size={35} name="ios-thumbs-down" color='white' />
                                 </View>
                                 <View style={{ flexDirection: 'row', right: 20, width: '50%', justifyContent: 'flex-end' }}>
                                    <Ionicons style={{ right: 10 }} size={35} name='ios-share' color='white' />
                                 </View>
                              </View>

                           </View>
                        </View>

                     </View>
                     </View>
                  </ImageBackground>
               </View>
            </Animated.View>

         </View >
      )
   }
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
   },
   box: {
      width: '100%',
      height: '100%',
      backgroundColor: 'blue',
   }
})