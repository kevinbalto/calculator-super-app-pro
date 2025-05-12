import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtomProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation?: string;
}

const StyledButton = styled(Button)<{selected: boolean}>(( props ) => ({
    backgroundColor: "rgba(73, 156, 254, 0.1)", 
    borderColor: props.selected ? "#fff" : "rgba(73, 156, 254, 0.5)",    
}))

export const GridOperationButtom = ({operation, selectOperation, selectedOperation}: GridOperationButtomProps) => {
  return (
    <Grid item xs={3}>
        <StyledButton 
            fullWidth 
            variant="outlined" 
            onClick={() => selectOperation(operation)}
            selected={selectedOperation === operation}
        >
            {operation}
        </StyledButton>
    </Grid>
  )
}
