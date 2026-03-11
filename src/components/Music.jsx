import { useRef } from "react";
import { FaMusic } from "react-icons/fa";

export default function Music(){

const audioRef = useRef();

function toggle(){
audioRef.current.paused
? audioRef.current.play()
: audioRef.current.pause()
}

return(

<div className="music">

<audio
ref={audioRef}
src="/music/wedding.mp3"
autoPlay
loop
/>

<button onClick={toggle}>
<FaMusic/>
</button>

</div>

)

}