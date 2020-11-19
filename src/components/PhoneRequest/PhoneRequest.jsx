import React from 'react';
import styles from './PhoneRequest.module.sass';

let PhoneRequest = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(<>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>);
};

export default PhoneRequest;