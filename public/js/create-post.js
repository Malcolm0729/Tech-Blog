const createPostHandler = async (event) =>  {
    event.preventDefault();

    const title = document.querySelector('#post-title').ariaValueMax.trim();
    const content = document.querySelector('#post-content').ariaValueMax.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {

            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#create-post').addEventListener('submit', createPostHandler);