import './index.html';
import './index.scss';
import './slick/slick.min.js';
import './modules/modalHeader';
import './modules/telephoneInput';
import './modules/chooseButtons';
import './modules/switchTabs';
import './modules/inputRange';
import './modules/filtersTabs';
import './modules/servicePage';
import './modules/range';

document.getElementById("phoneNumber").addEventListener("click", function() {
    var phoneNumber = this.innerHTML;
    navigator.clipboard.writeText(phoneNumber);
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button class='slickButtons a-left control-c prev Buttonprev slick-prev'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.12578 19.1004L0.700781 10.7004C0.600781 10.6004 0.530114 10.4921 0.488781 10.3754C0.446781 10.2587 0.425781 10.1337 0.425781 10.0004C0.425781 9.86706 0.446781 9.74206 0.488781 9.62539C0.530114 9.50872 0.600781 9.40039 0.700781 9.30039L9.12578 0.875391C9.35911 0.642057 9.65078 0.525391 10.0008 0.525391C10.3508 0.525391 10.6508 0.650391 10.9008 0.900391C11.1508 1.15039 11.2758 1.44206 11.2758 1.77539C11.2758 2.10872 11.1508 2.40039 10.9008 2.65039L3.55078 10.0004L10.9008 17.3504C11.1341 17.5837 11.2508 17.8711 11.2508 18.2124C11.2508 18.5544 11.1258 18.8504 10.8758 19.1004C10.6258 19.3504 10.3341 19.4754 10.0008 19.4754C9.66745 19.4754 9.37578 19.3504 9.12578 19.1004Z' fill='white'/></svg></button>",
    nextArrow:"<button class='slickButtons a-right control-c next Buttonnext slick-next'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.87422 19.1004L11.2992 10.7004C11.3992 10.6004 11.4699 10.4921 11.5112 10.3754C11.5532 10.2587 11.5742 10.1337 11.5742 10.0004C11.5742 9.86706 11.5532 9.74206 11.5112 9.62539C11.4699 9.50872 11.3992 9.40039 11.2992 9.30039L2.87422 0.875391C2.64089 0.642057 2.34922 0.525391 1.99922 0.525391C1.64922 0.525391 1.34922 0.650391 1.09922 0.900391C0.849219 1.15039 0.724219 1.44206 0.724219 1.77539C0.724219 2.10872 0.849219 2.40039 1.09922 2.65039L8.44922 10.0004L1.09922 17.3504C0.865886 17.5837 0.749219 17.8711 0.749219 18.2124C0.749219 18.5544 0.874219 18.8504 1.12422 19.1004C1.37422 19.3504 1.66589 19.4754 1.99922 19.4754C2.33255 19.4754 2.62422 19.3504 2.87422 19.1004Z' fill='white'/></svg></button>",
    responsive: [
        {
          breakpoint: 1261,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
            breakpoint: 769,
            settings: {
              arrows: false,
              slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1,
                slidesToScroll: 2,
                infinite: true,
            }
        },
    ]
});


$('.ServicePage__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:"<button class='slickButtons a-left control-c Serviceprev slick-prev'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.12578 19.1004L0.700781 10.7004C0.600781 10.6004 0.530114 10.4921 0.488781 10.3754C0.446781 10.2587 0.425781 10.1337 0.425781 10.0004C0.425781 9.86706 0.446781 9.74206 0.488781 9.62539C0.530114 9.50872 0.600781 9.40039 0.700781 9.30039L9.12578 0.875391C9.35911 0.642057 9.65078 0.525391 10.0008 0.525391C10.3508 0.525391 10.6508 0.650391 10.9008 0.900391C11.1508 1.15039 11.2758 1.44206 11.2758 1.77539C11.2758 2.10872 11.1508 2.40039 10.9008 2.65039L3.55078 10.0004L10.9008 17.3504C11.1341 17.5837 11.2508 17.8711 11.2508 18.2124C11.2508 18.5544 11.1258 18.8504 10.8758 19.1004C10.6258 19.3504 10.3341 19.4754 10.0008 19.4754C9.66745 19.4754 9.37578 19.3504 9.12578 19.1004Z' fill='white'/></svg></button>",
  nextArrow:"<button class='slickButtons a-right control-c Servicenext slick-next'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.87422 19.1004L11.2992 10.7004C11.3992 10.6004 11.4699 10.4921 11.5112 10.3754C11.5532 10.2587 11.5742 10.1337 11.5742 10.0004C11.5742 9.86706 11.5532 9.74206 11.5112 9.62539C11.4699 9.50872 11.3992 9.40039 11.2992 9.30039L2.87422 0.875391C2.64089 0.642057 2.34922 0.525391 1.99922 0.525391C1.64922 0.525391 1.34922 0.650391 1.09922 0.900391C0.849219 1.15039 0.724219 1.44206 0.724219 1.77539C0.724219 2.10872 0.849219 2.40039 1.09922 2.65039L8.44922 10.0004L1.09922 17.3504C0.865886 17.5837 0.749219 17.8711 0.749219 18.2124C0.749219 18.5544 0.874219 18.8504 1.12422 19.1004C1.37422 19.3504 1.66589 19.4754 1.99922 19.4754C2.33255 19.4754 2.62422 19.3504 2.87422 19.1004Z' fill='white'/></svg></button>",
  responsive: [
      {
        breakpoint: 1261,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
          }
      },
      {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
          }
      },
  ]
});




