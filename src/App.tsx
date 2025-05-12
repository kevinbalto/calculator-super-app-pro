import { Button, Container, Grid, Paper, styled } from '@mui/material';
import { useState } from 'react';
import { GridOperationButtom } from './components/GridOperationButtom';
import { GridDigitButtom } from './components/GridDigitButtom';

const OutPutContainer = styled('div')(({ theme }) => ({   
  width: '100%',
  textAlign: 'right',
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15
}));

function App() {

  const [currentValue, setCurrentValue] = useState("0");  
  const [operation, setOperation] = useState(""); 
  const [previousValue, setPreviousValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const clear = () => {
    setCurrentValue("0")
    setPreviousValue("")
    setOperation("")
    setOverwrite(true)
  }

  const deleteDigit = () => {
    if (currentValue.length === 1) {
      setCurrentValue("0")
      setOverwrite(true)
    } else {
      setCurrentValue(currentValue.slice(0, -1))
    }
  }

  const setDigit = (digit: string) => {

    if (currentValue[0] === "0" && digit === "0") return

    if(currentValue.includes(".") && digit === ".") return

    if (overwrite && digit !== "0") {
      setCurrentValue(digit)
    } else {
      setCurrentValue(`${currentValue}${digit}`)
    }
    setOverwrite(false)
  }

  const selectOperation = (operation: string) => {
    if (!previousValue) {
      const value = calculate()
      setPreviousValue(`${value}`)
      setCurrentValue(`${value}`)
    }
    setPreviousValue(currentValue)
    setOperation(operation)
    setOverwrite(true)
  }

  const percentage = () => {
    const value = parseFloat(currentValue)
    setCurrentValue((value / 100).toString())   
  }

  const calculate = () => {
    if(!previousValue || !operation) return currentValue
    
    const current = parseFloat(currentValue)
    const previous = parseFloat(previousValue)

    let result;

    switch (operation) { 
      case "+":
        result = previous + current
        break;
      case "-":
        result = previous - current
        break;
      case "*":
        result = previous * current
        break;
      case "÷":
        result = previous / current
        break;
      default:
        return
    }

    return result
  }

  const equal = () => {
    const result = calculate()
    setCurrentValue(`${result}`)
    setPreviousValue("")     
    setOperation("")    
    setOverwrite(true)  
  }

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <OutPutContainer>{currentValue}</OutPutContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButtom 
              operation={'AC'}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <GridOperationButtom 
              operation={'C'}
              selectOperation={deleteDigit}
              selectedOperation={operation}
            />
            <GridOperationButtom 
              operation={'%'}
              selectOperation={percentage}
              selectedOperation={operation}
            />
            <GridOperationButtom 
              operation={'÷'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButtom 
              digit={'7'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'8'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'9'}
              enterDigit={setDigit}
            />
            <GridOperationButtom 
              operation={'*'}
              selectOperation={selectOperation} 
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButtom 
              digit={'6'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'5'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'4'}
              enterDigit={setDigit}
            />
            <GridOperationButtom 
              operation={'-'}
              selectOperation={selectOperation} 
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButtom 
              digit={'3'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'2'}
              enterDigit={setDigit}
            />
            <GridDigitButtom 
              digit={'1'}
              enterDigit={setDigit}
            />
            <GridOperationButtom 
              operation={'+'}
              selectOperation={selectOperation} 
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButtom 
              digit={'0'}
              enterDigit={setDigit}
              xs={6}
            />
            <GridDigitButtom 
              digit={'.'}
              enterDigit={setDigit}
            />
            <Grid item xs={3}>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={equal}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
