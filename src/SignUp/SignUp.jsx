import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false)
    const navigation=useNavigate()

    // form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target,
            firstName = form.firstName.value,
            lastName = form.lastName.value,
            email = form.email.value,
            number = form.number.value,
            password = form.password.value,
            confirmPassword = form.confirmPassword.value;

        const userData = { firstName, lastName, email, password, confirmPassword }
        // checked validation 
        if (!agree) {
            return toast.error("You must agree to the terms and conditions!");

        }
        // password length validation
        if (!number.length > 11) {
            return toast.error("Number must be at least 11 digits!")
        }
        // password match validation
        if (password !== confirmPassword) {
            return toast.error("Password and Confirm Password do not match!")
        }
        // send data to server
        try {
            const res = await fetch("http://localhost:3000/SignUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            const data = await res.json();

            // handle response
            if (res.ok) {
                toast.success("User registered successfully 🎉");
                form.reset();
                setAgree(false);
                navigation('/signIn')
            } else {
                toast.error(data.message || "Failed to register");
            }
        } catch (error) {
            toast.error("Server Not Found", error);
        }

    }
    return (
        <div>
            <div className="w-[400px]  mx-auto  bg-black  text-white  justify-center items-center  rounded-2xl pb-2">
                <div>
                    {/* heading */}
                    <h2 className="text-2xl font-bold text-left px-4 py-2 rotate-[-6deg]"><span className="text-red-500">BLOOD</span>FIT</h2>
                    {/* subheading */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">WELCOME!</h2>
                        <p className="text-lg pb-2">Create an Account And Continue</p>
                    </div>
                    {/* form */}
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 space-y-3">
                            {/* first name */}
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="firstName" placeholder="Enter Your First Name" />
                            {/* last name */}
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="lastName" placeholder="Enter Your last Name" />
                            {/* email */}
                            <input className="input input-border border border-white rounded px-4 py-1" type="email" name="email" placeholder="Enter Your email Address" />
                            {/* phone number */}
                            <input className="input input-border border border-white rounded px-4 py-1" type="number" name="number" placeholder="Enter Your number" />
                            {/* password */}
                            <div className="relative w-full">
                                <input
                                    className="input input-border border border-white rounded px-4 py-1 w-full"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter Your password"
                                />

                                {/* Icon */}
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {/* confirm password */}
                            <div className="relative w-full">
                                <input className="input input-border border border-white rounded px-4 py-1 w-full" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Your password" />
                                <span className="absolute right-3  top-1/2 -translate-y-1/2 cursor-pointer text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {/* agreement */}
                            <div className="text-left flex gap-2">
                                <input type="checkbox" checked={agree}
                                    onChange={() => setAgree(!agree)} /><span>Agree to the terms and conditions</span>
                            </div>

                            <button className="bg-red-600 p-2 rounded-lg">Sign Up</button>
                        </form>
                        {/* link */}
                        <p>Already An Account? <Link to='/signIn' className="text-red-500">SignIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
