import { motion, useTransform, useMotionValue } from 'framer-motion';
import { colors } from '@/styles/themes/general';

import type { IProps, IPropsIconError } from './types';

export const UiCircularProgress = ({
  height = 129,
  timeDuration = 3,
  timeProgress = 90,
  type = 'success',
  width = 129,
}: IProps) => {
  const progress = useMotionValue(timeProgress);

  const colorType = type === 'success' ? colors.success : colors.danger;

  const circleLength = useTransform(progress, [0, 100], [0, 1]);
  const markPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);
  const circleColor = useTransform(
    progress,
    [0, 95, 100],
    [colors.primary, colors.primary, colorType]
  );

  const IconCheck = () => (
    <motion.path
      transform="translate(60 85)"
      d="M3 50L45 92L134 3"
      fill="transparent"
      stroke={colors.success}
      strokeWidth={8}
      style={{ pathLength: markPathLength }}
    />
  );

  const IconError = ({ y1 = 30, y2 = 170, custom = 2 }: IPropsIconError) => (
    <motion.line
      transform="translate(-160 30)"
      x1="220"
      y1={y1}
      x2="360"
      y2={y2}
      stroke={colors.danger}
      strokeWidth={8}
      custom={custom}
      style={{ pathLength: markPathLength }}
    />
  );

  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        style={{ x: progress }}
        transition={{ duration: timeDuration }}
      />

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 258 258"
      >
        {type === 'success' ? (
          <IconCheck />
        ) : (
          <>
            <IconError />
            <IconError custom={2.5} y1={170} y2={30} />
          </>
        )}
        {/* Circle */}
        <motion.path
          d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
          fill="transparent"
          strokeWidth="8"
          stroke={circleColor}
          style={{
            pathLength: circleLength,
          }}
        />
      </motion.svg>
    </>
  );
};
