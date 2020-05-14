import React from 'react';
import Greetings from './Greetings';
import style from './style';

class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
    };

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;
        return !regex.test(name) ? "Name govno. Must have at least 3 letters and no spec. symbols!" : "";
    };

    onFirstNameBlur = () => {
        const firstName = this.state.firstName;
        const firstNameError = this.validateName(firstName);
        return this.setState({ firstNameError });
    }

    onLastNameBlur = () => {
        const lastName = this.state.lastName;
        const lastNameError = this.validateName(lastName);
        return this.setState({lastNameError});
    }

    onFirstNameChange = event => 
        this.setState({ firstName: event.target.value });

    onLastNameChange = event =>
        this.setState({ lastName: event.target.value });

    render() {
        const { firstName, firstNameError, lastName, lastNameError } = this.state;

        return (
            <div style={style.form}>
                <div style={style.inputGroup}>
                    <label>
                        First Name:
                        <input 
                            style={style.input}
                            type="text" 
                            name="firstName" 
                            onChange={this.onFirstNameChange} 
                            onBlur={this.onFirstNameBlur}
                        />
                        {firstNameError && <div style={style.error}>{firstNameError}</div>}
                        
                    </label>
                </div>
                
                <div style={style.inputGroup}>
                    <label>
                        Last Name:
                        <input 
                            style={style.input}
                            type="text" 
                            name="lastName" 
                            onChange={this.onLastNameChange} 
                            onBlur={this.onLastNameBlur}
                        />
                        {lastNameError && <div style={style.error}>{lastNameError}</div>}
                        
                    </label>
                </div>


                <Greetings firstName={firstName} lastName={lastName}/>
            </div>
        );
    }
}


export default SimpleForm