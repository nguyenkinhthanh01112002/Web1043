let slideIndex = 0;
      showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds 
}
// onmouse logo
//onmouseMove,onmouseOut
function addOnmousemove(elem) {
  elem.classList.add("onmousemoveLogo:hover");
}
function removeOnmousemove(elem) {
  elem.classList.remove("onmousemoveLogo:hover");
}

const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
  
      // Kiểm tra tên không để trống
      if (name === '') {
        alert('Please enter your name.');
        return;
      }
  
      // Kiểm tra email theo định dạng chính xác
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Kiểm tra số điện thoại chỉ chứa số và không vượt quá 11 kí tự
      if (!/^[0-9]{11}$/.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
  
      // Thực hiện gửi form ở đây...
      alert('Form submitted successfully!');
    });
