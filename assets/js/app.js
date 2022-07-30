if (window.matchMedia('(min-width:1200px)').matches) {
	let scene = document.getElementById('scene');
	let parallaxInstance = new Parallax(scene, {
		relativeInput: true,
	});
	let sceneHead = document.getElementById('header');
	let parallaxBlur = new Parallax(sceneHead, {
		relativeInput: true,
		hoverOnly: true,
	});
	let sceneBoth = document.getElementById('both');
	let parallaxBoth = new Parallax(sceneBoth, {
		relativeInput: true,
	});
	let sceneGirl = document.getElementById('girl');
	let parallaxGirl = new Parallax(sceneGirl, {
		relativeInput: true,
	});
	let sceneGarant = document.getElementById('garant');
	let parallaxGarant = new Parallax(sceneGarant, {
		relativeInput: true,
		hoverOnly: true,
	});
	let scene1 = document.getElementById('advan1');
	let parallaxA = new Parallax(scene1, {
		relativeInput: true,
	});
	let scene2 = document.getElementById('advan2');
	let parallaxB = new Parallax(scene2, {
		relativeInput: true,
	});
	let scene3 = document.getElementById('advan3');
	let parallaxC = new Parallax(scene3, {
		relativeInput: true,
	});
	let scene4 = document.getElementById('advan4');
	let parallaxD = new Parallax(scene4, {
		relativeInput: true,
	});
	let scene5 = document.getElementById('advan5');
	let parallaxE = new Parallax(scene5, {
		relativeInput: true,
	});
	let scene6 = document.getElementById('advan6');
	let parallaxF = new Parallax(scene6, {
		relativeInput: true,
	});
	let sceneGood = document.getElementById('good');
	let parallaxGood = new Parallax(sceneGood, {
		relativeInput: true,
	});
	let sceneMail = document.getElementById('mail');
	let parallaxMail = new Parallax(sceneMail, {
		relativeInput: true,
	});
}

// let lang = document.querySelectorAll('.header__choose')
// let currentLocation = location.href;
// let menu = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

// lang.forEach(c => {

// 	c.addEventListener('click', function () {
// 		lang.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')
// 	})

// })

// Для многостраничной страницы

// for (let i = 0; i < menuLength; i++) {
// 	if (menu[i].href === currentLocation) {
// 		menu[i].classList.add("active");
// 	}
// }
let burger = document.querySelector('.burger');
let burgerItem = document.querySelector('.menu__icon');
let iconMenu = document.querySelector('.menu__body');
let shadow = document.querySelector('.shadow__blur');

if (burger) {
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');
		burgerItem.classList.toggle('active');
		iconMenu.classList.toggle('active');
		shadow.classList.toggle('active');
	});
}
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

let swiperZoom;

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	simulateTouch: false,

	touchAngle: 90,
	grabCursor: true,

	loop: true,

	preloadImages: false,
	lazy: true,
});

let modalBtn = document.querySelectorAll('[data-modal]');
let madalCLose = document.querySelectorAll('.popup__close');
let madalArea = document.querySelectorAll('.popup');

