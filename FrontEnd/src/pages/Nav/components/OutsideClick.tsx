import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    onOutsideClick: () => void;
}

function OutsideClick({ children, onOutsideClick }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [ref, onOutsideClick]);

    return <div ref={ref}>{children}</div>;
}

export default OutsideClick;
