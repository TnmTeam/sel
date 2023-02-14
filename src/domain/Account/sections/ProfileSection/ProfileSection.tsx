import React from 'react';
import { css } from '@emotion/react';
import { StudentProfileSection, ParentProfileSection, GuardianProfileSection } from './Components';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Stack } from '@mui/system';
import { Avatar, Divider, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export interface profileProps {
    photoTitle:string;
    photoUrl:string;
    isEdit: boolean;
}

export interface profileInfoProps{
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    country:string;
    state:string;
    city:string;
    zipCode:string;
    phone:string;
}

export interface studentInfoProps extends profileInfoProps{
    school:string;
    grade:string;
    facebook:string;
    instagram:string;
    tiktok:string;
}


export const ProfileSection = () => {
    const [isEdit, setIsEdit] = React.useState(false);

    const handleChangeIsEdit = () => {
        setIsEdit( prev => !prev);
    }

    return (
        <>
            <Box css={sx.box}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography style={{margin: '50px'}} variant='h4'>Profile</Typography>
                    {
                        !isEdit ?
                        <IconButton
                            onClick={handleChangeIsEdit}
                        >
                            <Avatar 
                                style={{
                                    background: '#fff',
                                    border: '0.1px solid #147AD6',
                                    margin: '50px'
                                }}
                            >
                                <EditIcon color="secondary"/>
                            </Avatar>
                        </IconButton>
                        :
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" size="medium" onClick={handleChangeIsEdit} >Cancel</Button>
                            <Button variant="contained" size="medium" color="secondary" >Save</Button>
                        </Stack>
                    }

                </Stack>

                <Divider />
                
                <StudentProfileSection 
                    isEdit={isEdit} 
                    photoTitle='Student'
                    photoUrl='/assets/navigation/img-profile.png'
                />

                <Divider />

                <ParentProfileSection 
                    isEdit={isEdit} 
                    photoTitle='Parent'
                    photoUrl=''
                />

                <Divider />

                <GuardianProfileSection 
                    isEdit={isEdit} 
                    photoTitle='Guardian'
                    photoUrl=''
                />
            </Box>
        </>
    );
}

const sx = {
    box: css`
        borderRadius: '16px',
        margin:'50px 0px 0px 0px',
    `,
};
