
"use strict";

/* ====================================== */
/* Circle Progress bar
/* ====================================== */
var creativesplanet_circle_progressbar = function() {

	jQuery('.cspt-circle-outer').each(function(){

		var this_circle = jQuery(this);

		// Circle settings
		var emptyFill_val = "rgba(0, 0, 0, 0)";
		var thickness_val = 10;
		var fill_val      = this_circle.data('fill');

		if( typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill')!='' ){
			emptyFill_val = this_circle.data('emptyfill');
		}
		if( typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness')!='' ){
			thickness_val = this_circle.data('thickness');
		}
		if( typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype')=='gradient' ){
			fill_val = {gradient: [ this_circle.data('gradient1') , this_circle.data('gradient2') ], gradientAngle: Math.PI / 4 };
		}

		if( typeof jQuery.fn.circleProgress == "function" ){
			var digit   = this_circle.data('digit');
			var before  = this_circle.data('before');
			var after   = this_circle.data('after');
			//var c_width  = this_circle.data('width');
			var digit       = Number( digit );
			var short_digit = ( digit/100 ); 

			jQuery('.cspt-circle', this_circle ).circleProgress({
				value		: 0,
				//size		: c_width,
				startAngle	: -Math.PI / 4 * 2,
				thickness	: thickness_val,
				emptyFill	: emptyFill_val,
				fill		: fill_val
			}).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
				this_circle.find('.cspt-circle-number').html( before + Math.round( stepValue*100 ) + after );
			});
		}

		this_circle.waypoint(function(direction) {
			if( !this_circle.hasClass('completed') ){
				// Re draw when view
				if( typeof jQuery.fn.circleProgress == "function" ){
					jQuery('.cspt-circle', this_circle ).circleProgress( { value: short_digit } );
				};
				this_circle.addClass('completed');
			}
		}, { offset:'85%' });

	});
}

/* ====================================== */
/* Team right area in style 1
/* ====================================== */
var creativesplanet_set_team_right_column = function() {
	setTimeout(function(){
		jQuery( '.cspt-element-team-style-1' ).each(function(){
			var thisele = jQuery(this);
			if( jQuery(this).closest('.vc_row').data('vc-stretch-content')==true ){
				var body_width = jQuery( 'body' ).outerWidth();
				var container_width = jQuery( '.cspt-container', thisele ).outerWidth();
				var padding_left = ( body_width - container_width ) / 2 ;
				jQuery( '.cspt-team-1-head-area > .cspt-team-1-inner', thisele ).css( 'padding-left', padding_left );
			}
		});
	}, 100);
};

