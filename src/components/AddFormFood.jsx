import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ handleAddFood }) {
  const initialState = {
    name: '',
    image: '',
    calories: '',
    servings: '',
  };

  const [newFood, setNewFood] = useState(initialState);

  const handleChange = (event) => {
    setNewFood((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    handleAddFood(newFood);
    setNewFood(initialState);
  };

  return (
    <div className="formContainer">
      <h1>Add Food Entry</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="FoodName"
          value={newFood.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="image"
          placeholder="Image Url"
          value={newFood.image}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="calories"
          placeholder="Calories"
          value={newFood.calories}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="servings"
          placeholder="Servings"
          value={newFood.servings}
          onChange={handleChange}
          required
        />
        <Button htmlType="submit" className="btnForm">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
