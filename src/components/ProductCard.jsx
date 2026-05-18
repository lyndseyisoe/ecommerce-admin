export default function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      {onDelete && (
        <button onClick={() => onDelete(product.id)}>
          Delete
        </button>
      )}
    </div>
  );
}