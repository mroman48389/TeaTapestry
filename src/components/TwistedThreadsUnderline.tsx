import { ComponentProps } from 'react';
import { motion }  from 'motion/react';

import { APP_COLORS } from '@/constants/app';
import { generateFixedWavePath } from '@/utils/svg-utils';

type TwistedThreadsUnderlineProps = {
    width: number;
} & ComponentProps<typeof motion.svg>;

export default function TwistedThreadsUnderline(props: TwistedThreadsUnderlineProps) {
    const {width, ...rest} = props;

    const segmentWidth = 50; /* higher number = more stretched out waves */
    const segmentCount = Math.ceil(width / segmentWidth); // ensures full segment coverage
    const totalPathWidth = segmentCount * segmentWidth;
    const amplitude = 8; /* controls how tightly knit the threads are to each other */
    const topPath = generateFixedWavePath(segmentCount, segmentWidth, amplitude);
    const bottomPath = generateFixedWavePath(segmentCount, segmentWidth, -amplitude); // reversed amplitude

    return (
        <div data-testid="twisted-threads-underline" className="twisted-threads-underline">
            <motion.svg
                width={totalPathWidth}
                height="20" 
                aria-hidden="true"
                viewBox={`0 0 ${totalPathWidth} 20`}
                initial="hidden"
                animate={"visible"}
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 }
                }}
                transition={{ duration: 1.5 }}
                preserveAspectRatio="xMinYMin meet" 
                {...rest}
            >
                <defs>
                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={APP_COLORS.DUANNI_YELLOW} />
                        <stop offset="100%" stopColor={APP_COLORS.ZISHA_BROWN} />
                    </linearGradient>
                </defs>

                {/* Top thread (Duanni yellow) */}
                <motion.path
                    d={topPath}
                    stroke={APP_COLORS.DUANNI_YELLOW}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Bottom thread (Zisha brown) */}
                <motion.path
                    d={bottomPath}
                    stroke={APP_COLORS.ZISHA_BROWN}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Leaf */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                >
                    {/* Outer shape */}
                    <path
                        d={
                            `M${totalPathWidth},10 
                            C${totalPathWidth - 12},4 ${totalPathWidth - 20},4 ${totalPathWidth - 22},10 
                            C${totalPathWidth - 20},16 ${totalPathWidth - 12},16 ${totalPathWidth},10 
                            Z`
                        }
                        fill="url(#leafGradient)"
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="1"
                    />

                    {/* Center vein */}

                    <path
                        d={`M${totalPathWidth - 22},10 L${totalPathWidth},10`}
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="0.5"
                        opacity="0.6"
                    />
                    
                    {/* Side veins */}

                    <path
                        d={`M${totalPathWidth - 16},10 L${totalPathWidth - 14},7`}
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="0.4"
                        opacity="0.5"
                    />

                    <path
                        d={`M${totalPathWidth - 16},10 L${totalPathWidth - 14},13`}
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="0.4"
                        opacity="0.5"
                    />

                    <path
                        d={`M${totalPathWidth - 10},10 L${totalPathWidth - 8},7`}
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="0.4"
                        opacity="0.5"
                    />

                    <path
                        d={`M${totalPathWidth - 10},10 L${totalPathWidth - 8},13`}
                        stroke={APP_COLORS.ZISHA_BROWN}
                        strokeWidth="0.4"
                        opacity="0.5"
                    />

                </motion.g>
            </motion.svg>
        </div>
    );
}