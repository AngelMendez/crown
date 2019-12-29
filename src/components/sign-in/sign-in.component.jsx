import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignIn, emailSignIn } from '../../redux/user/user.actions';

const SignIn = ({ emailSignIn, googleSignIn }) =>  {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignIn(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput name="email" type="email" value={ email } handleChange={handleChange} label="email" required/>
                <FormInput name="password" type="password" value={ password } handleChange={handleChange} label="password" required/>
                <div className="buttons">
                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton type="button" onClick={ googleSignIn } isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignIn()),
    emailSignIn: (email, password) => dispatch(emailSignIn({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
