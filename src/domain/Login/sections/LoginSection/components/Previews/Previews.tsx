import { css } from '@emotion/react';
import { Grid } from '@mui/material';
import { Colors } from '@/common/themes/Color';

export const Previews = () => {
    return (
        <Grid
            item
            xs={false}
            sm={6}
            md={6}
            sx={{
                background: Colors.BackBlue,
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></Grid>
    );
};

const sx = {
    sample: css``,
};
