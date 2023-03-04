import { Button, Card, Col } from 'antd';

function FoodBox({ food, handleDelete }) {
  const { name, calories, image, servings, } = food;
  const handleDeleteCourse = () => {
    handleDelete(food);
  };

  return (
    <Col>
      <Card style={{ width: 250 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'DimGray',
          }}
        >
          <h3>{name}</h3>
          <img
            src={image}
            alt={name}
            height="150"
            width="150"
          />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <strong>Total Calories: {calories * servings}</strong>
          <Button className="btnDelete" onClick={handleDeleteCourse}>
            Delete
          </Button>
        </div>
      </Card>
    </Col>
  );
}

export default FoodBox;
