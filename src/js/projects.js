document.addEventListener('DOMContentLoaded', () =>
{
	const projectItemsContainer = document.querySelector('.project-items');
	const projectItemsObjects = [];
	const projectItemShowcase = document.querySelector('.project-item-showcase');
	const projectItemShowcaseImage = projectItemShowcase.querySelector('img');

	projectItemsObjects.push(
		new ProjectItem(
			'My topic on a forum',
			'Forum banner',
			'my-forum-banner'
		),
		new ProjectItem(
			'My own music player app',
			'UI/UX',
			'harmoonic'
		),
		new ProjectItem(
			"Luna's topic on a forum",
			'Forum banner',
			'luna-reverse-engineering'
		),
		new ProjectItem(
			"Refunder's topic on a forum",
			'Forum banner',
			'trusted-refund'
		),
		new ProjectItem(
			'My application to the mediacenter',
			'Post for social networks [mediacenter]',
			'studbit-test-work-2-stage'
		),
		new ProjectItem(
			'Student festival «Light up hearts»',
			'Posts for social networks [mediacenter]',
			'studbit-zs-2024'
		),
		new ProjectItem(
			'Psychological assistant for students',
			'Post for social networks [mediacenter]',
			'studbit-how-to-find-yourself-nov2024'
		),
		new ProjectItem(
			'Velcro & spiral curlers',
			'Products cards for marketplaces',
			'velcro-spiral-curlers'
		),
		new ProjectItem(
			'Branding for an SMS service',
			'Landing page and avatar',
			'proof-sms'
		),
		new ProjectItem(
			"Elvira's topic on a forum",
			'Forum banner',
			'elvira'
		),
		new ProjectItem(
			"Studying as a Maslenitsa fun",
			'Post for social networks [mediacenter]',
			'studbit-study-maslenitsa-mar2025'
		),
		new ProjectItem(
			'Seasonal graphics for OTP service',
			'Avatar and products cards',
			'rdx-otp-bot'
		)
	);

	for (let i = 0; i < projectItemsObjects.length; i++)
	{
		projectItemsContainer.innerHTML +=
			`<div class="project-item" data-noise-on-hover data-noise-on-hover-opacity="0.5">
				<div class="noise-on-hover"></div>
				<img class="project-item-image" src="./src/images/projects-thumbnails/${projectItemsObjects[i].imageFileName}.jpg">
				<div class="project-item-content-container">
					<div class="project-item-text-container">
						<h5 class="text-header-in-item text-almostwhite font-semibold">${projectItemsObjects[i].title}</h5>
						<p class="text-subtext-in-item text-semitransparent font-normal">${projectItemsObjects[i].description}</p>
					</div>
					<svg viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.65601 7C1.10372 7 0.656006 7.44772 0.656006 8C0.656006 8.55228 1.10372 9 1.65601 9V7ZM21.6731 8.70711C22.0636 8.31658 22.0636 7.68342 21.6731 7.29289L15.3092 0.928932C14.9186 0.538408 14.2855 0.538408 13.8949 0.928932C13.5044 1.31946 13.5044 1.95262 13.8949 2.34315L19.5518 8L13.8949 13.6569C13.5044 14.0474 13.5044 14.6805 13.8949 15.0711C14.2855 15.4616 14.9186 15.4616 15.3092 15.0711L21.6731 8.70711ZM1.65601 9H20.966V7H1.65601V9Z"/></svg>
				</div>
			</div>`;
	}

	const projectItemsElements = document.querySelectorAll('.project-item');

	for (let i = 0; i < projectItemsElements.length; i++)
	{
		projectItemsElements[i].addEventListener('click', (e) =>
		{
			projectItemShowcase.style.pointerEvents = 'all';
			projectItemShowcase.style.opacity = 1;
			projectItemShowcaseImage.style.pointerEvents = 'all';
			projectItemShowcaseImage.src = `./src/images/projects-showcases/${projectItemsObjects[Array.from(projectItemsContainer.children).indexOf(e.target)].imageFileName}.png`;
		});
	}

	projectItemShowcase.addEventListener('click', () =>
	{
		projectItemShowcase.style.pointerEvents = '';
		projectItemShowcase.style.opacity = '';
		projectItemShowcaseImage.style.pointerEvents = '';
	});

	projectItemShowcaseImage.addEventListener('click', (e) => e.stopPropagation());
});

class ProjectItem
{
	title = '';
	description = '';
	imageFileName = '';

	constructor(_title = '', _description = '', _imageFileName = '')
	{
		this.title = _title;
		this.description = _description;
		this.imageFileName = _imageFileName;
	}
}