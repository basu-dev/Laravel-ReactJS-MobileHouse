import React, { Component } from 'react'
import axios from 'axios';

export class Mobiles_by_brand extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mobiles:[''],
             url:this.props.brand,
        }
        console.log('this is',this.props.brand);
    }
    componentDidMount(){
        axios.get('/api/mobiles_by_brand?brand='+this.state.url)
        .then(response=>{
            this.setState({
                mobiles:response.data
            })
        })
      
        
    }
    render() {
      
        return (

            <div>
            {this.state.mobiles.map(mobile=>
                <div className='row'>
                        <div className='mobile_by_brand1'></div>
                        <div className='mobile_by_brand2'>
                        <div className='text-center mb-1'><img className='top_rated_phone' src={mobile.url} height='200px' width='100px'></img></div>
                        </div>
                        <div className='mobile_by_brand3'>
                            
                            <div className='card-title text-center'>{mobile.name}</div>
                            <div className='card-text'>{mobile.body}</div>
                            
                            
                        </div>
                        <div className='mobile_by_brand4'></div>
                </div>
                )};
            </div>
       
       
    )
    }
}

export default Mobiles_by_brand
