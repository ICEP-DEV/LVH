

document.addEventListener('DOMContentLoaded', function () {
    // Scope the selectors within the .gallery_f section
    const gallerySection = document.querySelector('.gallery_f');
    const yearLinks = gallerySection.querySelectorAll('.gallary_nav ul li a');
    const gallerySections = gallerySection.querySelectorAll('.gallery-section');
  
    function filterGallery() {
      const selectedYear = gallerySection.querySelector('.gallary_nav ul li a.active')?.dataset.year || '2021';
  
      gallerySections.forEach(section => {
        section.style.display = 'none'; // Hide all galleries initially
      });
  
      const activeGallery = gallerySection.querySelector(`#gallery${selectedYear}`);
      if (activeGallery) {
        activeGallery.style.display = 'flex'; // Show the active gallery
      }
  
      // Color the activated button
      yearLinks.forEach(link => {
        link.classList.remove('active-button'); 
        if (link.dataset.year === selectedYear) {
          link.classList.add('active-button'); 
        }
      });
    }
  
    yearLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        yearLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        filterGallery();
      });
    });
  
    filterGallery(); // Call filterGallery on page load
    
    gallerySection.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function () {
            const currentlyZoomed = gallerySection.querySelector('.gallery-item.zoomed');
            if (currentlyZoomed && currentlyZoomed !== this) {
                currentlyZoomed.classList.remove('zoomed');
            }

            this.classList.toggle('zoomed');
        });
    });
  });