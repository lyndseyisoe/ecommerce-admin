import useProducts from "../hooks/useProducts";

export default function Products() {

const {

products,
loading,
removeProduct

}

= useProducts();



if (loading)
return <h1>Loading...</h1>;



return (

<div className="p-6">

<h1 className="text-3xl mb-6">

Products

</h1>


{

products.map(

(product)=>(

<div
key={product.id}

className="
border
p-4
mb-4
rounded
"
>

<h2>

{product.name}

</h2>


<p>

Ksh {product.price}

</p>


<button

onClick={()=>

removeProduct(
product.id
)

}

className="
bg-red-500
text-white
px-3
py-1
rounded
"

>

Delete

</button>

</div>

)

)

}

</div>

);

}