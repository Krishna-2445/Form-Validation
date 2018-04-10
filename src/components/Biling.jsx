import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import styled from 'styled-components'
import '../App.css'

const BilingContainer = styled.div`
    text-align : left;
`;
const customUnderLineStyle = {
    borderColor : 'black'
}

export default class Biling extends React.Component {
    constructor(props){
        super(props);
        // this.state={
        //     payMode : 1,
        //     date : 1
        // }
        // this.handleChangeMode = this.handleChangeMode.bind(this);
        // this.handleChangeDate = this.handleChangeDate.bind(this);
    }
    // handleChangeMode(event,index,value){
    //     this.setState({payMode : value});
    // }
    // handleChangeDate(event,index,value){
    //     this.setState({date : value});
    // }
    render() {
        var myProps = this.props;
       var compPropData = myProps.data;

       return (
          <BilingContainer>
            <h3 className={"form-title"}>Biling</h3>
            <MuiThemeProvider>
                <SelectField
                floatingLabelText="Mode(Monthly/Annual)"
                value={compPropData.mode}
                onChange={(e,index,value) => myProps.onChange("Bill",'mode',value)}
                className = "inline-component"
                underlineStyle = {customUnderLineStyle}
                >
                    <MenuItem value={1} primaryText="Monthly" />
                    <MenuItem value={2} primaryText="Annual" />
                </SelectField>
                <TextField
                    hintText="Modal Premium"
                    floatingLabelText="Modal Premium"
                    type="text"
                    value = {compPropData.modalPremium}
                    onChange={(e) => myProps.onChange("Bill",'modalPremium',e.target.value)}
                    className = "inline-component"
                    underlineStyle = {customUnderLineStyle}
                />
                <br/>
                <SelectField
                floatingLabelText="Renewal Biling Day of a Month(1-28 or Effective Day)"
                value={compPropData.renewalMonth}
                onChange={(e,index,value) => myProps.onChange("Bill",'renewalMonth',value)}
                className = "inline-component"
                style={{width:"60%"}}
                underlineStyle = {customUnderLineStyle}
                >
                    <MenuItem value={1} primaryText="1" />
                    <MenuItem value={2} primaryText="2" />
                    <MenuItem value={3} primaryText="3" />
                    <MenuItem value={4} primaryText="4" />
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={6} primaryText="6" />
                    <MenuItem value={7} primaryText="7" />
                    <MenuItem value={8} primaryText="8" />
                    <MenuItem value={9} primaryText="9" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={11} primaryText="11" />
                    <MenuItem value={12} primaryText="12" />
                    <MenuItem value={13} primaryText="13" />
                    <MenuItem value={14} primaryText="14" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={16} primaryText="16" />
                    <MenuItem value={17} primaryText="17" />
                    <MenuItem value={18} primaryText="18" />
                    <MenuItem value={19} primaryText="19" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={21} primaryText="21" />
                    <MenuItem value={22} primaryText="22" />
                    <MenuItem value={23} primaryText="23" />
                    <MenuItem value={24} primaryText="24" />
                    <MenuItem value={25} primaryText="25" />
                    <MenuItem value={26} primaryText="26" />
                    <MenuItem value={27} primaryText="27" />
                    <MenuItem value={28} primaryText="28" />
                </SelectField>
            </MuiThemeProvider>
            <hr/>
          </BilingContainer>
       );
    }
 }