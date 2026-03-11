export default function Gallery(){

const imgs = [
"/images/g1.jpg",
"/images/g2.jpg",
"/images/g3.jpg",
// "/images/g4.jpg"
]

return(

<section className="gallery" id="gallery">

<h2>Memories</h2>

<div className="grid">

{imgs.map((img,i)=>(
<img src={img} key={i}/>
))}

</div>

</section>

)

}