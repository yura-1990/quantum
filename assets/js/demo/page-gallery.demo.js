/*
Template Name: QUANTUM - Responsive Bootstrap 5 Admin Template
Version: 1.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/quantum/
*/

import PhotoSwipeLightbox from '../../plugins/photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
	gallery: '.gallery-image-list',
	children: 'a',
	pswpModule: () => import('../../plugins/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();