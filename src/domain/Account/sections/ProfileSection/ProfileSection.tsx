import React from 'react';
import { css } from '@emotion/react';
import { StudentProfileSection, ParentProfileSection, GuardianProfileSection } from './Components';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Stack } from '@mui/system';
import { Avatar, Divider, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useProfileSection } from "../../hooks/useProfileSection";
import { StudentProfileResponse } from '@/data/api/account/account.dto';
import { useRecoilValue } from 'recoil';
import { studentMapState } from "@/common/atom/Atom";

export interface profileProps {
    photoTitle:string;
    photoUrl:string;
    isEdit: boolean;
    parentIndex?: number;
    infomation: StudentProfileResponse;
}

export const ProfileSection = () => {
    const [isEdit, setIsEdit] = React.useState(false);
    const currenStudentMap: any = useRecoilValue(studentMapState);
    const parentEmail = currenStudentMap.parent_email;
    const data = useProfileSection(parentEmail);

    const fnMakeList = function(data: any) {
        if(data.length === 0) {
            return '';
        } else if(data.length === 1) {
            return (
                <>
                    <StudentProfileSection 
                        isEdit={isEdit} 
                        photoTitle='Student'
                        photoUrl=''
                        infomation={data[0]}
                    />
    
                    <Divider />

                    {
                        data.parent_email !== null
                            ? (
                                <>
                                    <ParentProfileSection 
                                        isEdit={isEdit} 
                                        photoTitle='Parent'
                                        photoUrl=''
                                        parentIndex={1}
                                        infomation={data[0]}
                                    />
                
                                    <Divider />
                                </>
                            )
                            : ''
                    }

                    {
                        data.parent_email2 !== null
                            ? (
                                <>
                                    <ParentProfileSection 
                                        isEdit={isEdit} 
                                        photoTitle='Parent'
                                        photoUrl=''
                                        parentIndex={2}
                                        infomation={data[0]}
                                    />
                
                                    <Divider />
                                </>
                            )
                            : ''
                    }

                    {/* <GuardianProfileSection 
                        isEdit={isEdit} 
                        photoTitle='Guardian'
                        photoUrl=''
                    /> */}
                </>
            );
        }
    }

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
                        <></>
                        /* ToDo : Phase 1.
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
                        */
                        :
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" size="medium" onClick={handleChangeIsEdit} >Cancel</Button>
                            <Button variant="contained" size="medium" color="secondary" >Save</Button>
                        </Stack>
                    }

                </Stack>

                <Divider />

                {fnMakeList(data)}
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
