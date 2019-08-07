import React, { Component } from 'react'
import axios from 'axios';
class Top_rated_phone extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mobiles:[''],
        }
    }
    componentDidMount(){
        axios.get('/api/top_rated')
        .then(response=>{
            this.setState({
                mobiles:response.data,
            })
        })
                }
    
    render() {
        return (
            
            <div className='container mt-1 containerr'>
               
            <div className='row'>
            <button className='btnn'></button>
           
                {this.state.mobiles.map(mobile=><div  className='col'>
                    
                        <div className='card-title text-center'>{mobile.name}</div>
                        <div  className='text-center mb-1'><img className='top_rated_phone'  src={mobile.url} height='200px' width='100px'></img></div>
                        <div className='card-body'>{mobile.body}</div>
                       
                </div>)}
                <button className='btnnn'></button>
                </div>
               
                 </div>
        )
    }
}
export default Top_rated_phone;
