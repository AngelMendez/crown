import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignIn, emailSignIn } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignIn } = this.props;
        const { email, password } = this.state;

        emailSignIn(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState( {[name]: value });
    }

    render() {
        const { googleSignIn } = this.props;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton type="button" onClick={ googleSignIn } isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignIn()),
    emailSignIn: (email, password) => dispatch(emailSignIn({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
