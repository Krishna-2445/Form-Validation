import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Toggle from 'material-ui/Toggle'

import styled from 'styled-components'
import '../App.css';

const SignContainer = styled.div`
    text-align : left;
`;

const styles = {
    item: {
        display: 'inline-block',
        width: '23%',
        marginLeft: '5%',
        marginRight: '5%',
    }
}
const customUnderLineStyle = {
    borderColor: 'black'
}
export default class AgreementSection extends React.Component {
    render() {

        var myProps = this.props;
        var compPropData = myProps.data;

        return (
            <SignContainer>
                <h3 className={"form-title"}>Agreement Section</h3>
                <MuiThemeProvider>
                    <TextField
                        hintText="Client Signature"
                        floatingLabelText="Client Signature"
                        type="text"
                        value={compPropData.clientSignature}
                        onChange={(e) => myProps.onChange("agreements", 'clientSignature', e.target.value)}
                        className="inline-component"
                        style={styles.item}
                        underlineStyle={customUnderLineStyle}

                    />
                    <DatePicker hintText="Date" className="inline-component" style={styles.item}
                                value={compPropData.clientdate}
                                onChange={(e, value) => myProps.onChange("agreements", 'clientdate', value)}
                                underlineStyle={customUnderLineStyle}/>
                    <Toggle
                        label="Sign State"
                        style={styles.item}
                        underlineStyle={customUnderLineStyle}
                        value={compPropData.signState}
                        onToggle={(e, value) => myProps.onChange("agreements", 'signState', value)}
                    />
                    <br/>
                    <TextField
                        hintText="Producer Signature"
                        floatingLabelText="Producer Signature"
                        type="text"
                        value={compPropData.producerSignature}
                        onChange={(e) => myProps.onChange("agreements", 'producerSignature', e.target.value)}
                        className="inline-component"
                        style={styles.item}
                        underlineStyle={customUnderLineStyle}
                    />
                    <DatePicker hintText="Date" className="inline-component" style={styles.item}
                                value={compPropData.producerDate}
                                onChange={(e, value) => myProps.onChange("agreements", 'producerDate', value)}
                                underlineStyle={customUnderLineStyle}/>
                    <br/>
                    <TextField
                        hintText="Producer Number"
                        floatingLabelText="Producer Number"
                        type="text"
                        value={compPropData.producerNumber}
                        onChange={(e) => myProps.onChange("agreements", 'producerNumber', e.target.value)}
                        className="inline-component"
                        style={styles.item}
                        underlineStyle={customUnderLineStyle}
                    />
                </MuiThemeProvider>
                <hr/>
            </SignContainer>
        );
    }
}