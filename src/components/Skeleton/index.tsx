import React from 'react';

export interface SkeletonProps {
  lines?: number; // Quantidade de linhas (retângulos)
  circle?: boolean; // Se true, renderiza um círculo
  width?: number | string; // Largura customizada
  height?: number | string; // Altura customizada
  style?: React.CSSProperties; // Estilo extra
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  lines = 1,
  circle = false,
  width,
  height,
  style,
  className,
}) => {
  if (circle) {
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          borderRadius: '50%',
          background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
          width: width || 40,
          height: height || 40,
          ...style,
        }}
        aria-busy="true"
      />
    );
  }

  const lineStyle: React.CSSProperties = {
    height: height || 16,
    width: width || '100%',
    borderRadius: 4,
    background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
    marginBottom: 8,
    ...style,
  };

  return (
    <span className={className} aria-busy="true">
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} style={lineStyle} />
      ))}
    </span>
  );
};

export default Skeleton;
