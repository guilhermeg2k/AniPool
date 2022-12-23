import LoadingPage from '@components/core/LoadingPage';
import { toastError } from '@libs/toastify';
import authService from '@services/authService';
import { sendUserHasAuthenticated } from '@utils/channelUtils';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const getAccessTokenFromUrl = (url: string) => {
  /* Anilist OAuth appends access token in a fragment (#), the url will looks like:
      http://localhost:3000/auth#access_token={token}&token_type=Bearer&expires_in={expires_in}
  */
  const urlFragment = url.split('#')[1];
  if (urlFragment) {
    const fragmentParameters = urlFragment.split('&')[0];
    if (fragmentParameters) {
      const accessTokenValue = fragmentParameters.split('=')[1];
      return accessTokenValue;
    }
  }
  return null;
};

const Auth: NextPage = () => {
  const router = useRouter();

  const authenticateUser = async (accessToken: string) => {
    try {
      const userToken = await authService.signWithAnilistAccessToken(
        accessToken
      );
      Cookies.set('userToken', userToken);
      sendUserHasAuthenticated();
      window.close();
    } catch (error) {
      toastError('Failed to authenticate user');
    }
  };

  useEffect(() => {
    const accessToken = getAccessTokenFromUrl(router.asPath);
    if (accessToken) {
      authenticateUser(accessToken);
    }
  }, []);

  return <LoadingPage text="Authenticating..." title="Authenticating" />;
};

export default Auth;
