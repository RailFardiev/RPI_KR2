export class WorkoutModel {
    constructor() {
        this.workouts = [
            { sport: 'Бег', duration: 30, intensity: 'Средняя', date: '2024-12-18' },
            { sport: 'Велосипед', duration: 45, intensity: 'Высокая', date: '2024-12-19' },
            { sport: 'Плавание', duration: 60, intensity: 'Низкая', date: '2024-12-20' }
        ];
    }

    addWorkout(workout) {
        this.workouts.push(workout);
    }

    removeWorkout(index) {
        this.workouts.splice(index, 1);
    }

    getWorkouts() {
        return this.workouts;
    }

    getTotalWorkouts() {
        return this.workouts.length;
    }
}