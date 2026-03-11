import { Parallax } from "react-parallax";

export default function Hero(){

return(

<Parallax
bgImage="/images/couple.jpg"
strength={300}
>

<div className="hero">

<h1>Sachin & Harshitha</h1>

<p>We're getting married</p>

</div>

</Parallax>

)

}