import React, {useState} from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';

//icon
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyleFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    ButtonText,
    Colors,
    StyledButton,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../../components/style';

//Colors
const {brand,darkLight,primary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/img/logo.jpg_wh860.jpg')} />
                <PageTitle>Booking Care</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) =>
                    (<StyleFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="pkhao@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText >
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name='google' color={primary} size={25} />
                            <ButtonText google={true} >Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have a account already ?</ExtraText>
                            <TextLink>
                                <TextLinkContent>
                                    Signup
                                </TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyleFormArea>)
                    }
                </Formik>

            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon,isPassword, hidePassword,setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={ () => setHidePassword(!hidePassword)} >
                    <Ionicons name={hidePassword ? 'md-eye-off':'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;