// import { View,Text,Image,StyleSheet } from "react-native";
// import { SafeArea } from '../Utils/safearea';
// import { Theme } from "../Utils/Theme";
// import { LinearGradient } from "react-native-svg";



// export function Profile () {
//     return(

//         <SafeArea>
//                 <View style={styles.container}>
//                     <View style={styles.header}>
//                         <View style={styles.profile}>
//                             <LinearGradient colors={['rgb(229,255,249s','transparent']} style={styles.rome}>
//                                 <Image source={require('../assets/profile-pix.jpg')} 
//                                 style={styles.profileImgs}/>
//                             </LinearGradient>
//                         </View>
//                         <View style={styles.lon}>
//                             <Text style={styles.falo}>Jane Harrison</Text>
//                             <Text style={styles.den}>Dawn</Text>
//                         </View>
//                         <View>

//                         </View>
//                         <View style={styles.thin}>
//                             <Text style={styles.fran}>Software-Developer</Text>
//                         </View>
//                         <View style={styles.pet}>
//                             <Text style={styles.follow}>Follower</Text>
//                             <Text style={styles.fellow}>Following</Text>
//                             <Text style={styles.poste}>Post</Text>
//                         </View>
//                         <View style={styles.fren}>
//                             <Text style={styles.num1}>567</Text>
//                             <Text style={styles.num2}>889</Text>
//                             <Text style={styles.num3}>458</Text>
//                         </View>
//                         <View style={styles.ralf}>
//                             <Text style={styles.rane}>
//                                Jane Harrison Dawn was born in the year(6 may 1994)She is a Software Developer and a web designer.
//                                She learnt how to code at early code in the year (2 october 2009) and now she works at facebook
//                             </Text>
//                         </View>
//                     </View>
//                 </View>
//         </SafeArea>
//     )
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'rgb(229,255,249)',
        
//     },
//     header:{
//         flex:9
//     },
//     profile:{
//         flex:12,
//         flexDirection:'row-reverse',
//         justifyContent:'space-between',
//         alignContent:'space-between',

//     },
//     rome:{
//         position:'relative',
//         right:'0.1',
//         left:'0.1',
//         top:'0.2',
//         height:400
        
//     },
//     profileImgs:{
//         width:250,
//         height:300,
//         borderRadius:50,
//         flexDirection:'coloum',
//         justifyContent:'flex-start',
//         alignContent:'flex-start'
           

//     },
//     lon:{
//         flex:4,
        
//     },
//     falo:{
//         fontSize:Theme.sizes[4],
//         fontStyle:'italic',
//         fontWeight:'bold'
        
//     },
//     den:{
//         fontSize:Theme.sizes[4],
//         fontStyle:'italic',
//         fontWeight:'bold'
//     },
//     thin:{
//         flex:2.5
//     },
//     fran:{
//         fontSize:Theme.sizes[4]
//     },
//     pet:{
//         flex:0.9,
//          flexDirection:'row',
//         justifyContent:'space-around',
//     },
//     follow:{
//         fontSize:Theme.sizes[3],
//         fontStyle:'italic',
//         color:'grey'

//     },
//     fellow:{
//         fontSize:Theme.sizes[3],
//         fontStyle:'italic',
//         color:'grey'

//     },
//     poste:{
//         fontSize:Theme.sizes[3],
//         fontStyle:'italic',
//         color:'grey'
        

//     },

//     fren:{
//         flex:4,
//         flexDirection:'row',
//         justifyContent:'space-around',
//     },
//     num1:{
//         fontSize:Theme.sizes[4],
//         fontWeight:'bold',
        

//     },
//     num2:{
//         fontSize:Theme.sizes[4],
//         fontWeight:'bold',
        

//     },
//     num3:{
//         fontSize:Theme.sizes[4],
//         fontWeight:'bold',
        

//     },
//     ralf:{
//         flex:4.6
//     },
//     rane:{
//       fontSize:18,
//         fontStyle:'italic',
//         color:'grey'

//     }
// })