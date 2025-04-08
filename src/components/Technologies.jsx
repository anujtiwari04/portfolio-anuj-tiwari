import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion"

const Technologies = () => {
    const techItems = [
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
        { Icon: SiExpress, name: "Express", color: "text-gray-600" },
        { Icon: RiReactjsFill, name: "React", color: "text-blue-600" },
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-700" },
        { Icon: RiTailwindCssFill, name: "Tailwind", color: "text-blue-400" },
        { Icon: FaGitAlt, name: "Git", color: "text-red-500" }
    ];
    
    return (
        <>
            <div className="text-center text-white font-extrabold text-3xl py-10">TECHNOLOGIES</div>
            <div className='flex flex-wrap justify-center gap-4'>
                {techItems.map(({ Icon, name, color }, index) => (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        key={index}
                        className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex flex-col items-center justify-center gap-2"
                    >
                        <Icon className={`text-3xl ${color}`} />
                        <span className="text-white text-sm font-medium">{name}</span>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Technologies
