function createArticle() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;
	let articleElement = document.createElement('article');
	let h1Element = document.createElement('h1');
	let pElement = document.createElement('p');

	h1Element.textContent = title;
    pElement.textContent = content;
	articleElement.appendChild(h1Element);
	h1Element.appendChild(pElement);
	document.body.appendChild(articleElement);

}
document.addEventListener('DOMContentLoaded', function() {
    let titleInput = document.getElementById('createTitle');
    titleInput.setAttribute('placeholder', 'Enter title here');
	let contentInput = document.getElementById('createContent');
    contentInput.setAttribute('placeholder', 'Enter title here');
});

 