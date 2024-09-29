import React, { useEffect } from 'react'
import { PasswordLayout } from './PasswordLayout';
import { Button, Grid, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { usePasswordValidate } from '../hooks/usePasswordValidate';
import { Passwords } from './Passwords';

export const ValidatePasswordSecurity = () => {
  const { startValidatePassword, setPasswordForValidate, password = "", startClearData} = usePasswordValidate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(password.trim().length === 0) return;
    startValidatePassword();
  }

  const handleChangePasswordField = ({ target }) => {
    setPasswordForValidate({ password: target.value });
  }

  useEffect(() => {
    startClearData();
  }, []);
  

  return (
    <PasswordLayout title="Validar seguridad de contrase&ntilde;as">
      <form onSubmit={onSubmitForm}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
                type='password'
                label={"Contraseña"}
                fullWidth
                name='txtPassword'
                sx={{
                    backgroundColor: "white",
                    color: "white"
                }}
                value={password}
                onChange={handleChangePasswordField}
            />
          </Grid>
          
          <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth sx={{ mt: 2 }}>Validar contrase&ntilde;a</Button>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"} mt={2}>
              <Link component={ RouterLink } color={"inherit"} to="/generate" sx={{ color: "white" }}>
                  Generar contrase&ntilde;as
              </Link>
          </Grid>

          <Passwords />

        </Grid>
      </form>
    </PasswordLayout>
  );
}