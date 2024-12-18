export class WorkoutListView {
    constructor() {
        this.workoutsContainer = document.createElement('div');
    }

    render(workouts, onDelete) {
        this.workoutsContainer.innerHTML = '';
        workouts.forEach((workout, index) => {
            const workoutElement = document.createElement('div');
            workoutElement.innerHTML = `
                <p>${workout.date}: ${workout.sport} - ${workout.duration} мин, Интенсивность: ${workout.intensity}</p>
                <button data-index="${index}" class="delete-btn">Удалить</button>
            `;
            workoutElement.querySelector('.delete-btn').addEventListener('click', () => {
                onDelete(index); 
            });
            this.workoutsContainer.appendChild(workoutElement);
        });
    }

    getElement() {
        return this.workoutsContainer;
    }
}