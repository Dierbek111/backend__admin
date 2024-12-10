import React, { useState } from 'react';

const AdminPage = () => {
  // State для хранения значений формы
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    pieces: '',
    age_recommendation: ''
  });

  // Обработчик изменения полей ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация данных
    if (!product.name || !product.price || !product.category) {
      alert('Пожалуйста, заполните обязательные поля!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert('Товар успешно добавлен!');
        setProduct({ name: '', price: '', category: '', pieces: '', age_recommendation: '' });
      } else {
        alert('Ошибка при добавлении товара!');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось подключиться к серверу.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Admin Page - Добавить товар</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Название товара: </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Цена: </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Категория: </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Количество деталей: </label>
          <input
            type="number"
            name="pieces"
            value={product.pieces}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Возрастная рекомендация: </label>
          <input
            type="text"
            name="age_recommendation"
            value={product.age_recommendation}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Добавить товар
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
