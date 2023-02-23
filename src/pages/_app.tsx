import { Layout } from '@/common/components/Layout';
import '@/common/styles/globals.css';
import { theme } from '@/common/themes/Theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    {(pageProps && pageProps.pathname) === '/' ||
                    (pageProps && pageProps.pathname) === '/login' ||
                    (pageProps && pageProps.pathname) === '/signup' ||
                    (pageProps && pageProps.pathname) === '/select' ? (
                        <Component {...pageProps} />
                    ) : (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    )}
                </ThemeProvider>
            </RecoilRoot>
        </QueryClientProvider>
    );
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