modalBtn.forEach(i => {
	i.addEventListener('click', e => {
		e.preventDefault();
		let current = e.currentTarget;
		let modalId = current.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
		let modalContent = document.querySelector('.popup__content');

		let modalImg = modal.querySelector('.popup__img');
		let modalVideo = modal.querySelector('.popup-video__main');
		let modalZoom = modal.querySelector('.popup-zoom__main');
		let modalTeam = modal.querySelector('.popup-team__main');
		let modalJob = modal.querySelector('.popup-job__main');

		modalContent.addEventListener('click', e => {
			e.stopPropagation();
		});

		if (modalJob) {
			const idx = current.getAttribute('data-idx');
			console.log(idx);
			const swiperJob = new Swiper('.swiper-job', {
				navigation: {
					nextEl: '.job-next',
					prevEl: '.job-prev',
				},

				loop: true,
				autoHeight: true,

				initialSlide: +idx,
				simulateTouch: false,

				preloadImages: false,
				lazy: true,
			});
		}

		if (modalTeam) {
			const index = current.getAttribute('data-initial');
			console.log(index);
			const swiperTeam = new Swiper('.swiper-team', {
				navigation: {
					nextEl: '.team-next',
					prevEl: '.team-prev',
				},

				loop: true,

				initialSlide: index - 1,

				simulateTouch: false,

				preloadImages: false,
				lazy: true,
			});
		}

		if (modalZoom) {
			swiperZoom = new Swiper('.swiper-zoom', {
				navigation: {
					nextEl: '.zoom__btn-next',
					prevEl: '.zoom__btn-prev',
				},

				simulateTouch: false,

				preloadImages: false,
				lazy: true,
			});

			const parentImg = current.closest('.section-review__images');
			const parentItem = parentImg.querySelectorAll('img');

			parentItem.forEach((i, idx) => {
				const slide = document.createElement('div');
				slide.classList.add('swiper-slide');
				slide.classList.add('swiper-zoom__slide');
				let imgSrc = i.getAttribute('src');
				let tagImg = document.createElement('div');
				tagImg.setAttribute('data-zoomist-src', imgSrc);
				tagImg.setAttribute('id', `item${idx}`);

				slide.appendChild(tagImg);

				swiperZoom.appendSlide(slide);

				new Zoomist(`#item${idx}`, {
					height: '75%',
					slider: true,
					zoomer: true,
				});
			});
		}

		if (modalImg) {
			console.log(2);
			if (current.hasAttribute('data-fin')) {
				modalImg.setAttribute('src', 'assets/img/finmodel.webp');
			} else if (current.hasAttribute('data-contact')) {
				modalImg.setAttribute('src', 'assets/img/contract.webp');
			} else {
				modalImg.setAttribute('src', 'assets/img/popup.webp');
			}
		}

		if (modalVideo) {
			console.log(1);
			if (current.hasAttribute('data-s')) {
				modalVideo.innerHTML = `
				<iframe width="1366" height="607" src="https://www.youtube.com/embed/PBo-YS4l48U" title="Видео интервью с партнером 02.02.2022 г" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`;
			} else if (current.hasAttribute('data-d')) {
				modalVideo.innerHTML = `
				<iframe width="1366" height="480" src="https://www.youtube.com/embed/jU_NmmurNhI" title="Как менеджер купил сам у себя, видя результаты своих клиентов!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`;
			} else if (current.hasAttribute('data-e')) {
				modalVideo.innerHTML = `
				<iframe width="403" height="500" src="https://www.youtube.com/embed/SV07SbnoaY8" title="ОС от партнера Екатерины" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`;
			} else if (current.hasAttribute('data-sk')) {
				modalVideo.innerHTML = `
				<iframe width="403" height="500" src="https://www.youtube.com/embed/fIHV56DvU-4" title="Обзор одного из наших складов на ул. Иркутская" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`;
			}
		}

		modal.classList.add('open');
		document.body.classList.add('lock');
	});
});

madalCLose.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget.closest('.popup');
		let currentModalZoom = e.currentTarget.closest('.popup-zoom');
		let currentModalTeam = e.currentTarget.closest('.popup-team');

		if (currentModal) {
			const iframe = currentModal.querySelector('iframe');
			if (iframe) {
				let iframeSrc = iframe.src;
				iframe.src = iframeSrc;
			}
		}

		if (currentModalZoom) {
			let swiperWrapper =
				currentModalZoom.querySelector('.swiper-wrapper');
			currentModalZoom.classList.remove('open');
			swiperWrapper.innerHTML = '';
		} else if (currentModalTeam) {
			currentModalTeam.classList.remove('open');
		} else {
			currentModal.classList.remove('open');
		}

		document.body.classList.remove('lock');
	});
});

madalArea.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		const iframe = currentModal.querySelector('iframe');
		if (iframe) {
			let iframeSrc = iframe.src;
			iframe.src = iframeSrc;
		}
		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	});
});
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

