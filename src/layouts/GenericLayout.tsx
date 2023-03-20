import WithSubnavigation from "@/components/shared/Navbar";
import { ReactNode } from "react";

const GenericLayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <WithSubnavigation />
            <div>
                {children}
            </div>
        </>
    )
}

export default GenericLayout;