const courses = [
    {
        id: 1,
        title: 'Computer Science Engineering',
        category: 'engineering',
        description: 'Learn programming, algorithms, and AI fundamentals.',
        image: 'https://via.placeholder.com/300x200?text=CS+Engineering',
        duration: '4 Years'
    },
    {
        id: 2,
        title: 'Business Administration',
        category: 'business',
        description: 'Master management, marketing, and finance skills.',
        image: 'https://via.placeholder.com/300x200?text=Business',
        duration: '2 Years'
    },
    {
        id: 3,
        title: 'Fine Arts',
        category: 'arts',
        description: 'Develop creativity in painting, sculpture, and design.',
        image: 'https://via.placeholder.com/300x200?text=Fine+Arts',
        duration: '3 Years'
    },
    {
        id: 4,
        title: 'Mechanical Engineering',
        category: 'engineering',
        description: 'Study mechanics, robotics, and manufacturing.',
        image: 'https://via.placeholder.com/300x200?text=Mechanical',
        duration: '4 Years'
    }
];

const courseGrid = document.getElementById('course-grid');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');

function displayCourses(coursesToShow) {
    courseGrid.innerHTML = '';
    coursesToShow.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <button class="enroll-btn" onclick="enroll(${course.id})">Enroll Now</button>
            </div>
        `;
        courseGrid.appendChild(card);
    });
}

function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) &&
        (category === '' || course.category === category)
    );

    displayCourses(filtered);
}

function enroll(courseId) {
    alert(`Enrolled in course ID: ${courseId}! Redirecting to payment...`);
}

displayCourses(courses);
searchInput.addEventListener('input', filterCourses);
categorySelect.addEventListener('change', filterCourses);