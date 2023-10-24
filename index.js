const draggAndDrop = () => {
	const card = document.querySelector('.js-card'),
		cells = document.querySelectorAll('.js-cell')

	const dragStart = function () {
		setTimeout(() => {
			this.classList.add('hide')
		}, 0)
	}
	const dragEnd = function () {
		this.classList.remove('hide')
	}
	const dragOver = function (e) {
		e.preventDefault()
	}
	const dragEnter = function (e) {
		console.log('enter');
		e.preventDefault()
		this.classList.add('hovered')
	}
	const dragLeave = function () {
		console.log('leave');
		this.classList.remove('hovered')
	}
	const dragDrop = function () {
		this.appendChild(card)
		this.classList.remove('hovered')
	}
	cells.forEach((cell) => {
		cell.addEventListener('dragover', dragOver)
		cell.addEventListener('dragenter', dragEnter)
		cell.addEventListener('dragleave', dragLeave)
		cell.addEventListener('drop', dragDrop)
	})
	card.addEventListener('dragstart', dragStart)
	card.addEventListener('dragend', dragEnd)
}
draggAndDrop()