import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"

type DataType = {
    parent_email: string;
    parent_name: string;
    parent_phone: string;
    parent_email2: string;
    parent_name2: string;
    parent_phone2: string;
    parentIndex?: number;
};

export const ParentInfoEdit = (model: DataType) => {
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
                    defaultValue={model.parentIndex === 1 ? model.parent_name : model.parent_name2}
                />
                {/* <TextField
                    id="outlined-basic"
                    label="Last Name"
                    defaultValue={model.lastName}
                /> */}
                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    defaultValue={model.parentIndex === 1 ? model.parent_email : model.parent_email2}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    defaultValue={model.parentIndex === 1 ? model.parent_phone : model.parent_phone2}
                />
            </div>
                {/* <TextField
                    id="outlined-basic"
                    label="Contact Preference"
                    defaultValue={model.firstName}
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
        </Box>
    )
}