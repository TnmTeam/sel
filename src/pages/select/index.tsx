import { SelectView } from '@/domain/Select/SelectView'
import { NextPage } from 'next';

const SelectPage: NextPage = () => {
    return <SelectView />;
};

SelectPage.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};

export default SelectPage;
