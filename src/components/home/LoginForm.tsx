"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";

const Login = () => {
    const router = useRouter();
    const initialFormData = {
        firstName: "",
        email: "",
        secondName: "",
    };
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const EmailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(true);
        if (
            formData.firstName === "" ||
            formData.secondName === "" ||
            formData.email === ""
        ) {
            setError(true);
        } else if (!EmailRegex.test(formData.email)) {
            setError(true);
        } else {
            localStorage.setItem("formData", JSON.stringify(formData));
            localStorage.setItem("isLogin", "true");
            setFormData(initialFormData);
            setError(false);
            toast.success("Login Successful");
            router.push("/file-upload");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("isLogin") === "true") {
            router.push("/file-upload");
        }
    }, []);

    return (
        <div className="py-20 max-sm:py-10 max-lg:py-16 max-md:py-14 flex flex-col relative justify-center items-center min-h-screen ">
            <ToastContainer position="top-right" transition={Slide} />
            <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center font-bold font-syne">Data skate</h1>
            <form className=" p-6 rounded-lg w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                    <input onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" id="firstName"
                        placeholder="First name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error && formData.firstName.length === 0 && (<p className="text-red-700 font-bold max-sm:text-sm pt-1 pl-2"> First Name is required </p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="secondName">Second Name</label>
                    <input onChange={(e) => setFormData({ ...formData, secondName: e.target.value })} type="text" id="secondName"
                        placeholder="Second name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error && formData.secondName.length === 0 && (<p className="text-red-700 font-bold max-sm:text-sm pt-1 pl-2"> Second name is required </p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" > Email </label>
                    <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="email"
                        placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error && formData.email.length === 0 ? (<p className="text-red-700 font-bold max-sm:text-sm pt-1 pl-2 "> Please enter your email address</p>
                    ) : (error && !EmailRegex.test(formData.email) && (<p className="text-red-700 font-bold max-sm:text-sm pt-1 pl-2 "> Please enter a valid email address</p>))}
                </div>
                <button onClick={handleSubmit} className="w-full border border-solid border-black text-black  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer hover:scale-110 hover:bg-gray-400 transition-all duration-300"> Submit</button>
            </form>
        </div>
    );
};

export default Login;
