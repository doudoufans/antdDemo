import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'历史数据'
         };
    }
    render() {
        return (
            <div className='info'> 
                {this.state.msg}              
            </div>
        );
    }
}

export default History;