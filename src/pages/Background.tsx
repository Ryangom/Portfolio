import { socialData } from "../constrants/data"
function Background() {
    return (
        <section className="h-auto mb-20 mt-[10em] md:h-[100vh]">
            {/* <h1 className="text_primary ">Background</h1> */}
            {/* <article className="text_secondary">
                I'm currently an Engineer at Upstatement building things for the web with some awesome people. I recently graduated from Northeastern University after completing three awesome six-month co-ops at MullenLowe U.S., Starry, and Apple Music. <br /><br />
                As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. <br /><br />
                When I'm not in front of a computer screen, I'm probably snowboarding, cruising around on my penny board, or crossing off another item on my bucket list.
            </article> */}

            {/* New */}
            <h1 className="text_primary ">Know me More</h1>
            <div className="text_secondary">
                <div className="flex flex-col justify-between items-center gap-8 lg:flex-row">
                    <div className="w-full lg:w-8/12">
                        <h1>Hi, I'm <span className="underline underline-offset-[5px] font-bold">Jonas Ryan Gomes</span></h1>
                        <p className="">
                            I'm a software engineer who enjoys combining technical know-how with design flair to create beautiful and efficient applications. My goal is to build scalable, high-performing apps that offer users a seamless experience. <br /> <br />
                            I worked as a front-end developer at Quintet Technology Limited, building things for the web with amazing people. I am a recent graduate of the University of Greenwich. Now I'm learning new things like React and Next Js and looking for an intern or a job.
                        </p>

                    </div>
                    <div className="">
                        <div className="text-center relative bg-yellow-500 w-[250px] h-[250px] block rounded-full">
                            <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-6">
                                <h1 className="text-[5em] mb-10 font-medium">1</h1>
                                <p className="text-2xl">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col mt-12 gap-4 md:flex-row sm:flex-wrap">
                    <div className="">
                        <h1>Name:</h1>
                        <span className="font-bold">Jonas Ryan Gomes</span>
                    </div>
                    <div className="">
                        <h1>Email:</h1>
                        <span className="font-bold">ryangom73@gmail.com</span>
                    </div>
                    <div className="">
                        <h1>Mobile:</h1>
                        <span className="font-bold">01791708417</span>
                    </div>
                    <div className="">
                        <h1>From:</h1>
                        <span className="font-bold">Framgate, Dhaka,Bangladesh</span>
                    </div>
                </div>
                <div className="flex gap-14 items-center justify-center mt-20 md:justify-start">
                    {
                        socialData.map((item, index) => (
                            <a key={index}
                                className="cursor-pointer"
                                href={item.path}
                                target="_blank"
                            >
                                <img className="w-8 hover:scale-125 duration-300" src={item.src} alt="" />
                            </a>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Background