import { ResourcesView } from '@/domain/Resources/views';
import { NextPage } from 'next';
import { Stack } from '@mui/material'

const ResourcesPage: NextPage = () => {
    return <Stack sx={{
        position:'absolute',
        top : '50%',
        left : '40%',
        fontSize : '50pt'        
    }}
    >
        Coming Soon
    </Stack>;
    //return <ResourcesView />;
};

export default ResourcesPage;
