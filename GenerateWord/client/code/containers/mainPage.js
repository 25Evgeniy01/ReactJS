import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {btnSettingsLines} from "../actions";
import {sentMessage} from "../websocket/ws";


class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    checkLetter(letter) {
        let aArray = 'aeijouy'.split('');
        let bArray = 'bcdfghklmnprqstvwxz'.split('');
        let returnVar;
        aArray.map((value, index) => {
            if (letter === value) returnVar = 1;
        });
        bArray.map((value, index) => {
            if (letter === value) returnVar = 0;
        });
        return returnVar;
    }

    refactoringWords() {

        let idLabel = document.getElementById('labelRefactor');
        idLabel.innerHTML = '';
        let newArr1 = [];
        let newArr2 = [];


        for (let i = 0; i < this.newArr.length; i++) {
            newArr1 = []; newArr2 = [];
            let array = this.newArr[i].split('');
            array.map((value, index) => {
                if (this.checkLetter(value) === this.checkLetter(array[index+1])) {
                    newArr2.push(value);
                } else {
                    newArr1.push(value)
                }
            });
            let plus = 0;

            newArr2.map((value, index) => {
                plus += this.checkLetter(value);
            });
            if (plus !== 0 && plus !== newArr2.length) {
                console.log('делаем проверку');
            }

            idLabel.innerHTML += `<br/>${newArr1.concat(newArr2).join('')}`;
        }

    }

    generationWords() {
        let idLabel = document.getElementById('label');
        let arrWords = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let arrNew;
        this.newArr = [];
        idLabel.innerHTML = '';
        for (let i = 0; i < this.props.settingLines.lines; i++) {
            arrNew = arrWords.sort(() => {
                return Math.random() - 0.5
            });
            this.newArr.push(arrNew.join('').substr(0, this.props.settingLines.countWords));

            idLabel.innerHTML += `<br/>${arrNew.join('').substr(0, this.props.settingLines.countWords)}`;
        }

    }

    saveGeneration() {
        let obj = {
            type: 'SAVE_GENERATION',
            data: this.newArr
        };

        sentMessage(JSON.stringify(obj));
    }

    getGeneration() {
        let obj = {
            type: 'GET_GENERATION',
            data: null
        };

        sentMessage(JSON.stringify(obj));
    }


    render () {
        return (
            <div>
                <div className={'row'} style={{marginTop: '5em'}}>
                    <div className={'col-md-4 text-center'} style={{fontWeight: '900'}}>
                        <button className={'btn btn-success'} onClick={() => this.generationWords()}>Generation</button><br/><br/>
                        <button className={'btn btn-danger'} onClick={() => this.saveGeneration()}>Save</button><br/><br/>
                        <button className={'btn btn-primary'} onClick={() => this.getGeneration()}>Restore</button>
                    </div>
                    <div className={'col-md-2'}>
                        <div className={'row'}> Settings </div>
                        <br/>
                        <div className={'row'}> Words </div>
                        <div className={'row'}>
                            <button className={'btn'} onClick={() => this.props.btnSettingsLines('countWords', 0)}>-</button>
                            {this.props.settingLines.countWords}
                            <button className={'btn'} onClick={() => this.props.btnSettingsLines('countWords', 1)}>+</button>
                        </div>
                        <br/>
                        <div className={'row'}> Lines </div>
                        <div className={'row'}>
                            <button className={'btn'} onClick={() => this.props.btnSettingsLines('lines', 0)}>-</button>
                            {this.props.settingLines.lines}
                            <button className={'btn'} onClick={() => this.props.btnSettingsLines('lines', 1)}>+</button>
                        </div>
                    </div>
                    <div className={'col-md-5 text-center border border-primary'} id={'label'}>

                    </div>
                    <div className={'col-md-1'}> </div>
                </div>

                <div className={'row'} style={{marginTop: '5em'}}>
                    <div className={'col-md-4 text-center'} style={{fontWeight: '900'}}>
                        <button className={'btn btn-success'} onClick={() => this.refactoringWords()}>Refactor</button><br/><br/>
                        <button className={'btn btn-danger'}>Save</button><br/><br/>
                        <button className={'btn btn-primary'}>Restore</button>
                    </div>
                    <div className={'col-md-2'}>

                    </div>
                    <div className={'col-md-5 text-center border border-primary'} id={'labelRefactor'}>

                    </div>
                    <div className={'col-md-1'}> </div>
                </div>


            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        settingLines: state.settingsLine,
    };
}

function matchDispatchToProps (dispatch) { //reserveReactName
    return bindActionCreators({btnSettingsLines: btnSettingsLines}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MainPage);