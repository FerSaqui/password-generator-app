import { Button, Checkbox, FormLabel, Grid, TextField } from '@mui/material';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import { PasswordLayout } from './PasswordLayout';
import { Passwords } from './Passwords';

export const PasswordGeneratorApp = () => {
    const {
        lengthPassword, 
        optionsForGenerate, 
        startGeneratePasswords, 
        setLengthPassword, 
        setSelectedOptions,
        calculateNumberSelectedOptions
    } = usePasswordGenerator();
    
    const onSubmit = (event) => {
        event.preventDefault();
        startGeneratePasswords();
    }

    const handleSetLengthPassword = ({ target }) => {
        setLengthPassword({ lengthPassword: target.value });
    }

    const handleChangeOptions = ({ target }) => {
        setSelectedOptions({ option: target.name, value: target.checked });
        calculateNumberSelectedOptions();
    }

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

                    <Grid item xs={12}>
                        <Button type='submit' variant="contained" fullWidth sx={{ mt: 2 }}>Generar contrase&ntilde;as</Button>
                    </Grid>

                </Grid>

                <Passwords />
            </form>
        </PasswordLayout>
    )
}