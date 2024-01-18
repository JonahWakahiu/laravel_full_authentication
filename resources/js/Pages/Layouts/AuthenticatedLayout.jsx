import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "../Components/PrimaryButton";

const AuthenticatedLayout = ({ logout_url }) => {
    const { post } = useForm({});

    const handleLogout = (e) => {
        e.preventDefault();
        post(logout_url);
    };
    return (
        <main className="authenticated_layout">
            <Head title="Dashboard" />
            <aside className="sidebar">
                <p>Sidebar</p>
            </aside>

            <article>
                <nav className="navbar">
                    <h5>welcome to dashboard</h5>
                    <form onSubmit={handleLogout}>
                        <PrimaryButton type="submit">Logout</PrimaryButton>
                    </form>
                </nav>
                <section className="main_content">
                    <p>You have successfully login</p>
                </section>
            </article>
        </main>
    );
};
export default AuthenticatedLayout;
