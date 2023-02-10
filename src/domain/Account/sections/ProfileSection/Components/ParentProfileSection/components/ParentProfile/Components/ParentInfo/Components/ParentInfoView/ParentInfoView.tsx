import { profileInfoProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';

export const ParentInfoView = (model:profileInfoProps) => {
    return (
        <Grid container spacing={3}>
            <Grid xs>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
                    <Typography>{model.firstName} {model.lastName}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Email Address</Typography>
                    <Typography>{model.email}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Address</Typography>
                    <Typography>{model.address}</Typography>
                    <Typography>{model.city}, {model.state} {model.zipCode} </Typography>
                    <Typography>{model.country}</Typography>
                </Stack>
            </Grid>
            <Grid xs>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>Phone Number</Typography>
                    <Typography>{model.phone}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Contract Preference</Typography>
                    <Typography>Email</Typography>
                    <Typography>Text</Typography>
                    <Typography>Phone</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}