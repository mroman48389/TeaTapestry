import { ComponentProps } from "react";
import { motion }  from 'motion/react';

type TwistedThreadsUnderlineProps = {
    width: number;
} & ComponentProps<typeof motion.svg>;

export default function TwistedThreadsUnderline(props: TwistedThreadsUnderlineProps) {
    const {width, ...rest} = props;

    const isHovered = true;
    const isActive = true;

    function generateFixedWavePath(segmentCount: number = 20, segmentWidth: number = 15, amplitude: number = 8): string {
        let path = `M0 10`; /* M= (M)ove to x = 0, y = 10 */
      
        for (let i = 0; i < segmentCount; i++) {
            /* Starting x position */
            const startX = i * segmentWidth;

            /* (C)ontrol (p)oints for Bezier curve. Control point 1 is the crest and control point 2 is the trough. */
            const cp1X = startX + segmentWidth / 3; 
            const cp1Y = 10 - amplitude;

            const cp2X = startX + 2 * segmentWidth / 3; 
            const cp2Y = 10 + amplitude;

            /* Ending position */
            const endX = startX + segmentWidth;
            const endY = 10;
      
            /* Add cubic Bezier curve to path. C = (C)urve to. */
            path += ` C${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
        }
      
        return path;
    }

    const segmentWidth = 50; /* higher number = more stretched out waves */
    const segmentCount = Math.ceil(width / segmentWidth); // ensures full segment coverage
    const totalPathWidth = segmentCount * segmentWidth;
    const amplitude = 8; /* controls how tightly knit the threads are to each other */
    const topPath = generateFixedWavePath(segmentCount, segmentWidth, amplitude);
    const bottomPath = generateFixedWavePath(segmentCount, segmentWidth, -amplitude); // reversed amplitude

    return (
        <motion.svg
            className="block"
            width={totalPathWidth}
            height="20" 
            aria-hidden="true"
            viewBox={`0 0 ${totalPathWidth} 20`}
            initial="hidden"
            animate={isHovered || isActive ? "visible" : "hidden"}
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
                    <stop offset="0%" stopColor="#C9A873" />
                    <stop offset="100%" stopColor="#7B5446" />
                </linearGradient>
            </defs>

            {/* Top thread (Duanni yellow) */}
            <motion.path
                d={topPath}
                stroke="#C9A873"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
            />

            {/* Bottom thread (Zisha brown) */}
            <motion.path
                d={bottomPath}
                stroke="#7B5446"
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
                    stroke="#7B5446"
                    strokeWidth="1"
                />

                {/* Center vein */}

                <path
                    d={`M${totalPathWidth - 22},10 L${totalPathWidth},10`}
                    stroke="#7B5446"
                    strokeWidth="0.5"
                    opacity="0.6"
                />
                
                {/* Side veins */}

                <path
                    d={`M${totalPathWidth - 16},10 L${totalPathWidth - 14},7`}
                    stroke="#7B5446"
                    strokeWidth="0.4"
                    opacity="0.5"
                />

                <path
                    d={`M${totalPathWidth - 16},10 L${totalPathWidth - 14},13`}
                    stroke="#7B5446"
                    strokeWidth="0.4"
                    opacity="0.5"
                />

                <path
                    d={`M${totalPathWidth - 10},10 L${totalPathWidth - 8},7`}
                    stroke="#7B5446"
                    strokeWidth="0.4"
                    opacity="0.5"
                />

                <path
                    d={`M${totalPathWidth - 10},10 L${totalPathWidth - 8},13`}
                    stroke="#7B5446"
                    strokeWidth="0.4"
                    opacity="0.5"
                />

            </motion.g>

        </motion.svg>
    );
}