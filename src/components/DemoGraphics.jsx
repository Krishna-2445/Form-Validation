import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'

import styled from 'styled-components'
import '../App.css';

const NameInput = styled.div`
    text-align : left;
`;

const AddrInfo = styled.div`
    text-align : left;
`;

const customUnderLineStyle = {
    borderColor: 'black'
}

export default class DemoGraphics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var myProps = this.props;
        var compPropData = myProps.data;
        return (
            <MuiThemeProvider>
                <h3 className={"form-title"}>Demographics</h3>
                <NameInput>
                    <TextField
                        hintText="First Name"
                        floatingLabelText="First Name"
                        type="text"
                        value={compPropData.firstName}
                        onChange={(e) => myProps.onChange("DemoGraphics", 'firstName', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                    <TextField
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        type="text"
                        value={compPropData.lastName}
                        onChange={(e) => myProps.onChange("DemoGraphics", 'lastName', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                </NameInput>
                <AddrInfo>
                    <TextField
                        hintText="Number/Street Address"
                        floatingLabelText="Number/Street Address"
                        type="text"
                        value={compPropData.address}
                        onChange={(e) => myProps.onChange("DemoGraphics", 'address', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                    <SelectField
                        floatingLabelText="State"
                        value={compPropData.state}
                        onChange={(e, index, value) => myProps.onChange("DemoGraphics", 'state', value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    >
                        <MenuItem value={1} primaryText="NE"/>
                        <MenuItem value={2} primaryText="CA"/>

                    </SelectField>
                    <TextField
                        hintText="Zip"
                        floatingLabelText="Zip"
                        type="text"
                        value={compPropData.zip}
                        onChange={(e) => myProps.onChange("DemoGraphics", 'zip', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />
                </AddrInfo>
                <AddrInfo>
                    <SelectField
                        floatingLabelText="Gender"
                        value={compPropData.gender}
                        onChange={(e, i, value) => myProps.onChange("DemoGraphics", 'gender', value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    >
                        <MenuItem value={1} primaryText="Male"/>
                        <MenuItem value={2} primaryText="Female"/>
                    </SelectField>
                    <DatePicker hintText="Date of Birth"
                                value={compPropData.birthDate}
                                onChange={(e, value) => myProps.onChange("DemoGraphics", 'birthDate', value)}
                                className="inline-component" style={{width: "16%"}}
                                underlineStyle={customUnderLineStyle}/>

                    <TextField
                        hintText="Income"
                        floatingLabelText="Income"
                        type="text"
                        value={compPropData.income}
                        onChange={(e) => myProps.onChange("DemoGraphics", 'income', e.target.value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    />

                    <SelectField
                        floatingLabelText="Occupation"
                        value={compPropData.occupation}
                        onChange={(e, i, value) => myProps.onChange("DemoGraphics", 'occupation', value)}
                        className="inline-component"
                        underlineStyle={customUnderLineStyle}
                    >
                        <MenuItem value={1} primaryText="1A"/>
                        <MenuItem value={2} primaryText="2A"/>
                        <MenuItem value={3} primaryText="3A"/>
                        <MenuItem value={4} primaryText="4A"/>
                        <MenuItem value={5} primaryText="5A"/>
                        <MenuItem value={6} primaryText="6A"/>
                    </SelectField>
                </AddrInfo>
                <hr/>
            </MuiThemeProvider>
        );
    }
}