'use strict';

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = '_dynamic_adapt_';
	// массив DOM-элементов
	this.nodes = document.querySelectorAll('[data-da]');

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(',');
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
		оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(
		this.оbjects,
		function (item) {
			return (
				'(' +
				this.type +
				'-width: ' +
				item.breakpoint +
				'px),' +
				item.breakpoint
			);
		},
		this
	);
	this.mediaQueries = Array.prototype.filter.call(
		this.mediaQueries,
		function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		}
	);

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(
			this.оbjects,
			function (item) {
				return item.breakpoint === mediaBreakpoint;
			}
		);
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
};

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
};

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === 'min') {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === 'first' || b.place === 'last') {
					return -1;
				}

				if (a.place === 'last' || b.place === 'first') {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === 'first' || b.place === 'last') {
					return 1;
				}

				if (a.place === 'last' || b.place === 'first') {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt('max');
da.init();
const body = document.querySelector('body');

body.addEventListener('click', function (e) {
	let target = e.target;
	if (!target.hasAttribute('data-scroll-to')) {
		return;
	}

	let scrollToItemClass = target
		.closest('[data-scroll-to]')
		.getAttribute('data-scroll-to');

	let scrollToItem = document.querySelector('.' + scrollToItemClass);

	if (scrollToItem) {
		scrollToSection(scrollToItem);
	}
});

let scrollToSection = function (item) {
	let targetTop = item.getBoundingClientRect().top;
	let scrollTop = window.pageYOffset;
	let summTop = scrollTop + targetTop;

	window.scrollTo({ top: summTop, behavior: 'smooth' });

	// components/burger.js
	let burgerMain = document.querySelector('.burger');
	let burger = document.querySelector('.menu__icon');
	let iconMenu = document.querySelector('.menu__body');
	let shadow = document.querySelector('.shadow__blur');

	if (window.matchMedia('(max-width:1200px)').matches) {
		iconMenu.classList.remove('active');
		burger.classList.remove('active');
		burgerMain.classList.remove('active');
		document.body.classList.remove('lock');
		shadow.classList.remove('active');
	}
};

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Zoomist=e()}(this,(function(){"use strict";const t="zoomist",e=["slider","zoomer"],o="zoomist-container",i="zoomist-slider",s="zoomist-in-zoomer",n="zoomist-out-zoomer",a="zoomist-zoomer-disable",r=!(!("undefined"!=typeof window&&void 0!==window.document)||!("ontouchstart"in window)),l=r?"touchstart":"mousedown",d=r?"touchmove":"mousemove",h=r?"touchend":"mouseup";var c={fill:"cover",src:"data-zoomist-src",draggable:!0,wheelable:!0,pinchable:!0,bounds:!0,zoomRatio:.1,maxRatio:!1,height:"auto"};const m={el:i,direction:"horizontal",maxRatio:2},u={inEl:s,outEl:n,disableOnBounds:!0},p={ready:null,zoom:null,wheel:null,dragStart:null,drag:null,dragEnd:null,pinchStart:null,pinch:null,pinchEnd:null,slideStart:null,slide:null,slideEnd:null,resize:null,reset:null,destroy:null,update:null},g=(t,e)=>{t||(t={});for(const[o,i]of Object.entries(e))t[o]=i},f=t=>Object.assign({},t),v=t=>"number"==typeof t&&!isNaN(t),w=t=>null!==z(t),z=t=>t instanceof HTMLElement?t:document.querySelector(t),E=t=>w(t)&&"IMG"===z(t).tagName,_=t=>"function"==typeof t,y=(t,e)=>{for(const[o,i]of Object.entries(e))t.style[o]=v(i)?`${i}px`:i},x=t=>{const e=!r||"wheel"===t.type;return{x:e?t.pageX:t.touches[0].pageX,y:e?t.pageY:t.touches[0].pageY,clientX:e?t.clientX:t.touches[0].clientX,clientY:e?t.clientY:t.touches[0].clientY}},b=t=>{const e=getComputedStyle(t).transform;let o=e.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[12]):(o=e.match(/^matrix\((.+)\)$/),o?parseFloat(o[1].split(", ")[4]):0)},Y=t=>{const e=getComputedStyle(t).transform;let o=e.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[13]):(o=e.match(/^matrix\((.+)\)$/),o?parseFloat(o[1].split(", ")[5]):0)},L=t=>+(Math.round(t+"e+2")+"e-2"),X=(t,e,o)=>Math.min(Math.max(t,e),o);var D={getContainerData(){return f(this.data.containerData)},getImageData(){return f(this.data.imageData)},getSliderValue(){return this.__modules__.slider?.value},getZoomRatio(){return this.ratio},zoom(t,e){const{image:o,data:i,options:s,ratio:n}=this,{bounds:r,maxRatio:l}=s;if(r&&1===n&&t<0)return;if(l&&n===l&&t>0)return;const{originImageData:d}=i,h=this.getContainerData(),c=this.getImageData(),m=o.getBoundingClientRect(),u=L(n*(t+1)),p=r&&u<1?1:l&&u>l?l:u,f=p/n-1,v=d.width*p,w=d.height*p,z=(h.width-v)/2,E=(h.height-w)/2,_=e?(c.width/2-e.clientX+m.left)*f+b(o):b(o),x=e?(c.height/2-e.clientY+m.top)*f+Y(o):Y(o),D=r?X(_,z,-z):_,R=r?X(x,E,-E):x,O={width:v,height:w,left:z,top:E};if(g(i.imageData,O),y(o,{...O,transform:`translate(${D}px, ${R}px)`}),this.ratio=p,this.emit("zoom",p),s.slider){const{slider:t}=this.__modules__,e=100*L(1-(t.maxRatio-p)/(t.maxRatio-1));t.value=X(e,0,100),this.slideTo(e,!0)}if(s.zoomer){const{zoomer:t}=this.__modules__;if(t.disableOnBounds){const{bounds:t}=s,{zoomerInEl:e,zoomerOutEl:o}=this.__modules__.zoomer;t&&1===this.ratio?o.classList.add(a):o.classList.remove(a),this.ratio===l?e.classList.add(a):e.classList.remove(a)}}return this},zoomTo(t){const{ratio:e}=this;if(t!==e){const o=t/e-1;this.zoom(o)}return this},move(t=0,e=0){const{image:o,data:i,options:s}=this,{imageData:n,dragData:a}=i,{top:r,left:l}=n,{transX:d,transY:h}=a,{bounds:c}=s,m=c?X(d-t,l,-l):d-t,u=c?X(h-e,r,-r):h-e,p=L(m),f=L(u);return g(a,{transX:p,transY:f}),o.style.transform=`translate(${p}px, ${f}px)`,this},moveTo(t,e){const{data:o,options:i}=this,{imageData:s,dragData:n}=o,{top:a,left:r}=s,{transX:l,transY:d}=n,{bounds:h}=i;t=t??Math.abs(r),e=e??Math.abs(a);const c=h?X(r+t+l,r,-r):r+t+l,m=h?X(a+e+d,a,-a):a+e+d;return this.move(c,m),this},slideTo(t,e){const{__modules__:o}=this;if(!o.slider)return;const{slider:i}=o,s="horizontal"===i.direction?"left":"top",n="horizontal"===i.direction?"":"-",a=X(t,0,100);if(i.sliderButton.style[s]=`${n}${a}%`,!e){const t=a/100,e=this.ratio<1?this.ratio:1,o=((this.ratio>i.maxRatio?this.ratio:i.maxRatio)-e)*t+e;this.zoomTo(o)}return this},reset(){const{image:t}=this;return this.zoomTo(1),y(t,{transform:"translate(0, 0)"}),this.emit("reset"),this},destroy(){const{element:e,wrapper:i}=this,{slider:s,zoomer:n}=this.__modules__;return e[t]=void 0,this.mounted=!1,s&&this.destroySlider(),n&&this.destroyZoomer(),i.remove(),e.style.removeProperty("width"),e.style.removeProperty("padding-bottom"),e.classList.remove(o),this.emit("destroy"),this},update(){return this.destroy().init(),this.emit("update"),this},on(t,e){if(!_(e))return this;const{__events__:o}=this;return t.split(" ").forEach((t=>{o[t]||(o[t]=[]),o[t].push(e)})),this},emit(...t){const{__events__:e}=this,o=t[0],i=t.slice(1,t.length);return e[o]?(e[o].forEach((t=>{_(t)&&t.apply(this,i)})),this):this}},R=t=>{const{element:e,wrapper:o,image:i,options:s,data:n}=t,{containerData:a,imageData:r,originImageData:c}=n;window.addEventListener("resize",(()=>{if(a.width===e.offsetWidth)return;const o=e.offsetWidth/a.width,s=e.offsetHeight/a.height,n=c.width*o,l=c.height*s,d=c.left*o,h=c.top*s,m=r.width*o,u=r.height*s,p=r.left*o,f=r.top*s,v=b(i)*o,w=Y(i)*s;g(a,{width:e.offsetWidth,height:e.offsetHeight}),g(c,{width:n,height:l,left:d,top:h}),g(r,{width:m,height:u,left:p,top:f}),y(t.image,{width:m,height:u,left:p,top:f,transform:`translate(${v}px, ${w}px)`}),t.emit("resize")})),t.dragging=!1,t.data.dragData={startX:0,startY:0,transX:0,transY:0},"contain"===s.fill&&s.bounds&&(s.bounds=!1);const{dragData:m}=n,u=e=>{if(!t.dragging)return;const o=e.touches&&2===e.touches.length,n=o?(e.touches[0].pageX+e.touches[1].pageX)/2:x(e).x,a=o?(e.touches[0].pageY+e.touches[1].pageY)/2:x(e).y;if(s.bounds){const t=m.startX-(m.transX-r.left),e=m.startX-(m.transX+r.left),o=m.startY-(m.transY-r.top),i=m.startY-(m.transY+r.top);n<t&&(m.startX+=n-t),n>e&&(m.startX+=n-e),a<o&&(m.startY+=a-o),a>i&&(m.startY+=a-i)}const l=L(n-m.startX+m.transX),d=L(a-m.startY+m.transY);i.style.transform=`translate(${l}px, ${d}px)`,t.emit("drag",{x:l,y:d},e)},p=e=>{t.dragging=!1,g(m,{transX:b(i),transY:Y(i)}),t.emit("dragEnd",{x:m.transX,y:m.transY},e),document.removeEventListener(d,u),document.removeEventListener(h,p)};t.pinching=!1,t.data.pinchData={dist:0,startX:0,startY:0};const f=e=>{if(!t.pinching)return;const{pinchData:o}=t.data,i=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY),s=L((i-o.dist)/100),n={clientX:(e.touches[0].clientX+e.touches[1].clientX)/2,clientY:(e.touches[0].clientY+e.touches[1].clientY)/2};t.zoom(s,n),o.dist=i,t.emit("pinch",e)},v=e=>{t.pinching=!1,t.emit("pinchEnd",e),document.removeEventListener(d,f),document.removeEventListener(h,v)};o.addEventListener(l,(e=>{(e=>{if(!s.draggable)return;if(2===e.which||3===e.which)return;const o=e.touches&&2===e.touches.length;g(m,{startX:o?(e.touches[0].pageX+e.touches[1].pageX)/2:x(e).x,startY:o?(e.touches[0].pageY+e.touches[1].pageY)/2:x(e).y,transX:b(i),transY:Y(i)}),t.dragging=!0,t.emit("dragStart",{x:m.transX,y:m.transY},e),document.addEventListener(d,u),document.addEventListener(h,p)})(e),(e=>{if(!s.pinchable)return;if(!e.touches||2!==e.touches.length)return;const{pinchData:o}=t.data;g(o,{dist:Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY),startX:e.touches[0].clientX,startY:e.touches[0].clientY}),t.pinching=!0,t.emit("pinchStart",e),document.addEventListener(d,f),document.addEventListener(h,v)})(e)})),t.wheeling=!1;o.addEventListener("wheel",(e=>{if(!s.wheelable)return;e.preventDefault();const{zoomRatio:o}=s;if(t.wheeling)return;let i;t.wheeling=!0,setTimeout((()=>{t.wheeling=!1}),30),e.deltaY?i=e.deltaY>0?-1:1:e.wheelDelta?i=e.wheelDelta/120:e.detail&&(i=e.detail>0?-1:1),t.zoom(i*o,x(e)),t.emit("wheel",e)}))};var O={createModules(){const{options:t}=this;this.__modules__={},e.forEach((e=>{var o;t[e]&&this[`create${o=e,o.charAt(0).toUpperCase()+o.slice(1)}`]()}))},createSlider(){const{element:t,options:e,__modules__:o}=this;o.slider=Object.assign({},m,e.slider);const{slider:s}=o;e.maxRatio&&Object.assign(s,{maxRatio:e.maxRatio}),"horizontal"!==s.direction&&"vertical"!==s.direction&&(s.direction="horizontal"),s.value=0,s.mounted&&s.sliderMain.remove();const n=s.isCustomEl=s.el&&w(s.el),a=n?z(s.el):document.createElement("div");n||a.classList.add(i),a.innerHTML='\n  <div class="zoomist-slider-main">\n    <span class="zoomist-slider-bar"></span>\n    <span class="zoomist-slider-button"></span>\n  </div>\n',s.sliderEl=a,s.sliderMain=a.querySelector(".zoomist-slider-main"),s.sliderBar=a.querySelector(".zoomist-slider-bar"),s.sliderButton=a.querySelector(".zoomist-slider-button"),s.sliderMain.classList.add(`zoomist-slider-${s.direction}`),(t=>{const{slider:e}=t.__modules__;e.sliding=!1;const o="horizontal"===e.direction,i=i=>{const s=e.sliderMain.getBoundingClientRect(),n=o?x(i).clientX:-x(i).clientY,a=o?s.width:s.height,r=o?s.left:-s.bottom,l=X(L((n-r)/a),0,1),d=t.ratio<1?t.ratio:1,h=((t.ratio>e.maxRatio?t.ratio:e.maxRatio)-d)*l+d;t.zoomTo(h)},s=o=>{i(o),e.sliding=!0,t.emit("slideStart",t.getSliderValue(),o),document.addEventListener(d,n),document.addEventListener(h,a)},n=o=>{e.sliding&&(i(o),t.emit("slide",t.getSliderValue(),o))},a=o=>{e.sliding=!1,t.emit("slideEnd",t.getSliderValue(),o),document.removeEventListener(d,n),document.removeEventListener(h,a)};e.sliderMain.addEventListener(l,s),e.sliderMain.event=s})(this),s.mounted=!0,n||t.append(a)},destroySlider(){const{slider:t}=this.__modules__;t&&t.mounted&&(t.isCustomEl?t.sliderMain.remove():t.sliderEl.remove(),t.mounted=!1)},createZoomer(){const{element:t,options:e,__modules__:o}=this;o.zoomer=Object.assign({},u,e.zoomer);const{zoomer:i}=o;i.mounted&&i.zoomerEl&&i.sliderMain.remove();const r=i.isCustomInEl=i.inEl&&w(i.inEl),l=i.isCustomOutEl=i.outEl&&w(i.outEl),d=r?z(i.inEl):document.createElement("div"),h=l?z(i.outEl):document.createElement("div");if(r||(d.classList.add(s),d.innerHTML='\n<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12 12">\n  <polygon points="12,5.5 6.5,5.5 6.5,0 5.5,0 5.5,5.5 0,5.5 0,6.5 5.5,6.5 5.5,12 6.5,12 6.5,6.5 12,6.5 "/>\n</svg>\n'),l||(h.classList.add(n),h.innerHTML='\n<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12 12">\n  <rect y="5.5" width="12" height="1"/>\n</svg>\n'),i.zoomerInEl=d,i.zoomerOutEl=h,i.disableOnBounds){const{bounds:t,maxRatio:o}=e;t&&1===this.ratio&&h.classList.add(a),this.ratio===o&&d.classList.add(a)}if((t=>{const{zoomRatio:e}=t.options,{zoomer:o}=t.__modules__,i=()=>t.zoom(e),s=()=>t.zoom(-e);o.zoomerInEl.addEventListener("click",i),o.zoomerOutEl.addEventListener("click",s),o.zoomerInEl.event=i,o.zoomerOutEl.event=s})(this),i.mounted=!0,!r||!l){const e=document.createElement("div");e.classList.add("zoomist-zoomer"),r||e.append(d),l||e.append(h),i.zoomerEl=e,t.append(e)}},destroyZoomer(){const{zoomer:t}=this.__modules__;if(!t||!t.mounted)return;const e=t=>{t.removeEventListener("click",t.event),t.event=void 0,t.classList.remove(a)};t.isCustomInEl?e(t.zoomerInEl):t.zoomerInEl.remove(),t.isCustomOutEl?e(t.zoomerOutEl):t.zoomerOutEl.remove(),t.zoomerEl&&t.zoomerEl.remove(),t.mounted=!1}};class M{constructor(t,e={}){if(!t)throw new Error("The first argument is required.");if(!w(t))throw new Error("This element is not exist.");this.element=z(t),this.options=Object.assign({},c,(t=>{if(!(t=>"object"==typeof t&&null!==t)(t))return!1;try{const{constructor:e}=t,{prototype:o}=e,{hasOwnProperty:i}=Object.prototype;return e&&o&&i.call(o,"isPrototypeOf")}catch(t){return!1}})(e)&&e),this.init()}init(){const{element:e,options:o}=this,{src:i}=o;if(e[t])return;e[t]=this;const s=o.src="string"==typeof(n=i)&&""!==n||E(i)?i:c.src;var n;const a=E(s)?s.src:e.getAttribute(s);if(!a)throw new Error(`Cannot find src from ${s}`);this.create(a)}create(t){if(!t)return;const{options:e}=this;if(this.url=t,this.data={},this.ratio=1,this.__events__=p,e.on)for(const[t,o]of Object.entries(e.on))this.__events__[t]=[o];this.mount()}mount(){if(this.mounted)return;const{element:t,options:e,data:o,url:i}=this,{fill:s,maxRatio:n,height:a}=e;this.wrapper&&this.wrapper.remove();const r=document.createElement("div");r.classList.add("zoomist-wrapper");const l=document.createElement("img");l.classList.add("zoomist-image"),l.src=i,l.onload=()=>{this.wrapper=r,this.image=l;const{naturalWidth:i,naturalHeight:d}=l,h=i/d;a&&(y(t,{width:"100%"}),"auto"===a?y(t,{paddingBottom:`${L(d/i*100)}%`}):v(a)?y(t,{height:a}):a.indexOf("%")>-1&&y(t,{paddingBottom:a}));const{offsetWidth:c,offsetHeight:m}=t;this.data.containerData={width:c,height:m,aspectRatio:c/m};const{containerData:u}=o;let p;"cover"!==s&&"contain"!==s&&"none"!==s&&(e.fill="cover"),"contain"!==e.fill&&(p=u.aspectRatio===h?"both":u.aspectRatio>h?"width":"height"),"contain"===e.fill&&(p=u.aspectRatio===h?"both":u.aspectRatio>h?"height":"width");const g="none"===e.fill?i:"both"===p||"width"===p?u.width:u.height*h,f="none"===e.fill?d:"both"===p||"height"===p?u.height:u.width/h,w=(u.width-g)/2,z=(u.height-f)/2;this.data.originImageData={naturalWidth:i,naturalHeight:d,aspectRatio:h,width:g,height:f,left:w,top:z},this.data.imageData=Object.assign({},this.data.originImageData),y(l,{width:g,height:f,left:w,top:z}),(!v(n)||n<=1)&&!1!==n&&(e.maxRatio=!1),R(this),this.mounted=!0,this.render()}}render(){const{element:t,wrapper:e,image:i}=this;t.classList.add(o),e.append(i),t.append(e),this.createModules(),this.emit("ready")}}return Object.assign(M.prototype,D,O),M}));
let controller = new ScrollMagic.Controller();
let firstTrigger;

