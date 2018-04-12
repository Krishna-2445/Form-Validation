import React, {Component} from 'react';
import './App.css';

import DemoGraphics from './components/DemoGraphics'
import AgreementSection from './components/AgreementSection'
import Biling from './components/Biling'
import MedicalUnderwriting from './components/MedicalUnderwriting'
import PlanDesign from './components/PlanDesign'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DemoGraphics: {
                firstName: '',
                lastName: '',
                address: '',
                state: '',
                zip: '',
                gender: '',
                birthDate: '',
                income: '',
                occupation: ''
            },
            Bill: {
                mode: '',
                modalPremium: '',
                renewalMonth: 1
            },
            Medical: {
                heightFeet: '',
                heightInch: '',
                weight: '',
                diabetes: false,
                isHospitized12M: false,
                missWork: false,
                seenDoctor: false
            },
            PlanDesign: {
                monthlyBenefit: '',
                FIO: false,
                occupationRider: false
            },
            Agreements: {
                clientSignature: '',
                clientdate: '',
                producerSignature: '',
                producerDate: '',
                producerNumber: '',
                signState: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    handleChange(prop, target, value) {
        debugger;
        this.setState((prevState) => {
            prevState[prop][target] = value;
            return prevState;
        });
    };


    onSubmit() {
        var formObject = this.state;
        console.log(formObject);
        alert("Value has been written on console!");
    }

    render() {

        var myState = this.state;
        return (
            <div className="App">
                <DemoGraphics data={myState.DemoGraphics} onChange={this.handleChange}/>
                <MedicalUnderwriting data={myState.Medical} onChange={this.handleChange}/>
                <PlanDesign data={myState.PlanDesign} onChange={this.handleChange}/>
                <Biling data={myState.Bill} onChange={this.handleChange}/>
                <AgreementSection data={myState.Agreements} onChange={this.handleChange}/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default App;
