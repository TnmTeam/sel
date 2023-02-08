import { Layout } from '@/common/components/Layout';
import '@/common/styles/globals.css';
import { theme } from '@/common/themes/Theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    if (
        (pageProps && pageProps.pathname) === '/' ||
        (pageProps && pageProps.pathname) === '/login'
    ) {
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        );
    }
}

App.getInitialProps = async (context: any) => {
    const { ctx, Component } = context;
    let pageProps = {};

    if (Component.getInitialProps) {
        // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
        pageProps = (await Component.getInitialProps(ctx)) || {};

        return { pageProps };
    } else {
        return {};
    }
};
