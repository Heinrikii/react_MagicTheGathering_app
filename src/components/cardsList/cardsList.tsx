import React, {useEffect, useState} from 'react';
import {CardsListWrapper} from './cardsList.styled';
import axios from "axios";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import './CardList.css';

interface CardsListProps {
}

const CardsList = () => {
    const [cards, setCards] = useState([]);
//Neste utilizand o axios que é um componente para fazer o consumo de serviço
    useEffect(() => {
        axios
            .get("https://api.magicthegathering.io/v1/cards")
            .then((response) => setCards(response.data.cards));
    }, []);

    return (
        <div>
            <CardsListWrapper>
                <DataTable value={cards}>
                    <Column field="name" header="Name"></Column>
                    <Column field="manaCost" header="manaCost"></Column>
                    <Column field="type" header="type"></Column>
                    <Column field="rarity" header="rarity"></Column>
                    <Column field="originalText" header="originalText"></Column>
                    <Column
                        field="id"
                        header="Detalhes da Carta"
                        body={(rowData) => (
                            <a href={`/card/${rowData.id}`}
                               target="_self" rel="noreferrer">
                                Detalhes
                            </a>
                        )}
                    ></Column>
                </DataTable>
            </CardsListWrapper>
        </div>
    );
};

export default CardsList;
