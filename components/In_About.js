import React from "react";
import ButtonA from "../users/ButtonA"

const In_About = () => {
    return (
        <main className="flex flex-col sm:flex-row border-2 border-black px-8 py-8 w-full">
            <section className="border-2 border-green-400 w-full sm:max-w-fit 2xl:px-32">
                <h2 className="text-xl">About</h2>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <section className="flex justify-start">
                        <ButtonA />
                    </section>
            </section>
            <section className="border-2 border-green-700 w-full sm:w-1/3">
                <h2 className="text-xl">Img</h2>
            </section>
            
        </main>
    )
}

export default In_About