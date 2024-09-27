import ReactLoading from 'react-loading';
import { Grid } from '@mui/material';

export const LoadingScreen = ({ type, color }) => {
    return (
        <Grid container mt={2}>
            <Grid item xs={12}>
                <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
            </Grid>
        </Grid>
    )
};