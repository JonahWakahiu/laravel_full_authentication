import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "../Components/PrimaryButton";

const VerifyEmail = ({ status, resend_url }) => {
    const { post, processing } = useForm({});

    const handleResend = (e) => {
        e.preventDefault();
        post(resend_url);
    };
    return (
        <main className="email_container">
            <Head title="Email Verify" />

            <section className="email_verification">
                <h1 className="email_verification-title">Verify your email</h1>
                <p className="email_verification-desc">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? if you didn't receive the email, we will
                    gladly send you another.
                </p>
                {status === "verification-link-sent" && (
                    <p className="email_verification-alert">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </p>
                )}
                <form onSubmit={handleResend}>
                    <div className="email_verification-actions">
                        <PrimaryButton type="submit" disabled={processing}>
                            RESEND VERIFICATION EMAIL
                        </PrimaryButton>
                        <Link href="#">Logout</Link>
                    </div>
                </form>
            </section>
        </main>
    );
};
export default VerifyEmail;
