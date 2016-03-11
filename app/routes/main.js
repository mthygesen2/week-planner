import Ember from 'ember';


export default Ember.Route.extend({
  centerMode: true,
  infinite: true,
  autoplaySpeed: 60,
  speed: 500,
  prevArrow : '<button type="button" class="slick-prev"> <</button>',
  nextArrow : '<button type="button" class="slick-next"> ></button>',
  swipeToSlide: true,
  slidesToShow: 3,
  breakpoints: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],

  actions: {
    toFinalMap() {
      this.transitionTo('final');
    }
  }
});
