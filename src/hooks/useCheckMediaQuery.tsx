// import { useEffect, useState } from "react";

// const useCheckMediaQuery = () => {
//   const [isMobileScreen, setIsMobileScreen] = useState<boolean>();

//   const mediaQueries = [
//     "(min-width: 375px)",
//     "(min-width: 576px)",
//     "(min-width: 768px)",
//     "(min-width: 1024x)",
//     "(min-width: 1280x)",
//     "(min-width: 1440x)",
//   ];

//   useEffect(() => {
//     // mediaQueries.forEach((query) => console.log(query));

//     const mediaQueries = window.matchMedia(`
//       (min-width: 375px),
//       (min-width: 576px),
//       (min-width: 768px),
//       (min-width: 1024x),
//       (min-width: 1280x),
//       (min-width: 1440x)
//       `);

//     console.log(mediaQueries);

//     const mediaQuery = window.matchMedia(mediaQueries.toString());
//     console.log(mediaQuery.media);
//     const mediaQueryArray = mediaQuery.media.split(", ");
//     console.log(mediaQueryArray);

//     // const mediaQuery = window.matchMedia("(min-width: 375px)");

//     const handleMediaQueryChange = (e: MediaQueryListEvent) => {
//       setIsMobileScreen(e.matches);
//     };

//     mediaQueries.addEventListener("change", handleMediaQueryChange);

//     // Initial check
//     setIsMobileScreen(mediaQuery.matches);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return isMobileScreen;
// };

// export default useCheckMediaQuery;
