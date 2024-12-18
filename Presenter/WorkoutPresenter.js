export class WorkoutPresenter {
    constructor(model, workoutFormView, workoutListView, filtersView) {
        this.model = model;
        this.workoutFormView = workoutFormView;
        this.workoutListView = workoutListView;
        this.filtersView = filtersView;

        this.workoutFormView.onWorkoutAdded = this.addWorkout.bind(this);
        this.updateWorkoutList();

        this.filtersView.onFilterApplied = this.applyFilter.bind(this);
    }

    addWorkout(workout) {
        this.model.addWorkout(workout);
        this.updateWorkoutList();
    }

    deleteWorkout(index) {
        this.model.removeWorkout(index);
        this.updateWorkoutList();
    }

    updateWorkoutList() {
        this.workoutListView.render(this.model.getWorkouts(), this.deleteWorkout.bind(this));
        this.updateTotalWorkouts();
    }

    updateTotalWorkouts() {
        const totalWorkoutsCount = document.getElementById('total-workouts');
        totalWorkoutsCount.textContent = this.model.getTotalWorkouts(); 
    }

    applyFilter(filterValue) {
        const filteredWorkouts = this.model.getWorkouts().filter(workout => {
            const workoutDate = new Date(workout.date).toISOString().split('T')[0];
            return workout.sport.includes(filterValue) || workoutDate.includes(filterValue);
        });
        this.workoutListView.render(filteredWorkouts, this.deleteWorkout.bind(this));
    }
}