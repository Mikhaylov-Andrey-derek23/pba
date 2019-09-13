import React from 'react';
import {connect} from 'react-redux';
import Mychart from "./components/Mychart";
import Formavtorisation from './components/Formavtorisation';
import './style.scss';

class App extends React.Component{
    

    handlerForm(){
        this.props.avtorisationForm(true)
    }

   
    render(){

        return(
            <div>
              
               
                {!this.props.avtorisation.avtorization ? <Formavtorisation/> :  <Mychart/>}
         
                <div>
                
            </div>

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
            })}
        
        
    })
)(App);
