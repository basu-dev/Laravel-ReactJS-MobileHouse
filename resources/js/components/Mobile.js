import React, { Component } from 'react'
import Recent_launched from './Recent_launched';
import Mobile_by_brand from './Mobiles_by_brand';
import ReactDom from 'react-dom';
class Mobile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            url:''
             
        }
    }
    
    click_on_brand(event){
        // console.log("pressed");

        this.setState({
            url:event.target.id
        }, () => {
            ReactDom.render(<Mobile_by_brand brand={this.state.url}/>,document.getElementById('row'));
        });

        
    }
    render() {
        return (
            <div id='row'>
                <div className='container mb-4 mt-2' >
                    <div className="row">
                        <div  className='col-lg-3 col-md-6'  >
                          <a >
                                <div lauda='Lauda' className='card_custom'>
                                    <div className="card-title text-center">Samsung</div>
                                        <div id='samsung' className='text-center mb-2' onClick={this.click_on_brand.bind(this)}><img  src='samsung.jpeg' height='300px' width='150PX'></img>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <a>
                                <div className='card_custom'>
                                    <div className="card-title text-center">Iphone</div>
                                        <div id='iphone' className='text-center mb-2'  onClick={this.click_on_brand.bind(this)}><img  src='iphone.jpeg' height='300px' width='150PX'></img>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <a>
                                <div className='card_custom'>
                                    <div className="card-title text-center">Oppo</div>
                                        <div id='oppo' className='text-center mb-2'  onClick={this.click_on_brand.bind(this)}><img  src='oppo.jpeg' height='300px' width='150PX'></img>
                                        </div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <a >
                                <div className='card_custom'>
                                    <div className="card-title text-center">OnePlus</div>
                                        <div id='oneplus' className='text-center mb-2'  onClick={this.click_on_brand.bind(this)}><img  src='oneplus.jpg' height='300px' width='150PX'></img>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}
export default  Mobile;
