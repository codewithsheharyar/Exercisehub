document.addEventListener('DOMContentLoaded', () => {
    const workoutSection = document.getElementById('workout');
    const cardioSection = document.getElementById('cardio');

    const mainContent = document.querySelector('main.content');

    workoutSection.addEventListener('click', () => {
        mainContent.innerHTML = `
            <section class="workout-details">
                <h2>Workout Plans</h2>
                <p>Here you can find various workout plans to achieve your fitness goals.</p>
                <ul>
                    <li>Plan 1: Full Body Workout</li>
                    <li>Plan 2: Cardio Blast</li>
                    <li>Plan 3: Strength Training</li>
                </ul>
            </section>
        `;
    });

    cardioSection.addEventListener('click', () => {
        mainContent.innerHTML = `
            <section class="cardio-details">
                <h2>Cardio Exercises</h2>
                <p>Explore various cardio exercises to boost your heart health and endurance.</p>
                <ul>
                    <li>Exercise 1: Running</li>
                    <li>Exercise 2: Cycling</li>
                    <li>Exercise 3: Jump Rope</li>
                </ul>
            </section>
        `;
    });
});
