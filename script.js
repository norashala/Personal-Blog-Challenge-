function goBack() {
    window.history.back();
  }
  
  function submitForm() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
    alert('Blog post submitted successfully!');
  }