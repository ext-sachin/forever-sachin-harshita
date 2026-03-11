import { motion } from "framer-motion";

export default function FloatingHearts(){

const hearts = Array.from({length:20});

return(

<div className="hearts">

{hearts.map((_,i)=>(

<motion.div
key={i}
className="heart"
initial={{y:0,opacity:0}}
animate={{y:-800,opacity:1}}
transition={{
duration:6,
delay:i*0.3,
repeat:Infinity
}}
>
❤️
</motion.div>

))}

</div>

)

}