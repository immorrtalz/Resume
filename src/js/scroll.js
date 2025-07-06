const scrollToSections = [ '#hero', '#projects', '#experience', '#why' ];

document.addEventListener('DOMContentLoaded', () =>
{
	const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1;
	const isTablet = isMobile && window.innerWidth >= 1024;

	const notInScrollElements = document.querySelectorAll('.element-not-in-scroll');
	for (var i = 0; i < notInScrollElements.length; i++) notInScrollElements[i].classList.add('element-in-scroll');

	const heroSectionElement = document.getElementById('hero');
	const projectsSectionElement = document.getElementById('projects');
	const experienceSectionElement = document.getElementById('experience');
	const whySectionElement = document.getElementById('why');
	const contactsSectionElement = document.getElementById('contacts');
	const navbar = document.querySelector('navbar');
	const whyItemStackInnerContainers = document.querySelectorAll('.why-item-stack-inner-container');

	const navbarLinks = document.querySelectorAll('.navbar-link');
	const navbarLinksSections = [heroSectionElement, projectsSectionElement, experienceSectionElement, whySectionElement, contactsSectionElement];

	if (navbarLinks !== undefined && navbarLinks !== null)
	{
		navbarLinks.forEach(navbarLink =>
		{
			navbarLink.addEventListener('click', (e) =>
			{
				const targetElement = e.target.tagName === 'A' ? e.target : e.target.parentElement;
				const scrollToSectionIndex = Array.from(targetElement.parentElement.children).indexOf(targetElement);
				scrollTo(0, navbarLinksSections[scrollToSectionIndex].offsetTop - 150);
			});
		});
	}

	addEventListener("scroll", (e) =>
	{
		if (heroSectionElement.getBoundingClientRect().bottom < 0 && contactsSectionElement.getBoundingClientRect().top > window.innerHeight && !isMobile && !isTablet)
			navbar.classList.add('navbar-with-button');
		else navbar.classList.remove('navbar-with-button');

		var navbarLinkCurrentIndex = 0;

		for (var i = 1; i < navbarLinksSections.length; i++) if (navbarLinksSections[i].getBoundingClientRect().top < window.innerHeight * 0.5) navbarLinkCurrentIndex++;

		navbarLinks.forEach((link, i) =>
		{
			if (i === navbarLinkCurrentIndex) link.classList.add('navbar-link-current');
			else link.classList.remove('navbar-link-current');
		});

		for (var i = 0; i < whyItemStackInnerContainers.length; i++)
			whyItemStackInnerContainers[i].style.transform = `rotateZ(10deg) translateY(${whyItemStackInnerContainers[0].parentElement.getBoundingClientRect().top * 0.05 * (i % 2 == 0 ? 1 : -1)}%)`;
	});
});