$('.Banners__slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('.ServiceProjects__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<button class='slickButtons a-left control-c ServiceProjprev slick-prev'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.12578 19.1004L0.700781 10.7004C0.600781 10.6004 0.530114 10.4921 0.488781 10.3754C0.446781 10.2587 0.425781 10.1337 0.425781 10.0004C0.425781 9.86706 0.446781 9.74206 0.488781 9.62539C0.530114 9.50872 0.600781 9.40039 0.700781 9.30039L9.12578 0.875391C9.35911 0.642057 9.65078 0.525391 10.0008 0.525391C10.3508 0.525391 10.6508 0.650391 10.9008 0.900391C11.1508 1.15039 11.2758 1.44206 11.2758 1.77539C11.2758 2.10872 11.1508 2.40039 10.9008 2.65039L3.55078 10.0004L10.9008 17.3504C11.1341 17.5837 11.2508 17.8711 11.2508 18.2124C11.2508 18.5544 11.1258 18.8504 10.8758 19.1004C10.6258 19.3504 10.3341 19.4754 10.0008 19.4754C9.66745 19.4754 9.37578 19.3504 9.12578 19.1004Z' fill='white'/></svg></button>",
  nextArrow:"<button class='slickButtons a-right control-c ServiceProjnext slick-next'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.87422 19.1004L11.2992 10.7004C11.3992 10.6004 11.4699 10.4921 11.5112 10.3754C11.5532 10.2587 11.5742 10.1337 11.5742 10.0004C11.5742 9.86706 11.5532 9.74206 11.5112 9.62539C11.4699 9.50872 11.3992 9.40039 11.2992 9.30039L2.87422 0.875391C2.64089 0.642057 2.34922 0.525391 1.99922 0.525391C1.64922 0.525391 1.34922 0.650391 1.09922 0.900391C0.849219 1.15039 0.724219 1.44206 0.724219 1.77539C0.724219 2.10872 0.849219 2.40039 1.09922 2.65039L8.44922 10.0004L1.09922 17.3504C0.865886 17.5837 0.749219 17.8711 0.749219 18.2124C0.749219 18.5544 0.874219 18.8504 1.12422 19.1004C1.37422 19.3504 1.66589 19.4754 1.99922 19.4754C2.33255 19.4754 2.62422 19.3504 2.87422 19.1004Z' fill='white'/></svg></button>",
  responsive: [
      {
        breakpoint: 1261,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
          }
      },
      {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
          }
      },
  ]
});

// function setEventsToHeaderItems() {
//   const tabs_elements = document.querySelectorAll('.headerBottom__item');

//   const hideAllTabs = () => {
//     const tabs_contents = document.querySelectorAll('.headerBottomCatalog');
//     tabs_contents.forEach(content => content.style.display = "none");
//   }

//   const onTabEvent = e => {
//     let target = e.target;

//     if(target.nodeName !== "BUTTON")
//       target = target.parentElement;

//     console.log([target]);

//     const type = e.type === "mouseover" ? "hover_in" : "hover_out";

    // if(type === "hover_in") {
    //   hideAllTabs();

    //   const active_tab = document.querySelector(`.headerBottomCatalog[type="${target.getAttribute('type')}"]`)
  
    //   if(active_tab)
    //     active_tab.style.display = 'block';
    // } else {

    //   hideAllTabs();
    // }
//   }

//   tabs_elements.forEach(element => {
//     // $(element).on('mousein', onTabEvent);
//     // $(element).on('mouseout', onTabEvent);
//     element.addEventListener('mouseover', onTabEvent);
//     element.addEventListener('mouseout', onTabEvent);
//   });
// }

function setEventsToHeaderItems() {
  const header_background = document.querySelector('.headerBottomBg');

  const updateHeaderBackgroundHeight = () => {
    const heightParent = document.querySelector('.headerBottomCatalogsItems2000');
    header_background.style.height = `${heightParent.offsetHeight}px`;
  }

  const hideAllTabs = () => {
    const tabs_contents = document.querySelectorAll('.headerBottomCatalog');
    
    tabs_contents.forEach(content => {
      if(content.style.display !== "none")
        content.style.display = "none";
    });

    updateHeaderBackgroundHeight();
  }

  const onTabEvent = e => {
    let target = e.target;

    // console.log(e);

    if(e.type === "mouseenter") {
      const active_tab = document.querySelector(`.headerBottomCatalog[type="${target.getAttribute('type')}"]`)
  
      if(active_tab)
        active_tab.style.display = "block";  
      else
        hideAllTabs();
    }

    updateHeaderBackgroundHeight();
  }

  document.querySelector('.headerBottomCatalogsItems2000').addEventListener('mouseleave', hideAllTabs);
  document.querySelectorAll('.headerBottom__item').forEach(e => e.addEventListener('mouseenter', onTabEvent))
  document.querySelectorAll('.headerBottom__item').forEach(e => e.addEventListener('mouseleave', onTabEvent))
}


setEventsToHeaderItems();