// animation first-page

const mainTitle = document.querySelector('.header__title');
const imgFirst = document.querySelector('.main-img');

const firstTl = gsap.timeline({
	defaults: { duration: 1.2, ease: Power2.inOut },
});

firstTl.from(mainTitle, { opacity: 0, x: 80 });
firstTl.fromTo(
	imgFirst,
	{ opacity: 0, x: -180 },
	{ opacity: 1, x: -47 },
	'-=1.2'
);

// why page animation

const whyTitle = document.querySelector('.section-why__title');
const whyText = document.querySelector('.section-why__text');

const secondTl = gsap.timeline({
	defaults: { duration: 0.8, ease: Power2.inOut },
});

secondTl.from(whyTitle, { opacity: 0, y: 80 });
secondTl.from(whyText, { opacity: 0, y: 80 }, '-=0.6');

firstTrigger = new ScrollMagic.Scene({
	triggerElement: whyTitle,
	triggerHook: 0.9,
	reverse: false,
})
	.setTween(secondTl)
	.addTo(controller);

// for anim

const forTitle = document.querySelector('.section-for__title');
const forImg = document.querySelectorAll('.section-for__img');
const forNmae = document.querySelectorAll('.section-for__name');
const forText = document.querySelectorAll('.section-for__text');

const thirdTl = gsap.timeline({
	defaults: { duration: 0.25, ease: Power2.inOut },
});
let secondTrigger;

