import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

import styled from 'styled-components'
import '../App.css';

const BodyInfo = styled.div`
    text-align : left;
`;

const CheckInfo = styled.div`
    text-align : left;
`;

const styles = {
    check_container : {
        width : '60%',
        marginLeft : '10%',
        fontSize : '1.2rem',
        color : 'gray',
        marginTop : '1.5rem',
        marginBottom : '1.5rem'
    }
}
const customUnderLineStyle = {
    borderColor : 'black'
}
export default class MedicalUnderwriting extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     stateValue : 1,
        //     genderValue : 1,
        //     occuValue : 1,
        // }
        // this.handleChangeState = this.handleChangeState.bind(this);
        // this.handleChangeGender = this.handleChangeGender.bind(this);
        // this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
    }
    // handleChangeState(event,index,value){
    //     this.setState({stateValue : value});
    // }
    // handleChangeGender(event,index,value){
    //     this.setState({genderValue : value});
    // }
    // handleChangeOccupation(event,index,value){
    //     this.setState({occuValue : value});
    // }
    render() {
        //console.log(this.state.stateValue);

        var myProps = this.props;
       var compPropData = myProps.data;

       return (
          <MuiThemeProvider>
            <h3 className={"form-title"}>Medical Underwriting</h3>
            <BodyInfo>
                <TextField
                    hintText="Feet Height"
                    floatingLabelText="Feet Height"
                    type="text"
                    value = {compPropData.heightFeet}
                    onChange={(e) => myProps.onChange("Medical",'heightFeet',e.target.value)}
                    className = "inline-component"
                    underlineStyle = {customUnderLineStyle}
                />
                <TextField
                    hintText="Inches"
                    floatingLabelText="Inches"
                    type="text"
                    value = {compPropData.heightInch}
                    onChange={(e) => myProps.onChange("Medical",'heightInch',e.target.value)}
                    className = "inline-component"
                    underlineStyle = {customUnderLineStyle}
                />
                <TextField
                    hintText="Weight(lbs)"
                    floatingLabelText="Weight(lbs)"
                    type="text"
                    value = {compPropData.weight}
                    onChange={(e) => myProps.onChange("Medical",'weight',e.target.value)}
                    className = "inline-component"
                    underlineStyle = {customUnderLineStyle}
                />
            </BodyInfo>
            <CheckInfo>
                <Toggle
                    label="Do you have diabetes? (Y/N)"
                    style={styles.check_container}
                    value = {compPropData.diabetes}
                    onToggle={(e,value) => myProps.onChange("Medical",'diabetes',value)}
                />
                <Toggle
                    label="Have you been hospitalized in the last 12 months? (Y/N)"
                    style={styles.check_container}
                    value = {compPropData.isHospitized12M}
                    onToggle={(e,value) => myProps.onChange("Medical",'isHospitized12M',value)}
                />
                <Toggle
                    label="&emsp;&emsp;&emsp;&emsp;Did you miss work as a result? (Y/N)"
                    style={styles.check_container}
                    value = {compPropData.missWork}
                    onToggle={(e,value) => myProps.onChange("Medical",'missWork',value)}
                />
                <Toggle
                    label="Have you seen a doctor for any other reason? (Y/N)"
                    style={styles.check_container}
                    value = {compPropData.seenDoctor}
                    onToggle={(e,value) => myProps.onChange("Medical",'seenDoctor',value)}
                />
            </CheckInfo>
            <hr/>
          </MuiThemeProvider>
       );
    }
 }