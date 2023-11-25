import React, { FC } from 'react';
import { MenuWrapper } from './Menu.styled';
import {Menubar} from "primereact/menubar";
import {useHistory} from "react-router-dom";

interface MenuProps {}

const Menu = () => {
    const history = useHistory();

    const items = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => {
                history.push("/");
            },
        },
        {
            label: "Adicionar Card",
            icon: "pi pi-plus",
            command: () => {
                history.push("/add");
            },
        },
        {
            label: "Editar Card",
            icon: "pi pi-pencil",
            command: () => {
                history.push("/edit");
            },
        },
    ];

    /*const activeIndex: any = items.findIndex(
      (item) => location.pathname.indexOf(item.command().slice(1)) !== -1
    );*/

    return <Menubar model={items} />;
};

export default Menu;