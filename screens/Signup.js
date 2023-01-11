import { useState,useEffect,useCallback } from 'react';
import { View,Text,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '../Utils/Theme';
import { SafeArea } from '../Utils/safearea';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Button, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { object } from 'yup/lib/locale';

const formRules = yup.object({
  lastName:yup.string('invalid characters')
  .min(2,'must be at least 2 characters')
  .max(32,'not more than 32 characters')
  .required('This is a compulsory field'),

  firstName:yup.string('invalid characters')
  .min(2,'must be at least 2 characters')
  .max(32,'not more than 32 characters')
  .required('This is a compulsory field'),

  phoneNumber:yup.string(11,'must not be up to 11 numbers')
  .max(17,'must not be more than 17 number')
  .required('This is a compulsory field'),

  email:yup.string('invalid characters')
  .email('must not be an email')
  .max(60,'not more than 32 characters')
  .required('This is a compulsory field'),

  password:yup.string('invalid characters')
  .min(8,'must be up to 8 numbers')
  .required('This is a compulsory field')
  .oneOf([yup.ref('passwordConfirmation'),null],'password must match')

})

export function Signup ({navigation}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({Righteous_400Regular});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
      <SafeArea>
      
          <ScrollView>
            <Text style={styles.brand}>Thrift</Text>
            <Text style={styles.intro}>Create an account to join 
            Thrift cooperative society and enjoy tons of benefits</Text>
            <View style={styles.alreadyHaveAccount}>
                <View style={styles.info}>
                <Text style={styles.infoTitle}>Already Have an Account?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Sign in')}>
                <FontAwesomeIcon icon={faCircleArrowRight}
                color ={Theme.colors.purple700}
                size={Theme.sizes[5]}/>
                </TouchableOpacity>
            </View>

                <Formik
                initialValues={{
                  lastName:'',
                  firstName:'',
                  phoneNumber:'',
                  email:'',
                  password:'',
                  passwordConfirmation:''
                }}
                onSubmit={(values,action) => {

                  action.resetForm();//clear everything in the inputs
                }}
                
                validationSchema={formRules}>
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                      return (
                    <View style={styles.form}>
                      <TextInput
                        placeholder='Last name'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}} 
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}/>
                        <Text style={{display:touched.lastName && errors.lastName ? 'flex' : 'none', color:'red'}}>
                          {touched.lastName && errors.lastName}
                        </Text>

                        <TextInput
                        placeholder='First name'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}} 
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('lastName')}
                        value={values.firstName}/>
                        <Text style={{display:touched.firstName && errors.firstName ? 'flex' : 'none', color:'red'}}>
                          {touched.firstName && errors.firstName}
                        </Text>

                        <TextInput
                        placeholder='Phone Number'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                        keyboardType='phone-pad'
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber} />
                         <Text style={{display:touched.phoneNumber && errors.phoneNumber ? 'flex' : 'none', color:'red'}}>
                          {touched.phoneNumber && errors.phoneNumber}
                        </Text>

                        

                        <TextInput
                        placeholder='Email Address'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                        keyboardType='email-address' 
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}/>
                         <Text style={{display:touched.email && errors.email ? 'flex' : 'none', color:'red'}}>
                          {touched.email && errors.email}
                        </Text>


                        <TextInput
                        placeholder='Create password'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                        secureTextEntry={true} 
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}/>
                         <Text style={{display:touched.password && errors.password ? 'flex' : 'none', color:'red'}}>
                          {touched.password && errors.password}
                        </Text>


                        <TextInput
                        placeholder='Confirm password'
                        mode='outlined'
                        outlineColor={Theme.colors.purple300}
                        activeOutlineColor={Theme.colors.purple500}
                        style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                        secureTextEntry={true} 
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        value={values.passwordConfirmation}/>

                      
                        <Button
                        mode="contained"
                        color={Theme.colors.purple700} contentStyle={{paddingVertical:Theme.sizes[3]}}
                        onPress={handleSubmit}>Create Account
                        </Button>
                      </View>
                      )
                    }}
            </Formik>

          </ScrollView>
      </SafeArea>
  )
}

const styles = StyleSheet.create({  
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'Righteous_400Regular',
        color:Theme.colors.purple700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderColor:Theme.colors.purple300,
        borderRadius:6,
        paddingVertical:Theme.sizes[2],
        marginTop:Theme.sizes[2]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5
    },
    form:{
        marginTop:Theme.sizes[2],
        
    },
})