import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    render() {
        return (
            <div className='home'> 
                工具说明   
            </div>
        );
    }
}

export default Home;