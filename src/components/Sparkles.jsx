import { motion } from "framer-motion";

export default function Sparkles(){

const particles = Array.from({length:25});

return(

<div className="sparkles">

{particles.map((_,i)=>(
<motion.span
key={i}
className="sparkle"
initial={{opacity:0,scale:0}}
animate={{
opacity:[0,1,0],
scale:[0,1.5,0]
}}
transition={{
duration:2,
repeat:Infinity,
delay:i*0.2
}}
>
✨
</motion.span>
))}

</div>

)

}