import React, { useState } from 'react';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFormFood from './components/AddFormFood';
import SearchFood from './components/Search';
import { Row } from 'antd';
import './App.css';

function App() {
  const [foods, setFoodList] = useState(foodData);
  const [searchValue, setSearchValue] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAddFood = (data) => {
    const newFood = [...foods, data];
    setFoodList(newFood);
  };

  const handleShowFood = () => {
    setShowForm((prev) => !prev);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleDelete = (index) => {
    console.log('delete', index);
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoodList(newFoods);
  };

  return (
    <>
      <div className="App">
        {showForm ? null : (
          <button className="buttonShow" onClick={handleShowFood}>
            Add new food
          </button>
        )}

        {showForm && <AddFormFood handleAddFood={handleAddFood} />}

        {showForm ? (
          <button className="buttonShow" onClick={handleShowFood}>
            Hide form
          </button>
        ) : null}

        <h1>Search</h1>
        <SearchFood handleSearch={handleSearch} />
        <h1>My food list</h1>
        <Row style={{ justifyContent: 'center' }} gutter={[10, 10]}> 
          {foods
            .filter((elem) =>
              elem.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((elem, index) => (
              <FoodBox
                key={elem.name}
                food={elem}
                handleDelete={() => handleDelete(index)}
              />
            ))}

          {foods.length === 0 && (
            <div className="feedbackMessage">
              <h3>Oops!! There is no more food to Show.</h3>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b72226c0-adf2-498d-b052-8c69f25d386c/dba0e63-b273f4dd-2610-4216-8dcf-6dc4cbc88eb6.jpg/v1/fill/w_1024,h_1011,q_75,strp/hungry_fat_snivy__colour__by_kubypikachukirby_dba0e63-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMSIsInBhdGgiOiJcL2ZcL2I3MjIyNmMwLWFkZjItNDk4ZC1iMDUyLThjNjlmMjVkMzg2Y1wvZGJhMGU2My1iMjczZjRkZC0yNjEwLTQyMTYtOGRjZi02ZGM0Y2JjODhlYjYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Us0NCo9LEH2V8db0Ow8-MAUz6zplIdcuPSjLjWlsJBA"
                alt=""
              />
            </div>
          )}
        </Row>
      </div>
    </>
  );
}
export default App;
