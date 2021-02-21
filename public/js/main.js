/*
 * ----------------------------------------------
 *                                              *
 *  London Prime - Script Sheet                 *
 *                                              *
 * ----------------------------------------------
 */

'use strict';

// On document ready ...
$(() => {

  // Initialise Luxy inertia scrolling for desktop only ...
  const _ua = (function(u) {
    return {
      Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
        u.indexOf("ipad") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
        u.indexOf("kindle") != -1 ||
        u.indexOf("silk") != -1 ||
        u.indexOf("playbook") != -1,
      Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
        u.indexOf("iphone") != -1 ||
        u.indexOf("ipod") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
        u.indexOf("blackberry") != -1
    }
  }) (window.navigator.userAgent.toLowerCase());

  const luxyEl = document.getElementById('luxy');
  if (luxyEl) {
    if (!_ua.Mobile && !_ua.Tablet) {
      luxy.init();
    } else {
      // Do something ...
    }
  } // End luxyinit() ...

  // Global variables and initialisation ...
  let navOpen = false;
  
  // Mobile menu hamburger ...
  $('.hamburger').on("click", function() {
    $(this).toggleClass('is-active');
  });  
  
  // Toggle mobile menu ...
	$('.hamburger').on('click', () => {

    // Close mobile nav fucntion ...
    const closeNav = () => {

      gsap.to('.mmenu-bg-1',
        {
          delay: 0.1,
          duration: 1,
          x: 0,
          ease: "Expo.easeInOut"
        }
      );
      gsap.to('.mmenu-bg-2',
        { duration: 1,
          x: 0,
          ease: "Expo.easeInOut"
        }
      );
      $('.hamburger').removeClass("is-active");
      navOpen = false;
    
    }

		if(navOpen === false) {
      
      // Open mobile nav ...
			let width = window.innerWidth;
			gsap.to('.mmenu-bg-1',
        {
          duration: 1,
          x: '100%',
          ease: "Expo.easeInOut"
        }
      );
			gsap.to('.mmenu-bg-2', 
        {
          delay: 0.1,
          duration: 1,
          x: '100%',
          ease: "Expo.easeInOut"
        }
      );
			gsap.fromTo('.mmenu a',
        {
          autoAlpha: 0,
          x: 100
        }, {
          delay: 0.75,
          duration: 1,
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          ease: "power4.out"
        }
      );
			navOpen = true;

    } else if (navOpen === true) {
      
      // Close mobile nav ...
      closeNav();

    }  

    // Enable escape key to close nav ... 
    $(document).on('keydown', (event) => {

      if (event.key === "Escape") {
        closeNav();
      }  

    });  

  }); // End toggle mobile menu ...

  // On window resize event handler ...
  $(window).on("resize", () => {
    let width = window.innerWidth;
		if (navOpen === true) {
      $(".mmenu-bg-1, .mmenu-bg-2").css("width", "100%");
      gsap.to(".mmenu-bg-1, .mmenu-bg-2",
        {
          duration: 0,
          x: width
        }
      );
    }
  });

  // Send e-mail enquiry ...
	$('#btn-submit-enquiry').on('click', (event) => {

    event.preventDefault();

    const first_name = $("input[name=first_name]").val();
    const last_name = $("input[name=last_name]").val();
    const telephone = $("input[name=telephone]").val();
    const email = $("input[name=email]").val();
    const message = $("textarea[name=message]").val();
    const data = {
      first_name: first_name,
      last_name: last_name,
      telephone: telephone,
      email: email,
      message: message
    };
    console.log(data);

    // Process form using ajax ...
    $.ajax({ type: 'POST', url: '/api/send-enquiry/', data: data });
  
  });

});