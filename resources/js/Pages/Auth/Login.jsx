import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "../Layouts/GuestLayout";
import InputLabel from "../Components/InputLabel";
import TextField from "../Components/TextField";
import { CiLock, CiUnlock } from "react-icons/ci";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

const Login = () => {
    const [viewPassword, setViewPassword] = useState("password");

    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post("/authenticate");
    };
    return (
        <GuestLayout>
            <Head title="Login" />

            <form className="form" onSubmit={handleLogin}>
                <h1 className="form_title">Welcome Back</h1>
                <div className="form_divider"></div>

                <div>
                    <InputLabel value="Email" htmlFor="email" />
                    <TextField
                        name="email"
                        value={data.email}
                        type="email"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <p className="form_error">{errors.email}</p>
                    )}
                </div>

                <div>
                    <InputLabel value="Password" htmlFor="password" />
                    <div className="form_password">
                        <TextField
                            name="password"
                            id="password"
                            type={viewPassword}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {viewPassword === "password" ? (
                            <CiLock onClick={() => setViewPassword("text")} />
                        ) : (
                            <CiUnlock
                                onClick={() => setViewPassword("password")}
                            />
                        )}
                    </div>
                    {errors.password && (
                        <p className="form_error">{errors.password}</p>
                    )}
                </div>

                <div className="form_actions">
                    <Link href="#">Forgot Password?</Link>
                    <PrimaryButton type="submit" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};
export default Login;
