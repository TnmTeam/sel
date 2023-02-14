import { studentInfoProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';

export const StudentInfoEdit = (model:studentInfoProps) => { 
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
                    label="First Name"
                    defaultValue={model.firstName}
                />
                <TextField
                    id="outlined-basic"
                    label="Last Name"
                    defaultValue={model.lastName}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    defaultValue={model.email}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    defaultValue={model.phone}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Address"
                    defaultValue={model.address}
                />
            </div>
            <div>
                <TextField
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
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="City"
                    defaultValue={model.city}
                />
                <TextField
                    id="outlined-basic"
                    label="Zip Code"
                    defaultValue={model.zipCode}
                />
            </div>
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
            <div>
                <TextField
                    id="outlined-basic"
                    label="Facebook"
                    defaultValue={model.facebook}
                />
                <TextField
                    id="outlined-basic"
                    label="Instagram"
                    defaultValue={model.instagram}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Tiktok"
                    defaultValue={model.tiktok}
                />
            </div>
        </Box>
    )
}