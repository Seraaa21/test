 // JavaScript for popup functionality
 const modal = document.getElementById('customModal');
 const showPopup = document.getElementById('showPopup');
 const closePopup = document.getElementById('closePopup');

 // Show the modal when the button is clicked
 showPopup.addEventListener('click', () => {
   modal.style.display = 'block';
 });

 // Close the modal when "OK" is clicked
 closePopup.addEventListener('click', () => {
   modal.style.display = 'none';
 });