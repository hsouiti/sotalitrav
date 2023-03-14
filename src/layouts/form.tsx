import React from 'react'

const Form = () => {
    return (

        <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
            <div className="container">
                <div className="flex flex-wrap -mx-4   justify-center items-center">

                    <div className="w-full lg:w-1/2 xl:w-5/12 px-4 justify-center items-center">
                        <div className="bg-white relative  p-8 sm:p-12 border border-indigo-400">
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="
                                                w-full
                                                rounded
                                                py-3
                                                px-[14px]
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                                "
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        rows="6"
                                        placeholder="Your Message"
                                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="
                        w-full
                        text-white
                        bg-indigo-700
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Form