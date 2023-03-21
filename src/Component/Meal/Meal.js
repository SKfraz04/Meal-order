import { Fragment } from 'react';
import AvailableMeals from './AvalableMeal';
import MealsSummary from './MealSummary';


const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;