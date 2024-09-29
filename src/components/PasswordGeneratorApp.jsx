import { Button, Checkbox, FormLabel, Grid, Link, TextField } from '@mui/material';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import { PasswordLayout } from './PasswordLayout';
import { Passwords } from './Passwords';
import { useUiStore } from '../hooks/useUiStore';
import { LoadingScreen } from './LoadingScreen';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';

export const PasswordGeneratorApp = () => {
    const {
        lengthPassword, 
        optionsForGenerate, 
        startGeneratePasswords, 
        setLengthPassword, 
        setSelectedOptions,
        calculateNumberSelectedOptions,
        startClearData
    } = usePasswordGenerator();

    const { finishLoadingPasswords, initLoadingPasswords, isLoadingPasswords } = useUiStore();
    
    const onSubmit = (event) => {
        event.preventDefault();

        initLoadingPasswords();
        startGeneratePasswords();
        finishLoadingPasswords();
    }

    const handleSetLengthPassword = ({ target }) => {
        setLengthPassword({ lengthPassword: target.value });
    }

    const handleChangeOptions = ({ target }) => {
        setSelectedOptions({ option: target.name, value: target.checked });
        calculateNumberSelectedOptions();
    }

    useEffect(() => {
        startClearData();
    }, []);
    

    return (
        <PasswordLayout title="Generador de contrase&ntilde;as">
            <form onSubmit={onSubmit}>
                <Grid container>

                    <Grid item xs={10} sm={9} alignContent={"center"}>
                        <FormLabel sx={{ color: "white" }}>Longitud de la contrase&ntilde;a</FormLabel>
                    </Grid>

                    <Grid item xs={2} sm={3}>
                        <TextField
                            type='text'
                            placeholder='0'
                            fullWidth
                            name='txtLengthPassword'
                            onChange={ handleSetLengthPassword }
                            sx={{
                                backgroundColor: "white",
                                color: "white"
                            }}
                            size='small'
                            value={lengthPassword}
                        />
                    </Grid>

                    <Grid item xs={10} sm={9} alignContent={"center"}>
                        <FormLabel sx={{ color: "white" }}>Incluir palabras may&uacute;sculas</FormLabel>
                    </Grid>

                    <Grid item xs={2} sm={3} textAlign={"center"}>
                        <Checkbox onChange={handleChangeOptions} name="uppercaseLetters" checked={ optionsForGenerate.uppercaseLetters } />
                    </Grid>

                    <Grid item xs={10} sm={9} alignContent={"center"}>
                        <FormLabel sx={{ color: "white" }}>Incluir palabras min&uacute;sculas</FormLabel>
                    </Grid>

                    <Grid item xs={2} sm={3} textAlign={"center"}>
                        <Checkbox onChange={handleChangeOptions} name="lowercaseLetters" checked={optionsForGenerate.lowercaseLetters} />
                    </Grid>

                    <Grid item xs={10} sm={9} alignContent={"center"}>
                        <FormLabel sx={{ color: "white" }}>Incluir n&uacute;meros</FormLabel>
                    </Grid>

                    <Grid item xs={2} sm={3} textAlign={"center"}>
                        <Checkbox onChange={handleChangeOptions} name="numbers" checked={ optionsForGenerate.numbers }/>
                    </Grid>

                    <Grid item xs={10} sm={9} alignContent={"center"}>
                        <FormLabel sx={{ color: "white" }}>Incluir s&iacute;mbolos</FormLabel>
                    </Grid>

                    <Grid item xs={2} sm={3} textAlign={"center"}>
                        <Checkbox onChange={handleChangeOptions} name="symbols" checked={optionsForGenerate.symbols} />
                    </Grid>

                    <Grid item xs={12} mb={2} mt={1}>
                        <Button type='submit' variant="contained" fullWidth sx={{ mt: 2 }}>Generar contrase&ntilde;as</Button>
                    </Grid>

                    <Grid container direction={"row"} justifyContent={"end"}>
                        <Link component={ RouterLink } color={"inherit"} to="/validate" sx={{ color: "white" }}>
                            Validar contrase&ntilde;a
                        </Link>
                    </Grid>

                </Grid>

                {
                    isLoadingPasswords
                    ? <LoadingScreen />
                    : <Passwords />
                }
            </form>
        </PasswordLayout>
    )
}