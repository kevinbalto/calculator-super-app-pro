import { Button, Grid } from "@mui/material";

interface GridDigitButtomProps {
    digit: string;
    enterDigit: (digit: string) => void;
    xs?: number;
}

export const GridDigitButtom = ({digit, enterDigit, xs = 3}: GridDigitButtomProps) => {
  return (
    <Grid item xs={xs}>
        <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
            {digit}
        </Button>
    </Grid>
  )
}
