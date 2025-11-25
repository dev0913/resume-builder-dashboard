
import { useEffect, useState } from "react";

const useDimensions = (containerRef: React.RefObject<HTMLDivElement | null>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const currentRef = containerRef.current;

        if (!currentRef) return;

        const getDimension = () => ({
            width: currentRef.offsetWidth || 0,
            height: currentRef.offsetHeight || 0
        });

        // Set initial dimensions
        setDimensions(getDimension());

        // Create a ResizeObserver
        const resizeObserver = new ResizeObserver(() => {
            setDimensions(getDimension());
        });

        // Observe the element
        resizeObserver.observe(currentRef);

        return () => {
            resizeObserver.unobserve(currentRef);
            resizeObserver.disconnect();
        };
    }, [containerRef.current]); // Depend on `containerRef.current` instead of `containerRef`

    return dimensions;
};

export default useDimensions;
