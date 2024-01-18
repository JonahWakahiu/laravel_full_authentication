import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "../Layouts/GuestLayout";
import InputLabel from "../Components/InputLabel";
import TextField from "../Components/TextField";
import { CiLock, CiUnlock } from "react-icons/ci";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";

const Register = () => {
    const [viewPassword, setViewPassword] = useState("password");
    const [viewPasswordConfirmation, setViewPasswordConfirmation] =
        useState("password");

    const { data, setData, errors, post, processing } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();
        post("/register");
    };
    return (
        <GuestLayout>
            <Head title="Register" />

            <form className="form" onSubmit={handleRegister}>
                <h1 className="form_title">Create an account</h1>
                <div className="form_divider"></div>

                <div>
                    <InputLabel value="Name" htmlFor="name" />
                    <TextField
                        name="name"
                        value={data.name}
                        id="name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p className="form_error">{errors.name}</p>}
                </div>

                <div>
                    <InputLabel value="Email" htmlFor="email" />
                    <TextField
                        name="email"
                        value={data.email}
                        id="email"
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
                            value={data.password}
                            type={viewPassword}
                            id="password"
                            autoComplete="new-password"
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

                <div>
                    <InputLabel
                        value="Confirm your password"
                        html="password_confirmation"
                    />
                    <div className="form_password">
                        <TextField
                            name="password_confirmation"
                            value={data.password_confirmation}
                            type={viewPasswordConfirmation}
                            id="password_confirmation"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {viewPasswordConfirmation === "password" ? (
                            <CiLock
                                onClick={() =>
                                    setViewPasswordConfirmation("text")
                                }
                            />
                        ) : (
                            <CiUnlock
                                onClick={() =>
                                    setViewPasswordConfirmation("password")
                                }
                            />
                        )}
                    </div>

                    <div className="form_actions">
                        <Link to="/login">Already registered?</Link>

                        <PrimaryButton type="submit" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
};
export default Register;
