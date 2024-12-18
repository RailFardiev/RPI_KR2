export class FiltersView {
    constructor() {
        this.filtersContainer = document.createElement('div');
        this.filtersContainer.innerHTML = `
            <input type="text" id="filter-sport-date"/>
            <button id="filter-button">Применить фильтр</button>
        `;
        this.filterButton = this.filtersContainer.querySelector('#filter-button');
    }

    render(container) {
        container.appendChild(this.filtersContainer);
        this.filterButton.addEventListener('click', () => {
            const filterValue = this.filtersContainer.querySelector('#filter-sport-date').value;
            this.onFilterApplied(filterValue); 
            this.filtersContainer.querySelector('#filter-sport-date').value = ''; 
        });
    }
}