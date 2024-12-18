export class WorkoutFormView {
    constructor(onWorkoutAdded) {
        this.onWorkoutAdded = onWorkoutAdded;
        this.formElement = this.createForm();
    }

    createForm() {
        const form = document.createElement('form');
        form.id = 'workout-form';

        form.innerHTML = `
            <select id="sport" required>
                <option value="">Выберите вид спорта</option>
                <option value="Бег>">Бег</option>
                <option value="Велосипед">Велосипед</option>
                <option value="Плавание">Плавание</option>
                <option value="Тренажерный зал">Тренажерный зал</option>
            </select>
            <input type="number" id="duration" placeholder="Длительность (мин)" required min="1" max="240">
            <select id="intensity" required>
                <option value="">Интенсивность</option>
                <option value="Низкая">Низкая</option>
                <option value="Средняя">Средняя</option>
                <option value="Высокая">Высокая</option>
            </select>
            <input type="date" id="date">
            <button type="submit">Добавить тренировку</button>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const workout = {
                sport: form.sport.value,
                duration: form.duration.value,
                intensity: form.intensity.value,
                date: form.date.value || new Date().toISOString().split('T')[0]
            };
            this.onWorkoutAdded(workout);
            form.reset();
        });

        return form;
    }

    render(container) {
        container.appendChild(this.formElement);
    }
}