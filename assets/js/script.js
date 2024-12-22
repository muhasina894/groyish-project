document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon'); 
    const overlay = document.querySelector('.overlay');
    const mobileMenu = document.getElementById('mob-main-menu'); 

    
    menuIcon.addEventListener("click", toggleMobileMenu);
    overlay.addEventListener("click", closeMobileMenu);

   
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');  
        overlay.classList.toggle('active');     
    }

    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active'); 
        overlay.classList.remove('active');    
    }
});
