
import { Link } from 'react-router-dom'
import { projectsData } from '../constrants/data'

function Projects() {


    return (

        <section className="min-h-[80vh] my-40" id='projects'>

            <h1 className="text_primary">Projects</h1>

            <div className="flex gap-6 flex-wrap items-center ">

                {/* Img */}

                {
                    projectsData.map((item, index) => {
                        return (
                            <div key={index} className="bg-yellow-400 max-w-[400px] h-[550px] p-2 rounded-2xl" >
                                <div className="bg-white p-4 rounded-2xl h-full">
                                    <div className="mb-4">

                                        <img className="w-[100%] h-full object-cover " src={item.thumbnail} alt="" />
                                    </div>
                                    {/* details */}
                                    <div className="flex flex-col text-black">
                                        <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
                                        <p className="">{item.desc.slice(0, 180).concat('...')}</p>

                                        <div className="flex gap-2 flex-wrap mt-3">

                                            {

                                                item.techUsed.map((data, index) => {
                                                    return (
                                                        <div key={index} className="bg-[#1F9F8D] text-base h-8 text-white py-1 px-3 rounded-full">{data}</div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="flex items-center justify-between mt-5">
                                            <Link className="flex items-center hover:text-yellow-700 transition " to={item.liveLinkAvailable ? item.liveLink : '/projectView' + '/' + item.name + ''} >View Project
                                                <img className="ml-1 w-[30px]" src="/assets/icons/link_icon.svg" alt="" />
                                            </Link>


                                            {
                                                item.isGit ? <a className="w-[30px]" href={item.gitLink} target='_blank'>
                                                    <svg className="hover:fill-slate-600 transition cursor-pointer" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
                                                </a> : <span></span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Projects