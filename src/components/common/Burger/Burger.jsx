import React, {Component} from 'react';
import './Burger.sass';
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from "react-router-dom";

class Burger extends Component {
    constructor(props){
        super(props);
        this.state = { menuOpen: false }
    }
    handleStateChange = (state) => this.setState({menuOpen: state.isOpen});
    closeMenu = () => {
        this.setState({menuOpen: false});
        this.props.setIsBurgerOpened(false);
    };
    render() {
        let {menuItems} = this.props;

        return <Menu width={'300px'}
                     isOpen={this.state.menuOpen}
                     onStateChange={(state) => {
                         this.handleStateChange(state);
                         this.props.setIsBurgerOpened(state.isOpen);
                     }}>
            {menuItems.map((item, index) =>
                <NavLink key={index}
                         to={item.link}
                         onClick={() => this.closeMenu()}>
                    {item.name}
                </NavLink>)
            }
        </Menu>
    }
}

export default Burger;