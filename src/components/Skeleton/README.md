# Skeleton Component

Componente de carregamento para exibir placeholders.

## Uso Básico

```tsx
import Skeleton from '../Skeleton';

// Linha única
<Skeleton />

// Várias linhas
<Skeleton lines={3} />

// Bola
<Skeleton circle width={48} height={48} />

// Customizando largura/altura
<Skeleton width={200} height={24} />
```

## Props
- `lines`: número de linhas (default: 1)
- `circle`: exibe um círculo (default: false)
- `width`: largura customizada
- `height`: altura customizada
- `style`: estilos adicionais
- `className`: classe CSS extra
