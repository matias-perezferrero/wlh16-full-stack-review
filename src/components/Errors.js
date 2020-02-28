import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export class Errors extends Component {
    render() {
        if(this.props.userReducer.error) toast.error(`${this.props.userReducer.errorMessage}`, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return (
            <div>
                <ToastContainer autoClose={2000} />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    userReducer: reduxState.userReducer
})


export default connect(mapStateToProps)(Errors)
