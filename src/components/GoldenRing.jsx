import { motion } from "framer-motion";

export default function GoldenRing(){

return(

<motion.div
className="gold-ring"
animate={{ rotate:360 }}
transition={{
repeat:Infinity,
duration:40,
ease:"linear"
}}
/>

)

}