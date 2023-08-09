'use client'
import { motion,useScroll } from "framer-motion"
import { useRef } from "react"

const Circle =  ({ reference }) => {
  const {scrollYProgress} = useScroll({
    target:reference,
    offset:["end 0.9","start center"]
  })
  return (
    <svg height="55" width="55" className="absolute -left-3 -rotate-90">
      <motion.circle cx="26" cy="22" r="10" stroke="cyan" fill="#081c29" style={{pathLength:scrollYProgress}} stroke-width="3"/>
      <circle cx="26" cy="22" r="5" fill="cyan" stroke-width="0" className="animate-pulse"/>
    </svg>
  )
}

const Details = ({course,institute,year,grade}) => {
  const listRef = useRef(null)
  return(
    <li className="flex flex-col" ref={listRef}>
      <div className="text-lg font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 decoration-cyan-500 underline">{course}</div>  
      <div className="text-md text-primary font-bold">{institute}</div>
      <div text className="text-md text-primary">{year}</div>
      <div className="text-md text-primary">{grade}</div>
      <Circle reference={listRef}/>
    </li>
  )
}

const Education = () => {
  const educationDiv = useRef(null)
  const {scrollYProgress} = useScroll({
    target:educationDiv,
    offset:["start 0.8","end center"]
  })
  console.log(scrollYProgress)
  return (
    <div className="w-full relative" ref={educationDiv}>
      <div className="absolute w-[4px] rounded-full bg-black left-2 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <motion.div className="absolute w-[4px] rounded-full bg-cyan-400 left-2 h-full origin-top" style={{scaleY:scrollYProgress}}/>
      <ul className="flex flex-col justify-center gap-3 ml-8 mt-5">
        <Details course={"Higer Secondary - Computer Science"} institute={"GVHSS Valapad,Thrissur"} grade={"Grade:97%"} year={"2020-2022"}/>
        <Details course={"B.Tech Computer Science and Engineering"} institute={"Collge of Engineering Trivandrum"} year={"2022-2026"} grade={"CGPA:9.59"}/>
      </ul>
    </div>
  )
}

export default Education