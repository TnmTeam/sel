import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';

type DataType = {
    parent_email: string;
    parent_name: string;
    parent_phone: string;
    parent_email2: string;
    parent_name2: string;
    parent_phone2: string;
    parentIndex?: number;
};

export const ParentInfoView = (model: DataType) => {
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
                    <Typography>{model.parentIndex === 1 ? model.parent_name : model.parent_name2}</Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>Email Address</Typography>
                    <Typography>{model.parentIndex === 1 ? model.parent_email : model.parent_email2}</Typography>

                    {/* <Typography sx={{ fontWeight: 'bold' }}>Address</Typography> */}
                    {/* <Typography>{model.address}</Typography>
                    <Typography>{model.city}, {model.state} {model.zipCode} </Typography>
                    <Typography>{model.country}</Typography> */}
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
                    <Typography>{model.parentIndex === 1 ? model.parent_phone : model.parent_phone2}</Typography>

                    {/* <Typography sx={{ fontWeight: 'bold' }}>Contract Preference</Typography>
                    <Typography>Email</Typography>
                    <Typography>Text</Typography>
                    <Typography>Phone</Typography> */}
                </Stack>
            </Grid>
        </Grid>
    )
}