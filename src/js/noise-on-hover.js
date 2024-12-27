const noiseOnHoverSelector = '.noise-on-hover';

document.addEventListener('DOMContentLoaded', () =>
{
	const elements = document.querySelectorAll('[data-noise-on-hover]');

	for (var i = 0; i < elements.length; i++)
	{
		elements[i].addEventListener('mouseenter', (e) =>
		{
			var opacityAttributeValue = e.target.getAttribute('data-noise-on-hover-opacity');
			if (opacityAttributeValue === undefined || opacityAttributeValue === null) opacityAttributeValue = 0.1;
			e.target.querySelector(noiseOnHoverSelector).style.opacity = opacityAttributeValue;
		});

		elements[i].addEventListener('mousemove', (e) =>
		{
			var rect = e.target.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			const noiseCircleDiameter = Math.max(rect.width * 0.5, rect.height * 0.5);
			e.target.querySelector(noiseOnHoverSelector).style.maskImage = `radial-gradient(${noiseCircleDiameter}px ${noiseCircleDiameter}px at ${x}px ${y}px, white, transparent)`;
		});

		elements[i].addEventListener('mouseleave', (e) => e.target.querySelector(noiseOnHoverSelector).style.opacity = 0);
	}
});