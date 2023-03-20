import GenericLayout from "@/layouts/GenericLayout";
import { ReactElement } from "react";

const Dashboard = () => {
    return (
        <>
            <p>Index Dashboard</p>
        </>
    )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <GenericLayout>
                {page}
            </GenericLayout>
        </>
    )
}

export default Dashboard;
