import Button from './Button';

const MyAnimeListIcon = () => (
  <svg
    viewBox="256 409.33 512 205.38"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width="24"
    height="24"
  >
    <path d="M432.49 410.61V590.3l-44.86-.06V479l-43.31 51.29-42.43-52.44-.43 112.75H256V410.65h47l39.79 54.29 43-54.31zm184.06 44.14.53 135.15h-50.45l-.17-61.25h-59.73c1.49 10.65 4.48 27 8.9 38 3.31 8.13 6.36 16 12.44 24.06l-36.37 24c-7.45-13.57-13.27-28.52-18.73-44.42a198.31 198.31 0 0 1-10.82-46.49c-1.81-16-2.07-31.38 2.28-47.19a83.37 83.37 0 0 1 24.77-39.81c6.68-6.25 16-10.67 23.47-14.66s15.85-5.63 23.62-7.66a158 158 0 0 1 25.41-3.9c8.49-.73 23.62-1.41 51-.6l11.63 37.31h-58.78c-12.65.17-18.73 0-28.61 4.46a47.7 47.7 0 0 0-27.26 41l56.81.7.81-38.61h49.26zM701.72 410v141.35L768 552l-9.17 37.87H656.28V409.33z" />
  </svg>
);

const MyAnimeListSignInButton = () => {
  const openAuthPage = () => {
    window.open('/auth/sign-in/by/MAL', '_blank');
  };

  return (
    <Button
      size="large"
      className="bg-[#2e51a2] hover:bg-[#3a62c0] active:bg-[#2e51a2] w-full"
      onClick={openAuthPage}
      name="Sign in with My Anime List"
    >
      Sign in with MyAnimeList
      <MyAnimeListIcon />
    </Button>
  );
};

export default MyAnimeListSignInButton;
