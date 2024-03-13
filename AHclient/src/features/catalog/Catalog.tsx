
export default function Catalog(props: any) {
    return {
        <ul>
            {props.products.map((product: any) => (
                <li key = {product.id}> {product.name} - {product.price} </li>
            ))}
        </ul>
    }
}
