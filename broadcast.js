export class FormBroadcast extends HTMLFormElement {
	channel = 'default'
	#chan

	#formSubmit = e => {
		e.preventDefault()
		let data = Object.fromEntries(new FormData(this).entries())
		this.#chan.postMessage(data)
	}

	connectedCallback() {
		this.channel = this.getAttribute('action') || this.channel
		this.#chan = new BroadcastChannel(this.channel)
		this.addEventListener('submit', this.#formSubmit)
	}

	disconnectedCallback() {
		this.#chan.close()
	}
}
customElements.define('do-broadcast', FormBroadcast, { extends: 'form' })
