import MealsItems from "./meals-item";
import classes from "./meals.grid.module.css";

const MealsGrid = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealsItems {...meal} />
        </li>)}
    </ul>
  )
}

export default MealsGrid
