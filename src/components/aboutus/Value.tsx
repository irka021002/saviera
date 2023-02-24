import { useState } from 'react';
export default function Value(){
    const [valueState, setValueState] = useState(false)
    const handleValue = (e:React.SyntheticEvent<HTMLDivElement>) => {
        !valueState ? setValueState(true) : setValueState(false)
    }
    return(
        <div className="py-10 md:py-20 justify-center grid grid-cols-6 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] md:gap-y-10 px-6 md:px-0" style={{background: "linear-gradient(92.86deg, rgba(0, 0, 0, 0.2) -43.29%, rgba(0, 0, 0, 0) 36.98%), linear-gradient(271.38deg, rgba(232, 216, 201, 0.21) -19.42%, rgba(232, 216, 201, 0) 114.09%), #800020"}}>
            <div className="col-span-12">
                <div className={`w-full overflow-hidden transition-[max-height] duration-1000 ${!valueState ? "max-h-[458px] md:max-h-[162px]" : "max-h-[5000px] md:max-h-[2000px]" }`}>
                    <div className="flex items-center flex-col md:flex-row md:justify-between">
                        <div className="">
                            <p className="text-primary-2 text-center md:text-left font-aboreto text-[30px] leading-[135%]">
                                Values<br/>
                                We Would Like<br/> 
                                to Share<br/>
                                with You
                            </p>
                        </div>
                        <span className="border my-6 border-white border-opacity-40 w-[125px] md:w-0 md:h-[125px]"></span>
                        <div className="md:w-8/12 text-primary-2 flex items-center">
                            <div className='flex flex-col'>
                                <h2 className="font-montserrat text-[36px] md:text-5xl"><span className="font-bold">S</span> incere</h2>
                                <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                    I believe that kindness is never wrong. I could be sincere and radiate gentleness to others if I wanted to.
                                </p>
                            </div>
                            <div className="cursor-pointer md:hidden ml-[16px] md:ml-0" onClick={handleValue}>
                                <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="cursor-pointer hidden md:block" onClick={handleValue}>
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl">imp <span className="font-bold">A</span> ctful</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                I am confident that I could make a change. I am holding myself accountable for the choices I made, notions I wrote, things I said, manifestations I claimed.
                            </p>
                        </div>
                        <div className='ml-[16px] md:ml-0'>
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl"><span className="font-bold">V</span> ersatile</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                I am resourceful and flexible. Everything I need, I already have. So I can make creative things out of anything!
                            </p>
                        </div>
                        <div className="ml-[16px] md:ml-0">
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl"><span className="font-bold">I</span> ntetntional</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                I am purpose-driven. I know my values. I know what I want. I am aware of the responsibilities coming out of it. I respect my agendas and others’.
                            </p>
                        </div>
                        <div className="ml-[16px] md:ml-0">
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl"><span className="font-bold">E</span> mpowering</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                Changes require effort. The effort reflects interest. My medium is honest storytelling. I co-create and actively generate productive discussions and innovations.
                            </p>
                        </div>
                        <div className="ml-[16px] md:ml-0">
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl">Figu <span className="font-bold">R</span> eoutable</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                I challenge myself to be solution-oriented when faced with adversities. I believe there is always a way.
                            </p>
                        </div>
                        <div className="ml-[16px] md:ml-0">
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[52px]">
                        <div className="md:w-[243px] hidden md:block">
                        </div>
                        <span className="h-[125px] hidden md:block"></span>
                        <div className="md:w-8/12 text-primary-2 flex flex-col">
                            <h2 className="font-montserrat text-[36px] md:text-5xl">iter <span className="font-bold">A</span> te</h2>
                            <p className="font-trap text-2xl leading-[150%] font-normal mt-3">
                                I am willing to learn, grow, and explore. I support my growth. I show support to others, and I believe in collaboration for betterment.
                            </p>
                        </div>
                        <div className="ml-[16px] md:ml-0">
                            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.80005L14 58.2M14 58.2L26 46.2M14 58.2L2 46.2" stroke="#BF9553" stroke-width="2.42553" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}