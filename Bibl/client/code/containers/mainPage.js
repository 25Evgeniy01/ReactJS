import React, {Component} from 'react';
import { FormErrors } from './formErrors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            formErrors: {firstName: '', lastName: ''},
            fNameValid: false,
            lNameValid: false,
            formValid: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let fNameValid = this.state.fNameValid;
        let lNameValid = this.state.lNameValid;
        switch(fieldName) {
            case 'firstName':
                console.log(typeof value);
                fNameValid = typeof value === "string";
                fieldValidationErrors.firstName = fNameValid ? '' : ' is invalid';
                break;
            case 'lastName':
                lNameValid = typeof value === "string";
                fieldValidationErrors.lastName = lNameValid ? '': ' is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            fNameValid: fNameValid,
            lNameValid: lNameValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.fNameValid && this.state.lNameValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render () {
        return (
            <div>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                    </div>
                    <div className={'col-md-4'}>
                        <form role={`form`}>
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                                <input type={'text'} className={'form-control'} id={'firstName'}
                                       name={'firstName'}
                                       placeholder={'FirstName'}
                                       value={this.state.firstName}
                                       onChange={this.handleUserInput} />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                            <input type={'text'} className={'form-control'} id={'lastName'}
                                       name={'lastName'}
                                       placeholder={'LastName'}
                                       value={this.state.lastName}
                                       onChange={this.handleUserInput} />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                                <div className={'radio-inline'}>
                                    <label>Male <input type={'radio'} className={'form-control'} id={'lastName'} placeholder={'Male'}/></label>
                                    <label>Female <input type={'radio'} className={'form-control'} id={'lastName'} placeholder={'Female'}/></label>
                                </div>
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                                <input type={'tel'} className={'form-control'} id={'firstName'} placeholder={'Phone'}/>
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                                <input type={'number'} className={'form-control'} id={'firstName'} placeholder={'Age'}/>
                            </div>
                            <button type={'button'} className={'btn btn-success'} disabled={!this.state.formValid}>Save</button>
                        </form>
                    </div>
                    <div className={'col-md-4'}>
                    </div>
                </div> <br/>
                <div className={'row'}>
                    <div className={'col-md-1'}>
                    </div>
                    <div className={'col-md-10'}>
                        <table className={'table table-stripped'}>
                            <thead>
                            <tr className={'active'}>
                                <th>Number</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12312</td>
                                    <td>fadsaf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'col-md-1'}>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage;