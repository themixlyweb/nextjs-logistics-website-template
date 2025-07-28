import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ThemeProvider = ({
  children
}) => {
  const {
    pathname
  } = useRouter();

  const removePageLoader = () => {
    const pageLoader = document.querySelector('.page-loader');

    if (pageLoader) {
      pageLoader.remove();
    }
  };

  useEffect(() => {
    if (typeof window === undefined) return; // Change the color and font based on route
    let timer;
    timer = setTimeout(() => removePageLoader(), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return <>{children}</>;
};

export default ThemeProvider;