import React from 'react';

declare global {
  // This declaration extends the JSX namespace to fix the "JSX element implicitly has type 'any'" error
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  declare module 'react' {
    export const useState: any;
    export const useEffect: any;
    export const createContext: any;
    export const useContext: any;
  }
  // Define ReactNode for type checking in component props
  namespace React {
    type ReactNode = React.ReactElement | string | number | boolean | null | undefined | React.ReactNodeArray;
  }
}
