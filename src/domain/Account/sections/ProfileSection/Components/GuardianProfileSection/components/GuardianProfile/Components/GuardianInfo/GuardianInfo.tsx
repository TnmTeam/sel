import { Stack } from '@mui/system';
import { profileProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { GuardianInfoEdit, GuardianInfoView } from './Components';

export const GuardianInfo = (props:profileProps) => {
    const {isEdit} = props;
    const model = {
        firstName : 'John',
        lastName : 'Doe',
        email : 'johndoe@gmail.com',
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
                    !isEdit?
                    <GuardianInfoView 
                        // {...model}
                    />
                    :
                    <GuardianInfoEdit 
                        // {...model}
                    />
                }
            </Stack>
        </>
    );
}