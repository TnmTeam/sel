import { LoginView } from '@/domain/Login/views';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
    return <LoginView />;
};

LoginPage.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};

export default LoginPage;
