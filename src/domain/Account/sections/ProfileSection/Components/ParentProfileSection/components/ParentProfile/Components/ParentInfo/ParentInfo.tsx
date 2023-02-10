import { Stack } from '@mui/system';
import { profileProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { ParentInfoEdit, ParentInfoView } from './Components';

export const ParentInfo = (props:profileProps) => {
    const {isEdit} = props;
    const model = {
        firstName : 'Jane',
        lastName : 'Doe',
        email : 'janedoe@gmail.com',
        address : '1237 SW 83rd St.',
        country : 'USA',
        state : 'Califonia',
        city : 'San Jose',
        zipCode : '96522',
        phone : '733-334-6789',
    }

    return (
        <>
            <Stack
                justifyContent="center"
                minHeight="400px"
            >
                {
                    !isEdit ?
                    <ParentInfoView 
                        {...model}
                    />
                    :
                    <ParentInfoEdit 
                        {...model}
                    />
                }
            </Stack>
        </>
    );
}