thirdTl.from(forTitle, { opacity: 0, y: 80 });
thirdTl.from(forImg, { opacity: 0, y: 80, stagger: 0.2 });
thirdTl.from(forNmae, { opacity: 0, y: 80, stagger: 0.2 }, '-=0.5');
thirdTl.from(forText, { opacity: 0, y: 80, stagger: 0.2 }, '-=0.5');

secondTrigger = new ScrollMagic.Scene({
	triggerElement: forTitle,
	triggerHook: 0.8,
	reverse: false,
})
	.setTween(thirdTl)
	.addTo(controller);

// garant anim

const garantImg = document.querySelectorAll('.garant');

garantImg.forEach(img => {
	const fourthTl = gsap.timeline({
		defaults: { duration: 1, ease: Power2.inOut },
	});
	let thirdTrigger;

	fourthTl.fromTo(
		img,
		{ scale: 0.5, opacity: 0 },
		{ scale: 1, opacity: 1 }
	);

	thirdTrigger = new ScrollMagic.Scene({
		triggerElement: img,
		triggerHook: 1,
		reverse: false,
	})
		.setTween(fourthTl)
		.addTo(controller);
});

// how anim

const how = document.querySelectorAll('.section-how__item');

how.forEach(item => {
	const howImg = item.querySelector('.section-how__img');
	const howNmae = item.querySelectorAll('.section-how__name');
	const howText = item.querySelectorAll('.section-how__text');

	const fiveTl = gsap.timeline({
		defaults: { duration: 0.3, ease: Power2.inOut },
	});
	let fiveTrigger;

	fiveTl.from(howImg, { opacity: 0, y: 20 });
	fiveTl.from(howNmae, { opacity: 0, y: 20 }, '-=0.3');
	fiveTl.from(howText, { opacity: 0, y: 20 }, '-=0.3');

	fiveTrigger = new ScrollMagic.Scene({
		triggerElement: item,
		triggerHook: 0.9,
		reverse: false,
	})
		.setTween(fiveTl)
		.addTo(controller);
});

