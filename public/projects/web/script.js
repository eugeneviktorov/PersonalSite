window.addEventListener('DOMContentLoaded', (event) => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const user = tg.initDataUnsafe.user;

    if (user) {
        document.getElementById('user-photo').src = user.photo_url || 'https://via.placeholder.com/150';
        document.getElementById('user-name').textContent = `Name: ${user.first_name} ${user.last_name}`;
        document.getElementById('user-birthdate').textContent = `Birth Date: ${user.birth_date || 'Unknown'}`;
        document.getElementById('user-registration').textContent = `Registration Date: ${user.registration_date || 'Unknown'}`;
        document.getElementById('user-premium').textContent = `Premium: ${user.is_premium ? 'Yes' : 'No'}`;
        document.getElementById('user-id').textContent = `User ID: ${user.id}`;
    } else {
        document.getElementById('user-info').textContent = 'No user data available.';
    }
});
