import { studentInfoProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';

export const StudentInfoView = (model:studentInfoProps) => {
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

                    <Typography sx={{ fontWeight: 'bold' }}>Phone Number</Typography>
                    <Typography>{model.phone}</Typography>
                </Stack>
            </Grid>
            <Grid xs>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>School</Typography>
                    <Typography>{model.school}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Grade</Typography>
                    <Typography>{model.grade}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>FaceBook</Typography>
                    <Typography>{model.facebook}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Instagram</Typography>
                    <Typography>{model.instagram}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Tiktok</Typography>
                    <Typography>{model.tiktok}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}