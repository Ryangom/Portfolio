import { useEffect, useState } from "react";


function TalkToMe() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    const onClickHandel = () => {
        window.location.href = "mailto:<ryangom73@gmail.com>";
    }


    return (
        <div className="bg-yellow-300 my-10 text-black py-20 flex flex-col justify-center items-center" id="contact">
            <span className="text-2xl py-2">Have a project?</span>
            <h1 className="text-4xl font-bold sm:text-5xl">Let's talk with me.</h1>
            <button className="px-5 py-3 my-10 text-lg text-white outline-none bg-black rounded-lg" onClick={() => onClickHandel()}>
                Talk with me
            </button>
            <p className="text-xl">Local time: <span className="font-bold">

                {
                    // local time 
                    formattedTime
                }
            </span></p>
        </div>
    )
}

export default TalkToMe