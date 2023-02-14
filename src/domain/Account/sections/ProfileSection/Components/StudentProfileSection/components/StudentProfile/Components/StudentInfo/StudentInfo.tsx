import { Stack } from '@mui/system';
import { profileProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { StudentInfoEdit, StudentInfoView } from './Components';

export const StudentInfo = (props:profileProps) => {
    const {isEdit} = props;
    const model = {
        firstName : 'Jamie',
        lastName : 'Doe',
        email : 'jaiedoe@gmail.com',
        address : '1237 SW 83rd St.',
        country : 'USA',
        state : 'Califonia',
        city : 'San Jose',
        zipCode : '96522',
        phone : '733-334-6789',
        school : 'San Hose High School',
        grade : '10th Grade',
        facebook : 'facebook Id',
        instagram : 'instagram Id',
        tiktok : 'tiktok Id'
    }

    return (
        <>
            <Stack
                justifyContent="center"
                minHeight="400px"
            >
                {
                    !isEdit ?
                    <StudentInfoView 
                        {...model}
                    />
                    :
                    <StudentInfoEdit 
                        {...model}
                    />
                }
            </Stack>
        </>
    );
}