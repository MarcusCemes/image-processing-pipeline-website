import { useColorMode } from "@chakra-ui/react";
import OriginalLayoutProviders from "@theme-original/LayoutProviders";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { PropsWithChildren, ReactElement, useLayoutEffect } from "react";

/** Custom layout extensions */
export default function LayoutProviders({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <OriginalLayoutProviders>
      <ThemeSync />
      {children}
    </OriginalLayoutProviders>
  );
}

/** Keep ChakraUI colour mode in sync with Docusaurus */
export function ThemeSync() {
  const { isDarkTheme } = useThemeContext();
  const { setColorMode } = useColorMode();

  useLayoutEffect(() => {
    setColorMode(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return null;
}
