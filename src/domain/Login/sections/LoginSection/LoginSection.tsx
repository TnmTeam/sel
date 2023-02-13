import { Grid } from '@mui/material';
import { Authentication, Previews } from './components';

export const LoginSection = () => {
    return (
        <Grid container>
            <Previews />
            <Authentication />
        </Grid>
    );
};
// d