import React, { Component } from "react";
import { connect } from "react-redux";
import {actions} from "./login";




	class Login extends Component {
    componentDidMount( ) {
       console.log('login mounted');
    }

    render( ) {
        

        return (
            <div className='my-test-class'> 
	 <input type="text"></input>
	 <button>login</button>
	 </div>
        );
    }
}

	const mapStateToProps = ( state ) => ( {
    login1: state,
} );

const mapDispatchToProps = {
    loginActions: actions,
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );

