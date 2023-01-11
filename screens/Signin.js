import { View,Text,ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import { SafeArea } from '../Utils/safearea';
import { Theme } from '../Utils/Theme';
import { Button,TextInput } from "react-native-paper";


export function Signin () {
    return (
    <SafeArea>
        <ScrollView>
                <Text style={styles.intro}>Please Sign in to continue</Text>
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
                    placeholder='Email Address'
                    mode='outlined'
                    outlineColor={Theme.colors.maroon300}
                    activeOutlineColor={Theme.colors.maroon500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address' />

                    <TextInput
                    placeholder='Password'
                    mode='outlined'
                    outlineColor={Theme.colors.maroon300}
                    activeOutlineColor={Theme.colors.maroon500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    secureTextEntry={true} />

                  
                    <TouchableOpacity style={styles.sign}> 
                        <Button
                            mode="contained"
                            color={Theme.colors.maroon700} contentStyle={{paddingVertical:Theme.sizes[3]}}>Sign In
                        </Button>
                    </TouchableOpacity>
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
        fontSize:Theme.fonts.fontSizePoint.h4,
        color:'#fff',
        borderRadius:10,
        borderWidth:3,
        borderColor:Theme.colors.maroon700,
        textAlign:'center',
        backgroundColor:Theme.colors.maroon700  
    },
    form:{
        marginTop:Theme.sizes[5],
    },
     sign:{
        marginVertical:20,
     },  
    

})