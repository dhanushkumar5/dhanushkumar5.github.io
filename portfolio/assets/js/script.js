const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('anima');
        }
    });
    });
observer.observe(document.querySelector('.eduimg'));
alert('hi');