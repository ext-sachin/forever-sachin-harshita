import { motion } from "framer-motion";

export default function Petals(){

const petals = Array.from({length:15});

return(

<div className="petals">

{petals.map((_,i)=>(

<motion.div
key={i}
className="petal"
initial={{y:-100}}
animate={{y:800}}
transition={{
duration:10,
delay:i,
repeat:Infinity
}}
>
🌸
</motion.div>

))}

</div>

)

}