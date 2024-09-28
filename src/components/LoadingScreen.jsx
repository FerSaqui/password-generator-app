import { Rings } from 'react-loader-spinner';
import { Grid } from '@mui/material';

export const LoadingScreen = ({ type, color }) => {
    return (
        <Grid container mt={2}>
            <Grid item xs={12}>
                <Rings color="#00BFFF" height={80} width={80} />
            </Grid>
        </Grid>
    )
};