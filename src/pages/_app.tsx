import { Layout } from '@/common/components/Layout';
import '@/common/styles/globals.css';
import { theme } from '@/common/themes/Theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { IntercomProvider, useIntercom } from 'react-use-intercom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const INTERCOM_APP_ID = `${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}`;

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <IntercomProvider
                        appId={INTERCOM_APP_ID}
                        autoBoot={false}
                        onUnreadCountChange={IntercomOnUnreadCountChange}
                        onHide={IntercomOnHide}
                        onShow={IntercomOnShow}
                    >
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
                    </IntercomProvider>
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

export const IntercomBoot = (studentName: string) => {
    const { boot } = useIntercom();
    if(studentName != ''){
        boot({ name: studentName });
    }
    
};

export const IntercomBootProps = (studentName: string) => {
    const { boot } = useIntercom();
    if(studentName != ''){
    boot({ name: studentName });
    }
};

export const IntercomBootUpdate = (studentName: string) => {
    const { boot } = useIntercom();
    if(studentName != ''){
        boot({ name: studentName });
    }
};

export const IntercomShutdown = () => {
    const { shutdown } = useIntercom();
    shutdown();
};

export const IntercomOnHide = () =>
    console.log('Intercom did hide the Messenger');
export const IntercomOnShow = () =>
    console.log('Intercom did show the Messenger');
export const IntercomOnUnreadCountChange = (amount: number) => {
    console.log('Intercom has a new unread message');
};
