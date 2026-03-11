import { motion } from "framer-motion";

export default function Background3D(){

return(

<div className="bg-container">

<motion.div
className="blob blob1"
animate={{
x:[0,80,-80,0],
y:[0,50,-50,0]
}}
transition={{
duration:20,
repeat:Infinity
}}
/>

<motion.div
className="blob blob2"
animate={{
x:[0,-100,100,0],
y:[0,-60,60,0]
}}
transition={{
duration:25,
repeat:Infinity
}}
/>

</div>

)

}