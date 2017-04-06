import React, {Component} from 'react';

const Header = () => {
    return (
        <aside className="aside">
            <nav>
                <ul className="nav-list">
                    <li className="nav-list_item"><i className="fa fa-home" aria-hidden="true"/></li>
                    <li className="nav-list_item">
                        <i className="fa fa-weixin" aria-hidden="true"/>
                        <span className="messages">2</span>
                    </li>
                    <li className="nav-list_item"><i className="fa fa-picture-o" aria-hidden="true"/></li>
                </ul>
            </nav>
        </aside>
    )
};

export default Header;
