import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.value;
        console.log(email, password, checkbox);
        form.reset();
    }
    return (
        <div className="w-[400px]  mx-auto  bg-black  text-white  justify-center items-center  rounded-2xl pb-2">
            {/* form Heading */}
            <h2 className="text-2xl font-bold text-left px-4 py-2 rotate-[-6deg]"><span className="text-red-500">BLOOD</span>FIT</h2>
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold">WELCOME!</h2>
                <p className="text-lg pb-2">Fill Detail Value to login</p>
            </div>

            {/* form section */}
            <form action="" onSubmit={handleSignIn} className="flex flex-col gap-4 px-6">
                <input className="input input-border border border-white rounded px-4 py-2" type="email" name="email" placeholder="Enter Your email" />
                <input className="input input-border border border-white rounded px-4 py-2" type="text" name="password" placeholder="Enter Your Password" />
                <div className='flex justify-between px-4 py-2'>
                    <p ><input type="checkbox" name="checkbox" id="" className='mr-2' />
                        <span>Remember Me</span></p>
                    <h1>Forget Password</h1>
                </div>
                <div>
                    <button className="bg-red-600 p-2 rounded-lg w-full">Sign In</button>
                </div>
            </form>
            <p className='px-6'>New user? <Link to='/' className='text-red-500'>SignUp</Link></p>
        </div>
    )
}

export default SignIn
