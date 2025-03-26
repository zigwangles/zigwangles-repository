import * as React from 'react';

declare global {
  const React: typeof React;
}

declare module 'react' {
    export * from 'react';
    export default React;
  }
  
  declare module 'next/link' {
    const Link: React.FC<{
      href: string;
      className?: string;
      children: React.ReactNode;
    }>;
    export default Link;
  }
  
  declare module 'next/dynamic' {
    export default function dynamic<T>(
      dynamicImport: () => Promise<{ default: T }>,
      options?: { ssr?: boolean }
    ): T;
  }
  
  declare module 'next' {
    export type NextPage<P = {}, IP = P> = React.ComponentType<P>;
  }