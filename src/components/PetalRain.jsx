import { motion } from "framer-motion";

export default function PetalRain(){

const petals = Array.from({length:15});

return(

<div className="petal-rain">

{petals.map((_,i)=>(
<motion.div
key={i}
className="petal"
initial={{y:-100,x:Math.random()*window.innerWidth}}
animate={{y:800}}
transition={{
duration:10,
repeat:Infinity,
delay:i
}}
>
🌸
</motion.div>
))}

</div>

)

}