import {useScroll, motion, useMotionValueEvent} from "framer-motion";
import {useState} from "react";

const HeaderWithAnimation = () => {
    const {scrollYProgress} = useScroll();
    const [isHaveShadow, setIsHaveShadow] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsHaveShadow(latest > 0);
    });

    return (
        <header className={`fixed py-4 pl-6 w-full z-50`}>
            <motion.div
                className="absolute left-0 top-0 w-full h-full shadow-xl"
                animate={{
                    opacity: isHaveShadow ? 1 : 0,
                }}
                transition={{duration: 0.3, type: "easeInOut"}}
            ></motion.div>
            <ul className="font-medium flex flex-row gap-8 ">
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default HeaderWithAnimation;
