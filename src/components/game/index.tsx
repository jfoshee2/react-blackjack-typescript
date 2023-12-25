import {Box, Button, Stack, Typography} from "@mui/material";
import {useCardDeck, useInitialCards} from "./hooks";
import {Hand} from "../hand";
import {useState} from "react";


export const Game = () => {

    const { deck_id } = useCardDeck();
    const { dealerHand, playerHand } = useInitialCards(deck_id ? deck_id : '');

    const [moneyAmount, setMoneyAmount] = useState<number>(5000);
    const [wager, setWager] = useState<number>(0);

    const wagerAmounts: number[] = [5, 10, 25, 50, 100];

    return deck_id ? (
        <Box textAlign={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
            <Hand deck_id={deck_id} cards={dealerHand} />
            <Stack textAlign={'center'} justifyContent={'center'} display={'flex'} flexDirection={'row'}>
                {wagerAmounts.map((amount) => <Button onClick={() => setWager(wager + amount)}>${amount}</Button>)}
            </Stack>
            <Typography>{wager}</Typography>
            <Stack textAlign={'center'} justifyContent={'center'} display={'flex'} flexDirection={'row'}>
                <Button>Hit</Button>
                <Button>Stand</Button>
            </Stack>
            <Hand deck_id={deck_id} cards={playerHand} />
        </Box>
    ): (
        <div>Loading...</div>
    );
}