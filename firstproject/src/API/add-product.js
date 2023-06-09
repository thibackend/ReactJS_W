import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [promotionPrice, setPromotionPrice] = useState(0);
  const [unit, setUnit] = useState('');
  const [isNew, setIsNew] = useState(0);
  const [idType, setIdType] = useState(0);
  const [products, setProduct] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo đối tượng sản phẩm
    const product = {
      name,
      image,
      description,
      unit_price: parseInt(unitPrice),
      promotion_price: parseInt(promotionPrice),
      unit,
      new: parseInt(isNew),
      id_type: parseInt(idType),
    };
    setProduct(product);
    // Gửi đối tượng sản phẩm đi xử lý
    // Ví dụ: sử dụng axios để gửi dữ liệu lên server
    axios.post('http://localhost:8000/api/add-product', products)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Unit Price:</label>
          <input type="number" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
        </div>
        <div>
          <label>Promotion Price:</label>
          <input type="number" value={promotionPrice} onChange={e => setPromotionPrice(e.target.value)} />
        </div>
        <div>
          <label>Unit:</label>
          <input type="text" value={unit} onChange={e => setUnit(e.target.value)} />
        </div>
        <div>
          <label>New:</label>
          <input type="number" value={isNew} onChange={e => setIsNew(e.target.value)} />
        </div>
        <div>
          <label>ID Type:</label>
          <input type="number" value={idType} onChange={e => setIdType(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;