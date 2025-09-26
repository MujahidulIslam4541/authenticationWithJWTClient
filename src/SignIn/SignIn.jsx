import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false)

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password }

        if (!checked) {
            return toast.error("You must agree to the terms and conditions!")
        }
        try {
            const res = await fetch("http://localhost:3000/signIn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })
            const result = await res.json();
            console.log(result.data.token)
            // handle response
            if (res.ok) {
                toast.success("User login successfully 🎉");
                form.reset();
                setChecked(false);
                localStorage.setItem('token',result.data.token)
            } else {
               return toast.error(result.data.message || "Failed to login");
            }
        } catch (error) {
          return toast.error("Server Not Found", error)
        }
        // console.log(userData);

    }
    return (
        <div className="w-[400px]  mx-auto shadow-lg shadow-red-800/30  bg-black  text-white  justify-center items-center  rounded-2xl pb-6">
            {/* form Heading */}
            <h2 className="text-2xl font-extrabold text-left px-6 py-4 rotate-[-6deg]"><span className="text-red-500">BLOOD</span>FIT</h2>
            <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl font-semibold">WELCOME!</h2>
                <p className="text-sm  text-gray-300">Fill Detail Value to login</p>
            </div>

            {/* form section */}
            <form action="" onSubmit={handleSignIn} className="flex flex-col gap-4 px-6">
                <input className="input input-border border border-white rounded px-4 py-2" type="email" name="email" placeholder="Enter Your email" />


                <div className='relative w-full'>
                    <input className="input input-border border w-full border-white rounded px-4 py-2" type={showPassword ? "text" : "password"} name="password" placeholder="Enter Your Password" />
                    <span className='absolute right-3 top-1/2 -translate-y-1/2  cursor-pointer text-gray-500' onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>

                <div className='flex justify-between items-center text-sm text-gray-300'>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={checked} name="checkbox" id="" onChange={() => setChecked(!checked)} className='mr-2' />
                        <span>Remember Me</span>
                    </label>
                    <button type="button" className="text-red-500 hover:underline">
                        Forgot Password?
                    </button>
                </div>
                <div>
                    <button className="bg-red-600 p-2 rounded-lg w-full">Sign In</button>
                </div>
            </form>
            <p className='px-6 text-sm text-center mt-4'>New user? <Link to='/' className='text-red-500'>SignUp</Link></p>
        </div>
    )
}

export default SignIn
