declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.svg?react' {
  import type React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;

  export default ReactComponent;
}