// how-much anim

const muchAnim = document.querySelectorAll('.m-anim');

muchAnim.forEach(m => {
	const sixTl = gsap.timeline({
		defaults: { duration: 0.4, ease: Power2.inOut },
	});
	let sixTrigger;

	sixTl.from(m, { opacity: 0, y: 30 });

	sixTrigger = new ScrollMagic.Scene({
		triggerElement: m,
		triggerHook: 0.9,
		reverse: false,
	})
		.setTween(sixTl)
		.addTo(controller);
});

const iphoneTl = gsap.timeline({
	defaults: { duration: 0.4, ease: Power2.inOut },
});
let iphoneTrigger;

const iphone = document.querySelector('.section-much__img');

iphoneTl.from(iphone, { opacity: 0, x: -40 });

iphoneTrigger = new ScrollMagic.Scene({
	triggerElement: iphone,
	triggerHook: 0.9,
	reverse: false,
})
	.setTween(iphoneTl)
	.addTo(controller);

const maneTl = gsap.timeline({
	defaults: { duration: 0.4, ease: Power2.inOut },
});
let maneTrigger;

const mane = document.querySelector('.man-anim');

maneTl.from(mane, { opacity: 0, x: -40 });

maneTrigger = new ScrollMagic.Scene({
	triggerElement: mane,
	triggerHook: 0.9,
	reverse: false,
})
	.setTween(maneTl)
	.addTo(controller);

