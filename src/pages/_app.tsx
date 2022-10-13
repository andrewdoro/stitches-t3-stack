// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { theme } from '../styles/stitches.config';
import { ThemeProvider } from 'next-themes';
import { globalStyles } from '../styles';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        value={{
          dark: theme.dark.className,
          light: theme.light.className
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
