import {useEffect, useState} from "react";
import {Card, Cards, Deck} from "../../services/types";
import {useDrawCardFromDeckQuery, useDrawInitialCardsFromDeckQuery, useGetNewDeckQuery} from "../../services/cards";


export const useCardDeck = () => {

    const [deck, setDeck] = useState<Deck>();

    const { data: cardDeck, error, isLoading } = useGetNewDeckQuery('1');

    useEffect(() => {
        if (!error && !isLoading) {
            setDeck(cardDeck);
        }
    }, [cardDeck, error, isLoading]);

    return {...deck};
}

export const useInitialCards = (deckId: string) => {

    const [cards, setCards] = useState<Cards>();

    const { data, error, isLoading } = useDrawInitialCardsFromDeckQuery(deckId);

    useEffect(() => {
        if (!error && !isLoading) {
            setCards(data);
        }
    }, [data, error, isLoading]);

    const dealerHand = cards ? [cards?.cards[0], cards?.cards[2]] : [];
    const playerHand = cards ? [cards?.cards[1], cards?.cards[3]] : [];

    return {
        dealerHand: dealerHand,
        playerHand: playerHand
    };
}

export const useDrawCard = (deckId: string) => {
    const [card, setCard] = useState<Card>();

    const { data, error, isLoading } = useDrawCardFromDeckQuery(deckId);

    useEffect(() => {
        if (!error && !isLoading) {
            setCard(data);
        }
    }, [data, error, isLoading]);

    return {...card};
}