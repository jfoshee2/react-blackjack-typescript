

export type Deck = {
    deck_id: string;
    success: boolean;
    shuffled: boolean;
    remaining: number;
}

export type CardImage = {
    svg: string;
    png: string;
}

export type Card = {
    code: string;
    image: string;
    images: CardImage;
    value: string;
    suit: string;
}

export type Cards = {
    deck_id: string;
    success: boolean;
    cards: Card[];
    remaining: number;
}