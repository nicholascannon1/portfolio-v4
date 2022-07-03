import React, { useEffect, useState } from 'react';

const useIsVisible = (ref: React.RefObject<Element>, rootMargin?: string) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin });

        if (element) {
            observer.observe(element);
            window.addEventListener('scroll', () => observer.observe(element));

            return () => {
                window.removeEventListener('scroll', () => observer.observe(element));
                observer.unobserve(element);
            };
        }
    }, [ref, rootMargin]);

    return visible;
};

export default useIsVisible;
