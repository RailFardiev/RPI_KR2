import { WorkoutModel } from './Model/workoutModel.js';
import { WorkoutFormView } from './views/WorkoutFormView.js';
import { WorkoutListView } from './views/WorkoutListView.js';
import { FiltersView } from './views/FiltersView.js';
import { WorkoutPresenter } from './Presenter/WorkoutPresenter.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new WorkoutModel();
    const workoutFormView = new WorkoutFormView();
    const workoutListView = new WorkoutListView();
    const filtersView = new FiltersView();

    const presenter = new WorkoutPresenter(model, workoutFormView, workoutListView, filtersView);

    workoutFormView.render(document.getElementById('workout-form-container'));
    filtersView.render(document.getElementById('filters-container'));
    workoutListView.render(model.getWorkouts(), presenter.deleteWorkout.bind(presenter));
    document.getElementById('workouts-container').appendChild(workoutListView.getElement()); 
    presenter.updateTotalWorkouts(); 
});