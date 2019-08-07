import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import Top_rated_phone from './components/Top_rated_phone';
import Footer from './components/Footer';
import Recent_launched from './components/Recent_launched';
export default class Index extends Component {
     change(){
        document.getElementById('search_result').style.display='none';
    }
    render() {
        return (
            <div>
               <Navbar/>
               <div onClick={this.change.bind(this)}>
                <Mobile />
                <div className='col'>
                    <div className='row'>
                        <legend className='most_viewed'>Most Viewed</legend>
                        <Top_rated_phone /></div>
                        <div className='row'>
                        <legend className='most_viewed'>Recent Launches</legend>
                        <Recent_launched /></div>
                </div>
                <Footer />
                </div>
            </div>
        )
    }
}
ReactDom.render(<Index/>,document.getElementById('app'));

