import { useState } from "react";

export default function RSVP(){

const [name,setName]=useState("");

function submit(e){
e.preventDefault();
alert("Thanks for your RSVP "+name)
}

return(

<section className="rsvp" id="rsvp">

<h2>RSVP</h2>

<form onSubmit={submit}>

<input
placeholder="Your Name"
onChange={(e)=>setName(e.target.value)}
/>

<select>
<option>Will you attend?</option>
<option>Yes</option>
<option>No</option>
</select>

<button>Send RSVP</button>

</form>

</section>

)

}