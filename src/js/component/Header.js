import React, {Component} from 'react';
import DropArea from './DragArea';

export default class Header extends Component{
    render() {
        return (
            <header className="header">
                <DropArea changeBackgroundImage={this.props.changeBackgroundImage}/>

                <div className="search rounded-area">
                    <i className="fa fa-search"/>
                    Search
                </div>
                <div className="login">
                    <i className="fa fa-user-circle-o" aria-hidden="true"/>
                    <em>Log in</em>
                </div>
            </header>
        )
    }
};
