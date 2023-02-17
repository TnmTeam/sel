
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Colors, NavigationItems, WhiteButtons } from '@/common/themes/Color';
import { Stack, Box, AppBar, Typography, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import LogoImage from '@/assets/logo/Frame.png';
import { useRouter } from 'next/router';
import { TextMenu } from './components/TextMenu/TextMenu';
import { InsightsDialogButton } from '@/domain/Navigation/sections/AddInsightsSection/components';
import { NotificationDialogIcon } from '@/domain/Navigation/sections/NotificationSection/NotificationSummary/components';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { css } from '@emotion/react';
import NativeSelect from '@mui/material/NativeSelect';
import { StudentCourseItemType } from './components/TextMenu/types/textMenu.types';


interface StudentCourseListProps {
  studentCourseList: StudentCourseItemType[];
}

export const Appbar = ({ studentCourseList }: StudentCourseListProps) => {
    const router = useRouter();
    const currentRoute = router.pathname;

    const menu = [
        { menuType: 'logo', url: '', title: '', buttonType: '' },
        { menuType: 'TextField', url: '', title: 'Student', buttonType: '' },
        { menuType: 'blank', url: '', title: '', buttonType: '' },
        {
            menuType: 'button',
            url: '/overview',
            title: 'Overview',
            buttonType: 'text',
        },
        {
            menuType: 'button',
            url: '/progress',
            title: 'Progress',
            buttonType: 'text',
        },
        {
            menuType: 'button',
            url: '/growth',
            title: 'Growth',
            buttonType: 'text',
        },
        {
            menuType: 'button',
            url: '/resources',
            title: 'Resources',
            buttonType: 'text',
        },
        {
            menuType: 'buttonPopup',
            url: '/addinsights',
            title: 'Add Insights',
            buttonType: 'outline',
        },
        { menuType: 'icon', url: '', title: '', buttonType: '' },
        {
            menuType: 'button',
            url: '/account',
            title: 'Account',
            buttonType: 'text',
        },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ height: 89, background: Colors.BackBlue }}
            >
                <Toolbar component='div' sx={{ height: 89 }}>
               
                    {menu.map((item, index) => {
                        
                        if (item.menuType === 'button') {
                            return (
                                <TextMenu
                                    key={index}
                                    url={item.url}
                                    currentRoute={currentRoute}
                                    title={item.title}
                                    buttonType={item.buttonType}
                                />
                            );
                        } else if (item.menuType === 'buttonPopup') {
                            return <InsightsDialogButton key={index} />;
                        } else if (item.menuType === 'logo') {
                            return (
                                <Link
                                    key={index}
                                    css={{ textDecoration: 'none' }}
                                    href='/overview'
                                >
                                    <Button>
                                        <Logo />
                                    </Button>
                                </Link>
                            );
                        } else if (item.menuType === 'blank') {
                            return (
                                <Typography
                                    key={index}
                                    variant='h6'
                                    component='div'
                                    sx={{ flexGrow: 1 }}
                                ></Typography>
                            );
                        } else if (item.menuType === 'icon') {
                            return <NotificationDialogIcon key={index} />;
                        }else if (item.menuType === 'TextField') {
                            return (
                                <Student key={index} 
                                studentCourseList={studentCourseList} />
                                
                            );
                        }
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const Logo = () => {
    return (
        <Stack css={{ margin: '0px 0px 0px 0px' }}>
            <Image src={LogoImage} alt={'img'} width={'150'} />
        </Stack>
    );
};

const Student = ({ studentCourseList }: StudentCourseListProps) => {
/*
    const [ searchYear, setSearchYear ] = useState("");
    const [ searchMonth, setSearchMonth ] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, type: string) => {
        const value = e.target.value;
        type === 'year' ? setSearchYear(value) : setSearchMonth(value)
    }
*/
    return (
        <div >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 110 , fontSize: 5}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Student
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                    name: 'Student',
                    id: 'uncontrolled-native',
                    }}
                   // onChange={(e) => handleChange(e, 'year')}
                >
                    {studentCourseList.map((it, index) => (
                        <StudentCourseOption key={index} student={it.student} course={it.course}  />
                    )
                    )}
                    
                </NativeSelect>
            </FormControl>
            </div>
    );
};

const StudentCourseOption = ({student, course}: StudentCourseItemType) => {
 return <option value={student} > {student}</option>
}