/* ====================================== */
/* Carousel
/* ====================================== */
var creativesplanet_carousel = function() {

	jQuery(".creativesplanet-element-viewtype-carousel").each(function() {

		var carouselElement = jQuery( this );
		var show_portion 	= jQuery(this).data('show-portion');

		jQuery('.cspt-ele' , carouselElement).removeClass( function (index, className) {
			return (className.match (/(^|\s)col-md-\S+/g) || []).join(' ');
		}).removeClass( function (index, className) {
			return (className.match (/(^|\s)col-lg-\S+/g) || []).join(' ');
		});

		var columns = jQuery( this ).data('columns');
		var loop = jQuery( this ).data('loop');

		if( columns == '1' ){
			var responsive_items = [ /* 1199 : */ '1', /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
		} else if( columns == '2' ){
			var responsive_items = [ /* 1199 : */ '2', /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
		} else if( columns == '3' ){
			var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
		} else if( columns == '4' ){
			var responsive_items = [ /* 1199 : */ '4', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
		} else if( columns == '5' ){
			var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
		} else if( columns == '6' ){
			var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
		} else {
			var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
		}

		if( show_portion == true ){
			if (columns == '1') {
				responsive_items = [ /* 1199 : */ '1.3', /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1'];
			} else if (columns == '2') {
				responsive_items = [ /* 1199 : */ '2.3', /* 991 : */ '2.3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1'];
			} else if (columns == '3') {
				responsive_items = [ /* 1199 : */ '3.3', /* 991 : */ '2.3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1'];
			} else if (columns == '4') {
				responsive_items = [ /* 1199 : */ '4.3', /* 991 : */ '4.3', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1'];
			} else if (columns == '5') {
				responsive_items = [ /* 1199 : */ '5.3', /* 991 : */ '4.3', /* 767 : */ '3.3', /* 575 : */ '2', /* 0 : */ '1'];
			} else if (columns == '6') {
				responsive_items = [ /* 1199 : */ '6.3', /* 991 : */ '4.3', /* 767 : */ '3.3', /* 575 : */ '2', /* 0 : */ '1'];
			} else {
				responsive_items = [ /* 1199 : */ '3.3', /* 991 : */ '3.3', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1']; // default
			}
		}

		var margin_val = 30;
		if( jQuery(carouselElement).data('margin')!='' ){
			margin_val = jQuery(carouselElement).data('margin');
		}

		var posts_wrapper_class = '.cspt-element-posts-wrapper';
	
		var val_nav = jQuery(carouselElement).data('nav');
		if( val_nav=='above' ){
			val_nav = false;
		}

		var val_rtl = false;
		if( jQuery('body').hasClass('rtl') ){
			val_rtl = true;
		}

		var car_options = {
			loop			    : jQuery(carouselElement).data('loop'),
			autoplay		    : jQuery(carouselElement).data('autoplay'),
			autoplayHoverPause  : true,
			center		     	: jQuery(carouselElement).data('center'),
			nav					: val_nav,
			rtl					: val_rtl,
			dots				: jQuery(carouselElement).data('dots'),
			autoplaySpeed		: jQuery(carouselElement).data('autoplayspeed'),
			autoplayTimeout		: jQuery(carouselElement).data('autoplaytimeout'),
			navSpeed			: jQuery(carouselElement).data('autoplayspeed'),
			dotsSpeed			: jQuery(carouselElement).data('autoplayspeed'),
			dragEndSpeed		: jQuery(carouselElement).data('autoplayspeed'),
			margin				: 30,
			items				: columns,
			responsiveClass		: true,
			responsive			: {
				1199 : {
					items	: responsive_items[0],
				},
				991	 : {
					items	: responsive_items[1],
				},
				767	 : {
					items	: responsive_items[2],
				},
				575	 : {
					items	: responsive_items[3],
				},
				0	 : {
					items	: responsive_items[4],
				}
			}
		};
		

		// gap - margin
		if( typeof margin_val == "string" && margin_val!='' ){
			margin_val = margin_val.replace( 'px', '');
			margin_val = parseInt(margin_val);
			car_options['margin'] = margin_val;
		}

		// apply carousel effect with options
		var cspt_owl = jQuery( posts_wrapper_class, carouselElement).removeClass('row multi-columns-row').addClass('owl-carousel').owlCarousel( car_options );

		jQuery('.cspt-carousel-prev', carouselElement).click(function(event) {
			event.preventDefault();
			cspt_owl.trigger('prev.owl.carousel', [jQuery(carouselElement).data('autoplayspeed')]);

		});
		jQuery('.cspt-carousel-next', carouselElement).click(function(event) {
			event.preventDefault();
			cspt_owl.trigger('next.owl.carousel', [jQuery(carouselElement).data('autoplayspeed')]);
		});

	});
};

/* ====================================== */
/* Animate on scroll : Number rotator
/* ====================================== */
var creativesplanet_number_rotate = function() {
	jQuery(".cspt-number-rotate").each(function() {
		var self      = jQuery(this);
		var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
		var animation = self.data("appear-animation");

		self.html('0');
		self.waypoint(function(direction) {
			if( !self.hasClass('completed') ){
				var from     = self.data('from');
				var to       = self.data('to');
				var interval = self.data('interval');
				self.numinate({
					format: '%counter%',
					from: from,
					to: to,
					runningInterval: 2000,
					stepUnit: interval,
					onComplete: function(elem) {
						self.addClass('completed');
					}
				});
			}
		}, { offset:'85%' });
	});
};

/* ====================================== */
/* Image size correction
/* ====================================== */
var creativesplanet_img_size_correction = function() {
	setTimeout(function(){
		jQuery("img").each(function() {
			var thisimg = jQuery( this );
			var p_width = jQuery( this ).parent().width();
			var width   = jQuery( this ).attr('width');
			var height  = jQuery( this ).attr('height');
			if( (typeof width !== typeof undefined && width !== false) && (typeof height !== typeof undefined && height !== false) ){
				var ratio  = height/width;
				jQuery( this ).data('cspt-ratio', ratio);
				var real_width = jQuery( this ).width();
				var new_height = Math.round(real_width * ratio);
				//jQuery( this ).attr('width', real_width);
				//jQuery( this ).attr('height', new_height);
			}
		});
	}, 100);
};

/* ====================================== */
/* BMI Calculator
/* ====================================== */
var creativesplanet_bmi_calculator = function() {

	jQuery('.cspt-bmi-calc-type').on('change', function() {
		var main = jQuery( this ).closest('.cspt-bmi-cal-wrapper');
		var val = jQuery( '.cspt-bmi-calc-type:checked', main ).val();

		if( val == 'imperial' ){
			jQuery('.cspt-bmi-calc-imperial', main).show();
			jQuery('.cspt-bmi-calc-metric', main).hide();
		} else {
			jQuery('.cspt-bmi-calc-imperial', main).hide();
			jQuery('.cspt-bmi-calc-metric', main).show();
		}
	});

	jQuery('.cspt-bmi-calc-imperial input.cspt-input, .cspt-bmi-calc-metric input.cspt-input').on('keyup', function() {
		var main = jQuery( this ).closest('.cspt-bmi-cal-wrapper');
		var type = '';
		if( jQuery( this ).closest('.cspt-bmi-calc-metric').length > 0 ){
			type = 'metric';
			var result_div = jQuery('.cspt-bmi-result-metric', main);
			var height     = jQuery('.cspt-metric-cm', main).val() / 100; // convert to meter
			var weight     = jQuery('.cspt-metric-kg', main).val();
			var bmi = weight / Math.pow(height, 2);

		} else {
			type = 'imperial';
			var result_div = jQuery('.cspt-bmi-result-imperial', main);
			var imperial_feet = jQuery('.cspt-imperial-feet', main).val();
			var imperial_inch = jQuery('.cspt-imperial-inch', main).val();
			var imperial_lbs  = jQuery('.cspt-imperial-lbs', main).val();
			var inch = parseFloat(imperial_feet*12) + parseFloat(imperial_inch);
			var bmi = ( imperial_lbs / Math.pow( inch, 2)) * 703;
		}

		var bmi_style = 'bg-success text-white';
		var bmi_category = 'normal BMI';
		if (bmi < 16) {
			bmi_style = 'bg-danger text-white';
			bmi_category = 'severe thinness';
		} else if (bmi < 17) {
			bmi_style = 'bg-warning text-dark';
			bmi_category = 'moderate thinness';
		} else if (bmi < 18.5) {
			bmi_style = 'bg-info text-white';
			bmi_category = 'mild thinness';
		} else if (bmi < 25) {
			bmi_style = 'bg-success text-white';
			bmi_category = 'normal BMI';
		} else if (bmi < 30) {
			bmi_style = 'bg-info text-white';
			bmi_category = 'pre obese';
		} else if (bmi < 35) {
			bmi_style = 'bg-warning text-dark';
			bmi_category = 'obese class I';
		} else if (bmi < 40) {
			bmi_style = 'bg-warning text-dark';
			bmi_category = 'obese class II';
		} else {
			bmi_style = 'bg-danger text-white';
			bmi_category = 'obese class III';
		}

		if( ( type == 'metric' && jQuery('.cspt-metric-cm', main).val() != '' && jQuery('.cspt-metric-kg', main).val() != '' ) || (type == 'imperial' && jQuery('.cspt-imperial-feet', main).val() != '' && jQuery('.cspt-imperial-inch', main).val() != '' && jQuery('.cspt-imperial-lbs', main).val() != '' ) ){
			jQuery(result_div).show().html( '<p>Your BMI is ' + ( Math.round(bmi * 100) / 100 ) + '</p> <p> (' + bmi_category + ')</p>' ).removeClass('bg-success bg-danger bg-warning bg-info text-white text-dark cspt-hide').addClass( bmi_style );

		} else {
			jQuery(result_div).hide();

		}

	});

};

function cspt_column_sticky() {
	ScrollTrigger.matchMedia({
		"(min-width: 991px)": function() {

			let pbmit_sticky_container = jQuery(".pbmit-sticky-col");
			let section = pbmit_sticky_container.closest('.vc_row');
			if (!section[0]) {
				section = pbmit_sticky_container.closest('.pbmit-sticky-section');
			}

			let tl = gsap.timeline({
				scrollTrigger: {
					pin: true,
					scrub: 1,
					trigger: pbmit_sticky_container,
					end: () => "+=" + ((section.height() + 200) - document.documentElement.clientHeight)
				},
				defaults: { ease: "none", duration: 1 }
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(pbmitpanels => pbmitpanels.kill(true));
		},
	});
}


jQuery(window).resize(function(){

	/* Team right area in style */
	creativesplanet_set_team_right_column();

	/* Image size correction */
	creativesplanet_img_size_correction();
	cspt_column_sticky();

});

jQuery(window).load(function(){
	/* Circle Progress bar */
	creativesplanet_circle_progressbar();
	
});

jQuery(document).ready(function(){

	/* Carousel */
	setTimeout(function(){
		creativesplanet_carousel();
	}, 100);

	/* Image size correction */
	creativesplanet_img_size_correction();

	/* Team right area in style */
	creativesplanet_set_team_right_column();
	
	/* Circle Progress bar */
	creativesplanet_circle_progressbar();

	/* Animate on scroll : Number rotator */
	creativesplanet_number_rotate();

	/* BMI Calculator */
	creativesplanet_bmi_calculator();

});