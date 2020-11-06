import React from 'react';
import ReactDOM from 'react-dom';
import './mainStyle/index.scss';
// Hero Section Import
import HeroSection from './components/HeroSection/HeroSection';

class Main extends React.Component {
    render() {
        return(
            <div className="container-fluid">  
                <HeroSection />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))