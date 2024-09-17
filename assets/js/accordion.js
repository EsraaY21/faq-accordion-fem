// Select all list items
const faqItems = document.querySelectorAll('ul li');

faqItems.forEach(item => {
  const icon = item.querySelector('h2 img'); // Select the icon image
  
  item.querySelector('h2').addEventListener('click', () => {
    // Check if the clicked item is already active
    if (item.classList.contains('active')) {
      // If active, remove the active class (collapse it)
      item.classList.remove('active');
      // Change the icon back to plus
      icon.src = '/assets/images/icon-plus.svg';
    } else {
      // Remove the active class and change icon for all items
      faqItems.forEach(el => {
        el.classList.remove('active');
        el.querySelector('h2 img').src = '/assets/images/icon-plus.svg'; // Reset icon to plus
      });
      
      // Add active class to the clicked item to expand its paragraph
      item.classList.add('active');
      // Change the icon to minus
      icon.src = '/assets/images/icon-minus.svg';
    }
  });
});
