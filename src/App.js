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
            demoGraphics: {
                first_name: '',
                last_name: '',
                address: '',
                state: '',
                zipcode: '',
                gender: '',
                dob: '',
                income: '',
                occupation: ''
            },
            bill: {
                mode: '',
                modalPremium: '',
                renewalMonth: 1
            },
            medical: {
                height_ft: '',
                height_inches: '',
                weight: '',
                diabetes: false,
                hospitalized: false,
                missWork: false,
                seen_doctor: false
            },
            planDesign: {
                basemoben: '',
                FIO: false,
                occupationRider: false
            },
            agreements: {
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
        fetch('http://localhost:8080/createPolicy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject)
        })
    }

    render() {

        var myState = this.state;
        return (
            <div className="App">
                <DemoGraphics data={myState.demoGraphics} onChange={this.handleChange}/>
                <MedicalUnderwriting data={myState.medical} onChange={this.handleChange}/>
                <PlanDesign data={myState.planDesign} onChange={this.handleChange}/>
                <Biling data={myState.bill} onChange={this.handleChange}/>
                <AgreementSection data={myState.agreements} onChange={this.handleChange}/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default App;
