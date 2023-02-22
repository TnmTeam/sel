import { SignupView } from '@/domain/Signup/SignupView';
import { NextPage } from 'next';

const SignupPage: NextPage = () => {
    return <SignupView />;
};

SignupPage.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};

export default SignupPage;
