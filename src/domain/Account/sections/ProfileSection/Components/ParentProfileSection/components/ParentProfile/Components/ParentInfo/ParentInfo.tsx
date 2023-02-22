import { Stack } from '@mui/system';
import { profileProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { ParentInfoEdit, ParentInfoView } from './Components';

export const ParentInfo = (props:profileProps) => {
    const {isEdit, parentIndex} = props;
    const model = props.infomation;

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
                        parentIndex={parentIndex}
                    />
                    :
                    <ParentInfoEdit 
                        {...model}
                        parentIndex={parentIndex}
                    />
                }
            </Stack>
        </>
    );
}