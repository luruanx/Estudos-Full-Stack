import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card = ({ children }: Props) => {
    return (
        <div className="border-2 border-red-600 p3 text-center">
            {children}
        </div>
    );
}