import {HandProps} from "./types";
import {Stack} from "@mui/material";


export const Hand = ({ deck_id, cards }: HandProps) => {

    return (
        <Stack textAlign={'center'} justifyContent={'center'} display={'flex'} flexDirection={'row'}>
            {cards.map((card) => <img alt={''} src={card.images.png} />)}
        </Stack>
    );
}