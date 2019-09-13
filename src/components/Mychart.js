import React from 'react';
import {connect} from 'react-redux';
import {avtorization} from '../actions/avtorization'

class Mychart extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            load: false,
            form : false
        }
    }
    
    changeData(){
        const data =[
            {
                img : "/img/avatar.jpg",
                name : document.querySelector("[name=name]").value,
                phone : document.querySelector("[name=phone]").value,
                secondname: document.querySelector("[name=secondname]").value,
                email : document.querySelector("[name=email]").value
            }
        ]
        this.setState({
            form : false
        })
        this.props.changeData(data)
       
    }
    openMenu(){
         this.setState({
            form : true,
            user : [...this.props.data]
        })
        
    }
    closeMenu(){
        this.setState({
            form: false
        })
        this.props.onLoadData();
    }


    handlerChange(event){
        this.setState({
            user : [
                {[event.target.name]: event.target.value}
            ]
        })
    }
    componentDidMount(){
        this.props.onLoadData();
        
        
    }

    render(){
        const data = {...this.props.data[0]}
        
        return(
            <div className="wrapper">
                <header>
                    { this.props.data.length > 0 ? 
                        <div onClick={()=>{this.openMenu()}} className="openMenu">
                            <div className="avatar" style={{backgroundImage: 'url(' + data.img + ')'}}></div>
                            <div>
                                <p>{data.name} {data.secondname}</p>
                            </div>
                        </div>
                    : ""}
                </header>
                <div className="main"></div>
                {this.props.data.length > 0 & this.state.form ? <div className="changeForm">
                    <div className="container">
                        <div className="close" onClick={()=>{this.closeMenu()}}></div>
                        <div className="avatar" style={{backgroundImage: 'url(' + data.img + ')'}}></div>
                        <div className="form">
                            <div className="left">
                                <p>Name</p>
                                <p>Second name</p>
                                <p>Phone</p>
                                <p>Email</p>
                            </div>
                            <div className="right">
                                <form>
                                    <p><input onChange={(event)=>this.handlerChange(event)} name="name" type="text" value={this.state.user[0].name}/></p>
                                    <p><input onChange={(event)=>this.handlerChange(event)} name="secondname" type="text" value={this.state.user[0].secondname}/></p>
                                    <p><input onChange={(event)=>this.handlerChange(event)} name="phone"  type="text" value={this.state.user[0].phone}/></p>
                                    <p><input onChange={(event)=>this.handlerChange(event)} name="email" type="email"value={this.state.user[0].email}/></p>
                                </form>
                                
                            </div>
                        </div>
                        
                        <button onClick={()=>{this.changeData()}}>Save and close window</button>
                    </div>
                </div> : ""}
                <footer></footer>
            </div>
        )
    }
}

export default connect(
    state=>({
        data : state.data
    }),
    dispatch=>({
        onLoadData: ()=>{
            dispatch(avtorization());
        },
        changeData : (data)=>{
            dispatch({
                type: 'GET_DATA',
                data: data
            })
        }
       
    })
)(Mychart);