import { MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';

type DataType = {
    name: string;
    email: string;
    grade: string;
    school: string;
};

export const StudentInfoEdit = (model:DataType) => { 
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '45%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    defaultValue={model.name}
                />
                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    defaultValue={model.email}
                />
            </div>
                {/* <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    defaultValue={model.phone}
                /> */}
                {/* <TextField
                    id="outlined-basic"
                    label="Address"
                    defaultValue={model.address}
                /> */}
                {/* <TextField
                    id="outlined-select-currency"
                    select
                    label="Country"
                    defaultValue={model.country}
                    >
                    <MenuItem key="USA" value="USA">
                        USA
                    </MenuItem>
                </TextField>
                
                <TextField
                    id="outlined-basic"
                    label="State/Region"
                    defaultValue={model.state}
                /> */}
                {/* <TextField
                    id="outlined-basic"
                    label="City"
                    defaultValue={model.city}
                />
                <TextField
                    id="outlined-basic"
                    label="Zip Code"
                    defaultValue={model.zipCode}
                /> */}
            <div>
                <TextField
                    id="outlined-basic"
                    label="School"
                    defaultValue={model.school}
                />
                <TextField
                    id="outlined-basic"
                    label="Grade"
                    defaultValue={model.grade}
                />
            </div>
                {/* <TextField
                    id="outlined-basic"
                    label="Facebook"
                    defaultValue={model.facebook}
                />
                <TextField
                    id="outlined-basic"
                    label="Instagram"
                    defaultValue={model.instagram}
                /> */}
                {/* <TextField
                    id="outlined-basic"
                    label="Tiktok"
                    defaultValue={model.tiktok}
                /> */}
        </Box>
    )
}