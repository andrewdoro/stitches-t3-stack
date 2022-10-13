import { signIn, signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { trpc } from '../../../utils/trpc';

export const AuthShowcase: FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button onClick={sessionData ? () => signOut() : () => signIn()}>
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};
