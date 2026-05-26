import React from 'react'

const Form = () => {
    return (
        <div className="h-full w-full bg-gray-50 px-8 py-10">
            <h1 className="text-4xl font-bold text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 selection:bg-black selection:text-white">
                This is a{" "}
                <span className="inline-block after:content-[''] after:w-full after:h-full after:bg-red-500 after:-z-10 relative z-10 text-white after:absolute after:inset-0 after:-skew-2">
                    crazy
                </span>{" "}
                good form
            </h1>

            <div className="my-8 flex flex-col gap-6 max-w-sm mx-auto">

                <Group>
                    <Label htmlFor="name" required>
                        Name
                    </Label>

                    <Input
                        name="name"
                        placeholder="Enter your name"
                        disabled
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </Group>

                <Group>
                    <Label htmlFor="roll" required>
                        Roll No.
                    </Label>

                    <Input
                        name="roll"
                        type='number'
                        placeholder="Enter your roll no."
                    />
                </Group>

                <Group>
                    <Label htmlFor="email" required>
                        Email
                    </Label>

                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="invalid:border-red-500 invalid:shadow-none"
                    />
                </Group>

                <Group>
                    <Label htmlFor="feedback" required>
                        Feedback
                    </Label>

                    <Input
                        name="feedback"
                        placeholder="Give feedback about the session"
                    />
                </Group>

                <button className='bg-black text-white px-4 py-2 mb-5 rounded-md cursor-pointer hover:bg-neutral-700 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 after:content-[""] after:w-1/2 after:h-[400px] after:absolute after:bg-white/20 relative overflow-hidden after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop-blur-[0.5px] after:transition-all after:duration-1000'>Submit form</button>

            </div>
        </div>
    );
};

const Group = ({ children }) => {
    return (
        <div className="flex flex-col gap-2 has-invalid:bg-red-100 rounded-md p-2">
            {children}
        </div>
    );
};

const Label = ({ htmlFor, children, required = false }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`font-medium ${
                required
                    ? "after:content-['*'] after:ml-0.5 after:text-red-500"
                    : ""
            }`}
        >
            {children}
        </label>
    );
};

const Input = ({ type = "text", name, placeholder, disabled = false, className }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            className={`focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:bg-gray-50 focus:border-gray-300 border border-transparent w-full bg-white rounded-md p-2 shadow-input transition-all duration-200 placeholder:text-neutral-300 ${className}`}
        />
    );
};

export default Form;