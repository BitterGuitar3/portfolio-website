document.querySelectorAll('.experienceList').forEach(list => {
    const items = list.querySelectorAll('li');
    if (items.length % 2 !== 0){
        items[items.length - 1].classList.add('last-odd-item');
    }
});