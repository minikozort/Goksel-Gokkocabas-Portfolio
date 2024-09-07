document.addEventListener('DOMContentLoaded', function() {
  // Function to handle highlighting of sections
  function highlightSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add a class to apply the highlight effect
      section.classList.add('highlight');
      // Remove the class after a short delay (e.g., 1 second)
      setTimeout(() => {
        section.classList.remove('highlight');
      }, 1000); // 1000 milliseconds = 1 second
    }
  }

  // Handle clicks on the "Contact me" link in the navigation bar
  const contactLink = document.querySelector('#navigation-bar-links a[href="#Contact-me"]');
  if (contactLink) {
    contactLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling)
      highlightSection('Contact-me'); // Highlight the Contact me section
    });
  }

  // Handle clicks on the "About me" link in the navigation bar
  const aboutMeLink = document.querySelector('#navigation-bar-links a[href="#About-me"]');
  if (aboutMeLink) {
    aboutMeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling)
      highlightSection('About-me'); // Highlight the About me section
    });
  }
  const NavigationBar = document.querySelector('#ptag a[href="#navigation-bar-links"]');
  if (NavigationBar) {
    NavigationBar.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling)
      highlightSection('navigation-bar-links'); // Highlight the About me section
    });
  }
  const ContactLinkP = document.querySelector('#ptag a[href="#Contact-me"]');
  if (ContactLinkP) {
    ContactLinkP.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling)
      highlightSection('Contact-me'); // Highlight the About me section
    });
  }
});




