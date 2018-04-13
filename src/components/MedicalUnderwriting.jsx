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
    check_container: {
        width: '60%',
        marginLeft: '10%',
        fontSize: '1.2rem',
        color: 'gray',
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
    }
}
const customUnderLineStyle = {
    borderColor: 'black'
}
export default class MedicalUnderwriting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
                        value={compPropData.height_ft}
                        onChange={(e) => myProps.onChange("medical", 'height_ft', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                    <TextField
                        hintText="Inches"
                        floatingLabelText="Inches"
                        type="text"
                        value={compPropData.height_inches}
                        onChange={(e) => myProps.onChange("medical", 'height_inches', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                    <TextField
                        hintText="Weight(lbs)"
                        floatingLabelText="Weight(lbs)"
                        type="text"
                        value={compPropData.weight}
                        onChange={(e) => myProps.onChange("medical", 'weight', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                </BodyInfo>
                <CheckInfo>
                    <Toggle
                        label="Do you have diabetes? (Y/N)"
                        style={styles.check_container}
                        value={compPropData.diabetes}
                        onToggle={(e, value) => myProps.onChange("medical", 'diabetes', value)}
                    />
                    <Toggle
                        label="Have you been hospitalized in the last 12 months? (Y/N)"
                        style={styles.check_container}
                        value={compPropData.hospitalized}
                        onToggle={(e, value) => myProps.onChange("medical", 'hospitalized', value)}
                    />
                    <Toggle
                        label="&emsp;&emsp;&emsp;&emsp;Did you miss work as a result? (Y/N)"
                        style={styles.check_container}
                        value={compPropData.missWork}
                        onToggle={(e, value) => myProps.onChange("medical", 'missWork', value)}
                    />
                    <Toggle
                        label="Have you seen a doctor for any other reason? (Y/N)"
                        style={styles.check_container}
                        value={compPropData.seen_doctor}
                        onToggle={(e, value) => myProps.onChange("medical", 'seen_doctor', value)}
                    />
                </CheckInfo>
                <hr/>
            </MuiThemeProvider>
        );
    }
}