import { SignupSection } from './sections';
import Grid from '@mui/material/Grid';
import { Previews } from '@/domain/Login/sections/LoginSection/components/Previews/Previews';

export const SignupView = () => {
    return (
        <Grid container height={'100%'}>
            <Previews />
            <SignupSection />
        </Grid>
    );
};
