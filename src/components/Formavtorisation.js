import React from 'react';
import {connect} from 'react-redux';
import {avtorization} from '../actions/avtorization';

class Formavtorisation extends React.Component{

    handlerForm(e){
        e.persist();
        e.preventDefault();
        const form = {};
        form.login = e.target.querySelector("[name=login]").value
        form.pass = e.target.querySelector("[name=password]").value
        this.props.avtorisationForm(form)
    
    }

    

    render(){
        console.log(this.props)
        return(
            <div className="Formavtorisation">
                <form onSubmit={(e)=>this.handlerForm(e)}>
                    <p>Log-in to your account</p>
                    <input type="text" name="login" placeholder="Login"></input>
                    <input type="text" name="password" placeholder="Password"></input>
                    <button>LOGIN</button>
                    {this.props.avtorisation.message ? <p className="alert">{this.props.avtorisation.message}</p> : ""}
                </form>
            </div>
        )
    }
}

export default connect(
    state=>({
        avtorisation : state.avtorisation
    }),
    dispatch=>({
        avtorisationForm:(formData)=>{
            dispatch({
                type: 'AVTORIZATION',
                data: formData
            })
        }
        
       
       
    })
)(Formavtorisation);