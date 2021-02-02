import { ChakraProvider, theme } from "@chakra-ui/react";
import OriginalRoot from "@theme-original/Root";
import React, { PropsWithChildren, ReactElement } from "react";

/** Wrap the application with custom providers */
export default function Root({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <OriginalRoot>
      <Providers>{children}</Providers>
    </OriginalRoot>
  );
}

// Chakra overrides the body background colour
const themeConfig = {
  ...theme,
  styles: {
    global: {},
  },
};

/** Provide theme context for the ChakraUI library */
export function Providers({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <ChakraProvider resetCSS={false} theme={themeConfig}>
      {children}
    </ChakraProvider>
  );
}
