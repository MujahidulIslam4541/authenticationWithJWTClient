import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;
        const passwords = form.passwords.value;
        console.log(firstName, lastName, email, number, password, passwords);
        form.reset();
    }
    return (
        <div>
            <div className="w-[400px]  mx-auto  bg-black  text-white  justify-center items-center  rounded-2xl pb-2">
                <div>
                    <h2 className="text-2xl font-bold text-left px-4 py-2 rotate-[-6deg]"><span className="text-red-500">BLOOD</span>FIT</h2>
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">WELCOME!</h2>
                        <p className="text-lg pb-2">Create an Account And Continue</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 space-y-3">
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="firstName" placeholder="Enter Your First Name" />
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="lastName" placeholder="Enter Your last Name" />
                            <input className="input input-border border border-white rounded px-4 py-1" type="email" name="email" placeholder="Enter Your email Address" />
                            <input className="input input-border border border-white rounded px-4 py-1" type="number" name="number" placeholder="Enter Your number" />
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="password" placeholder="Enter Your password" />
                            <input className="input input-border border border-white rounded px-4 py-1" type="text" name="passwords" placeholder="Confirm Your password" />

                            <div className="text-left flex gap-2">
                                <input type="checkbox" /><span>Agree to the terms and conditions</span>
                            </div>

                            <button className="bg-red-600 p-2 rounded-lg">Sign Up</button>
                        </form>

                        <p>Already An Account? <Link to='/signIn' className="text-red-500">SignIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
