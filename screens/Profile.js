import { View,StyleSheet,Text,Image } from 'react-native';
import { Theme } from '../Utils/Theme';
import { SafeArea } from '../Utils/safearea';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
export function Profile () {
         return (
             <SafeArea>
                 <View style={styles.head}>
                     <View style={styles.signature}>
                         {/* <Text style={styles.signatureText}>{userNames.fname}</Text> */}
                     </View>
                     <View style={styles.profileImage}>
                         <Image style={styles.profileImg} source={require('../assets/profile-pix.jpg')}/>
                     </View>
                 </View>
                 <View style={styles.body}>
                     {/* <Text style={styles.fullNames}>{userNames.fname} {userNames.lname}</Text> */}
                     {/* <View style={styles.verificationBox}>
                         <Text style={styles.verificationText}>Verified member</Text>
                         <FontAwesomeIcon 
                         icon={faCircleCheck}
                         color='#2192FF'
                         size={Theme.fonts.fontSizePoint.title}/>
                     </View> */}
                     <View style={styles.transactionHits}>
                         <View style={styles.hit}>
                             <Text style={styles.hitTitle}>Credits</Text>
                             <Text style={styles.hitvalue}>213</Text>
                         </View>
                         <View style={styles.hit}>
                             <Text style={styles.hitTitle}>Debits</Text>
                             <Text style={styles.hitvalue}>199</Text>
                         </View>
                         <View style={styles.hit}>
                             <Text style={styles.hitTitle}>Loans</Text>
                             <Text style={styles.hitvalue}>1</Text>
                         </View>
                     </View>
    
                     <Text style={styles.userStatement}>During summer holidays I have 
                     applied what I learned in classes by working for three years in 
                     an accounting firm. This has been a wonderful complement to my 
                     studies, as it has refreshed my perspective and taught me about 
                     the realities of a workplace such as this.</Text>
                 </View>
             </SafeArea>
         )
 }
   
     const styles = StyleSheet.create({
         head:{
             flex:3,
             flexDirection:'row'
         },
         body:{
             flex:3,
             paddingTop:Theme.sizes[4]
         },
         signature:{
             flex:2,
             justifyContent:'flex-end',
         },
         signatureText:{
             fontFamily:'PassionsConflict_400Regular',
             fontSize:Theme.fonts.fontSizePoint.h3
         },
         profileImage:{
             flex:4
         },
         profileImg:{
             width:'100%',
             height:'100%',
             borderRadius:10
         },
         fullNames:{
             fontSize:Theme.fonts.fontSizePoint.h4
         },
         verificationBox:{
             flexDirection:'row',
             alignItems:'center'
         },
         verificationText:{
             color:Theme.colors.gray200,
             fontSize:Theme.fonts.fontSizePoint.title,
             fontWeight:'bold',
             marginRight:Theme.sizes[2],
         },
         transactionHits:{
             marginVertical:Theme.sizes[4],
             flexDirection:'row',
             justifyContent:'space-between'
         },
         hitTitle:{
             color:Theme.colors.gray200,
             fontSize:Theme.fonts.fontSizePoint.h5,
             marginBottom:Theme.sizes[3]
         },
         hitvalue:{
             fontSize:Theme.fonts.fontSizePoint.h5,
         },
         userStatement:{
             fontSize:Theme.fonts.fontSizePoint.body
         }
     })
    
