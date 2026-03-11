export default function WhatsAppRSVP(){

const phone = "918884785926";

const message =
encodeURIComponent(
"Hello Sachin & Harshitha! I would love to attend your wedding."
)

const url =
`https://wa.me/${phone}?text=${message}`;

return(

<section className="whatsapp">

<a
href={url}
target="_blank"
className="wa-btn"
>

RSVP on WhatsApp

</a>

</section>

)

}