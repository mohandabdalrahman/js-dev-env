import { expect } from 'chai'
import jsdom from 'jsdom'
import { readFileSync } from 'fs'

describe('our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true)
	})
})

describe('index.html', () => {
	it('should say hello', (done) => {
		const index = readFileSync('./src/index.html', 'utf-8')
		jsdom.env(index, function (err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0]
			expect(h1.innerHtml).to.equal("Hello World?")
			done()
			window.close()
		})
	})
})
