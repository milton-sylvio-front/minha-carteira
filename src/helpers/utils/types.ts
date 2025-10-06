export interface ICssTransform {
  translate?: string; // Ex: '10px, 20px'
  scale?: string; // Ex: '1.2'
  rotate?: string; // Ex: '45deg'
  skew?: string; // Ex: '10deg, 20deg'
  matrix?: string; // Ex: '1, 0, 0, 1, 0, 0'
  perspective?: string; // Ex: '500px'
  [key: string]: string | undefined;
}

export interface TranformProps {
  transform?: string;
}
