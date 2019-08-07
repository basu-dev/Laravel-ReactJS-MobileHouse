import React, { Component } from 'react'
import Axios from 'axios';

export class Recent_launched extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mobiles:['']
        }
    }
    componentDidMount(){
        Axios.get('/api/recent_launched')
        .then(response=>{
            this.setState({
                mobiles:response.data    
            })
        })
    }
    
    render() {
        return (
            <div className='container containerr'>
                <div className='row'>
                    <button className='btnn'></button>
                    {this.state.mobiles.map(mobile=>
                    <div className='col'>
                        <div className='card-title text-center'>{mobile.name}</div>
                        <div className='text-center mb-1'><img className='top_rated_phone' src={mobile.url} height='200px' width='100px'></img></div>
                        <div className='card-text'>{mobile.body}</div>
                    </div>    
                    )}
                    <button className='btnnn'></button>

                </div>
            </div>
        )
    }
}

export default Recent_launched
