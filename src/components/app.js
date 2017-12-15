import React, {Component} from 'react';
import './app.css';
import Scrapbook from './scrapbook';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            addClass: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            addClass: !this.state.addClass
        });
    }


    render() {
        let toggleClass= ["imgModal"];
        if(this.state.addClass){
            toggleClass.push("imgModal-show");
        }
        return (
            <div className="main-container">
                <h1 className="main-title">Scrapbook</h1>
                <Scrapbook/>
                <div className={toggleClass.join(' ')} onClick={this.handleClick}></div>
            </div>
        )
    }
}

export default App;

