import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

import styled from 'styled-components'
import '../App.css';

const PlanContainer = styled.div`
    text-align : left;
`;

const styles = {
    FIO: {
        display: 'inline-block',
        maxWidth: '20%',
        fontSize: '1.2rem',
        color: 'gray',
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
    },
    Occupation: {
        display: 'inline-block',
        maxWidth: '40%',
        fontSize: '1.2rem',
        color: 'gray',
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
    }
}
const customUnderLineStyle = {
    borderColor: 'black'
}
export default class PlanDesign extends React.Component {
    render() {
        var myProps = this.props;
        var compPropData = myProps.data;

        return (
            <MuiThemeProvider>
                <h3 className={"form-title"}>Plan Design</h3>
                <PlanContainer>
                    <TextField
                        hintText="Base Monthly Benefit"
                        floatingLabelText="Base Monthly Benefit"
                        type="text"
                        value={compPropData.monthlyBenefit}
                        onChange={(e) => myProps.onChange("PlanDesign", 'monthlyBenefit', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                    <Toggle
                        label="FIO? (Y/N)"
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                        style={styles.FIO}
                        value={compPropData.FIO}
                        onToggle={(e, value) => myProps.onChange("PlanDesign", 'FIO', value)}
                    />
                    <Toggle
                        label="Extended Own Occupation Rider? (Y/N)"
                        className="inline-component"
                        style={styles.Occupation}
                        value={compPropData.occupationRider}
                        onToggle={(e, value) => myProps.onChange("PlanDesign", 'occupationRider', value)}
                    />
                </PlanContainer>
                <hr/>
            </MuiThemeProvider>
        );
    }
}