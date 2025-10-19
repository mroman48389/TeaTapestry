export function generateFixedWavePath(segmentCount: number = 20, segmentWidth: number = 15, amplitude: number = 8): string {
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
