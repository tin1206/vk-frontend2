import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sign_out} from '../../redux/actions/signinActions';


const handleClick = (props) => {
    props.sign_out_action()
}

function SignOut(props){
    return(
        <span onClick={() => handleClick(props)}>
            Sign Out
        </span>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    sign_out_action: sign_out
}, dispatch)

const mapStateToProps = () => (state) => {
    return {
        sign_out: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)