// review anim

const reviewAnim = document.querySelectorAll('.v-anim');

reviewAnim.forEach(v => {
	const sevenTl = gsap.timeline({
		defaults: { duration: 0.4, ease: Power2.inOut },
	});
	let sevenTrigger;

	sevenTl.from(v, { opacity: 0, y: 30 });

	sevenTrigger = new ScrollMagic.Scene({
		triggerElement: v,
		triggerHook: 1,
		reverse: false,
	})
		.setTween(sevenTl)
		.addTo(controller);
});

// advantage anim

const advantageAnim = document.querySelectorAll('.t-anim');

advantageAnim.forEach(a => {
	const cardsTl = gsap.timeline({
		defaults: { duration: 0.4, ease: Power2.inOut },
	});
	let cardsTrigger;

	cardsTl.from(a, { opacity: 0, x: -40 });

	cardsTrigger = new ScrollMagic.Scene({
		triggerElement: a,
		triggerHook: 1,
		reverse: false,
	})
		.setTween(cardsTl)
		.addTo(controller);
});

// good-section anim

const goodAnim = document.querySelectorAll('.good-anim');

goodAnim.forEach(g => {
	const textTl = gsap.timeline({
		defaults: { duration: 0.3, ease: Power2.inOut },
	});
	let cardsTrigger;

	textTl.from(g, { opacity: 0, y: 40 });

	cardsTrigger = new ScrollMagic.Scene({
		triggerElement: g,
		triggerHook: 0.95,
		reverse: false,
	})
		.setTween(textTl)
		.addTo(controller);
});

const lists = document.querySelector('.section-answers__row');

lists.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.section-answers__item')) {
		const item = target.closest('.section-answers__item');
		const panel = item.querySelector('.section-answers__hiden');
		const panels = document.querySelectorAll('.section-answers__hiden');

		if (!item.classList.contains('active')) {
			document.querySelectorAll('.section-answers__item').forEach(e => {
				e.classList.remove('active');
			});
			panels.forEach(e => {
				e.style.maxHeight = null;
			});
		}
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		} else {
			item.classList.add('active');
		}
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	}
});

const input = document.querySelector('#phone');
const iti = window.intlTelInput(input, {
	utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
});
window.iti = iti;


const teamSlide = document.querySelectorAll('.swiper-team__slide');
const zoomBtn = document.querySelectorAll('.zoom__btn');

teamSlide.forEach(i => {
	i.addEventListener('click', e => {
		const item = e.target.closest('.swiper-team__slide');
		item.classList.toggle('active');

		zoomBtn.forEach(btn =>
			btn.addEventListener('click', () => item.classList.remove('active'))
		);
	});
});