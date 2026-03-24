const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function generateCalendar(year) {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    for (let m = 0; m < 12; m++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const header = document.createElement('div');
        header.className = 'month-header';
        header.textContent = monthNames[m] + ' ' + year;
        monthDiv.appendChild(header);

        const weekdays = document.createElement('div');
        weekdays.className = 'weekdays';
        weekdayNames.forEach(name => {
            const day = document.createElement('div');
            day.className = 'weekday';
            day.textContent = name;
            weekdays.appendChild(day);
        });
        monthDiv.appendChild(weekdays);

        const daysGrid = document.createElement('div');
        daysGrid.className = 'days';

        const firstDay = new Date(year, m, 1).getDay();
        const daysInMonth = new Date(year, m + 1, 0).getDate();
        const today = new Date();
        const isToday = (d) => d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();

        // Previous month filler days
        const prevMonth = new Date(year, m, 0);
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = document.createElement('div');
            day.className = 'day other-month';
            day.textContent = prevMonth.getDate() - i;
            daysGrid.appendChild(day);
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            const dayDate = new Date(year, m, d);
            const day = document.createElement('div');
            day.className = 'day';
            if (isToday(dayDate)) day.classList.add('today');
            day.textContent = d;
            day.title = dayDate.toDateString();
            daysGrid.appendChild(day);
        }

        // Next month filler days
        const lastDay = new Date(year, m + 1, 0).getDay();
        for (let i = 0; i < (6 - lastDay); i++) {
            const day = document.createElement('div');
            day.className = 'day other-month';
            day.textContent = i + 1;
            daysGrid.appendChild(day);
        }

        monthDiv.appendChild(daysGrid);
        grid.appendChild(monthDiv);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(2026);
    document.getElementById('yearSelect').addEventListener('change', (e) => {
        generateCalendar(parseInt(e.target.value));
    });
});