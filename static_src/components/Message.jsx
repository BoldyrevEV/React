import React from 'react'
import PropType from 'prop-types'

export default class Message extends React.Component {
    static propTypes () {
        message: PropType.string;
    };

    static defaultProps () {
        message: 'Привет!';
    }

    render(){
        const myStyle = {
            color: 'green',
            textAlign: 'right',
        };

        const botStyle = {
            color: 'red',
            textAlign: 'left',
        };

        return (
            <div style={ (this.props.message !== 'Отстаьте от меня кожанные уб*ки') ? myStyle: botStyle }>
                {this.props.message}
            </div>
        );
    };

}