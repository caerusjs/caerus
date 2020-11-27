import { AppProps } from 'next/app';
import ApplicationLayout from '../layouts/application.layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  );
}

export default MyApp;
