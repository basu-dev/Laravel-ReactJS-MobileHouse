import React, { Component } from 'react'
import axios from 'axios';
class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:{login_status:'guest',username:''},
             search_from_api:[''],
        }
    }
    componentDidMount(){
        axios.get('/api')
        .then(response=>{
            this.setState({
                user:response.data
            })
        })
    }
    search_data(event){
        document.getElementById('search_result').style.display='block';
        if(event.target.value.length==0){
            document.getElementById('search_result').style.display='none';
        }
        axios.get('/api/search?query='+event.target.value)
        .then(response=>{
            this.setState({
                search_from_api:response.data,
            })
            
        })
    }
    login_check(){
        if(this.state.user.username){
            return(
                <div>
                    <li className='nav-item'>Logout</li>
                </div>
            )
        }
        else{
            return(<div>
                 <li className='nav-item'>Login</li>
                 <li className='nav-item'>Register</li>
            </div>)
        }
        
    }
    render() {
        return (
            <div key='navbard'>
                <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm" id='navbar'>

<div className="container">
    <a className="navbar-brand" id='navbar-brand' href="/" >
    MeroMobileHouse
    </a>
    <input type='search' placeholder='Search' id='search' onChange={this.search_data.bind(this)}/>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
        <ul className="navbar-nav text-center">
           {this.login_check()}

            
        </ul>

      
        <ul className="navbar-nav ml-auto">
            <li className='nav-item ml-1 mt-1'>  <img src='shopping-basket.svg' height='30' width='30'></img></li>
           
                <li className="nav-item" >
                    <a className="nav-link"></a>
                </li>
               
                    <li className="nav-item">
                        
        </li>  
        </ul>
    </div>
</div>
</nav>
            <div id='search_result'>
           {this.state.search_from_api.map(s=><div>
              <a href='#'><li id='slist'>{s.body}</li></a>
           </div>)}
            </div>
</div>
        )
    }
}
export default Navbar;
