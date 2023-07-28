import React from 'react';
import cls from "./Navbar.module.scss"
import logo from "../../assets/Vector.png"
import {Link} from "react-router-dom";
import {Typography} from "antd";

const Navbar = () => {
    return (
        <nav className={cls.Navbar}>
            <div className={cls.info}>
                <img src={logo} alt=""/>
                <Typography.Link>
                    <Link to="/applications">
                        Заявки
                    </Link>
                </Typography.Link>
                <Link to="/new">Подать заявку</Link>
            </div>
            <div>
                <Link to="/profile">Профиль</Link>
            </div>
        </nav>
    );
};

export default Navbar;