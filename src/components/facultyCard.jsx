import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react";


const FacultyCard = ({ imageUrl, name, linkedin, post }) => {

    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.05 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return (
        <div
            className={`min-w-[300px] max-w-[400px] w-1/3 min-h-[400px] lg:max-h-[700px] xl:min-h-[550px] h-1/2 rounded-2xl flex flex-col overflow-hidden bg-white hover:bg-gray-200 relative ${animate ? "animate-vertical-slide-in" : ""}`}
            ref={sectionRef}
        >
            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="absolute m-auto left-0 right-0 top-0 bottom-0 w-full h-full bg-black bg-opacity-20 text-white text-center text-xl font-semibold flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                        Read More
                    </div>
                </DialogTrigger>
                <DialogContent className="min-w-full md:max-w-[60vw] md:min-w-[750px] flex justify-center items-center py-2 px-0 md:p-6 overflow-hidden">
                    <DialogHeader>
                        {/* <DialogTitle>Edit profile</DialogTitle> */}
                        {/* <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription> */}
                    </DialogHeader>
                    <div
                        className="md:min-w-[700px] w-full h-full flex flex-col md:items-center md:flex-row gap-8"
                    >
                        <img
                            className="w-1/2 min-w-[150px] rounded-xl"
                            src={imageUrl}
                            alt={name}
                            loading="eager"
                        />
                        <div
                            className="w-full h-full flex flex-col justify-center gap-5"
                        >
                            <div
                                className="w-full flex flex-col justify-center"
                            >
                                <p
                                    className="text-xl xl:text-4xl font-semibold"
                                >
                                    {name}
                                </p>
                                <p
                                    className="text-lg xl:text-2xl font-thin"
                                >
                                    {post}
                                </p>
                            </div>
                            <p
                                className="text-sm lg:text-lg font-normal"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil voluptas eos nulla deserunt consequatur, atque quisquam natus dignissimos cumque iure saepe repudiandae voluptatibus nam itaque quaerat, voluptatem nemo perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati molestiae cum, eveniet nulla totam vel? Ipsum eos, cum delectus obcaecati atque commodi ea, enim debitis asperiores, numquam dolor maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias maiores saepe minima nobis. Eaque esse assumenda eligendi fugit totam exercitationem, corrupti voluptatem odio fuga necessitatibus quaerat provident soluta optio.
                            </p>
                            <div
                                className="w-full flex gap-2 text-2xl"
                            >
                                <a
                                    className="hover:text-blue-600"
                                    href={linkedin}
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    className="hover:text-blue-600"
                                    href={linkedin}
                                >
                                    <MdEmail />
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <img
                className="w-full aspect-square"
                src={imageUrl}
                alt={name}
                loading="eager"
            />
            <div
                className="w-full h-full flex-1 flex flex-col justify-center items-center gap-1 py-2"
            >
                <p
                    className="text-xl xl:text-2xl font-bold -mb-2"
                >
                    {name}
                </p>
                <p
                    className="text-lg xl:text-xl font-normal"
                >
                    {post}
                </p>
                <div
                    className="text-lg xl:text-2xl flex gap-2 z-50"
                >
                    <a
                        className="hover:text-blue-600"
                        href={linkedin}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        className="hover:text-blue-600"
                        href={linkedin}
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default FacultyCard;