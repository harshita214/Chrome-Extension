class Calculator {
  constructor(POTele, COTele) {
    this.POTele = POTele
    this.COTele = COTele
    this.clear()
  }

  clear() {
    this.Curr = ''
    this.prev = ''
    this.operation = undefined
  }

  delete() {
    this.Curr = this.Curr.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.Curr.includes('.')) return
    this.Curr = this.Curr.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.Curr === '') return
    if (this.prev !== '') {
      this.compute()
    }
    this.operation = operation
    this.prev = this.Curr
    this.Curr = ''
  }

  compute() {
    let compute
    const prev = parseFloat(this.prev)
    const current = parseFloat(this.Curr)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        compute = prev + current
        break
      case '-':
        compute = prev - current
        break
      case '*':
        compute = prev * current
        break
      case '÷':
        compute = prev / current
        break
      default:
        return
    }
    this.Curr = compute
    this.operation = undefined
    this.prev = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let IDisplay
    if (isNaN(integerDigits)) {
      IDisplay = ''
    } else {
      IDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${IDisplay}.${decimalDigits}`
    } else {
      return IDisplay
    }
  }

  updateDisplay() {
    this.COTele.innerText =
      this.getDisplayNumber(this.Curr)
    if (this.operation != null) {
      this.POTele.innerText =
        `${this.getDisplayNumber(this.prev)} ${this.operation}`
    } else {
      this.POTele.innerText = ''
    }
  }
}


const numbut = document.querySelectorAll('[datanum]')
const operbut = document.querySelectorAll('[dataopr]')
const eqbut = document.querySelector('[dataeq]')
const delbut = document.querySelector('[datadel]')
const clearbutall = document.querySelector('[dataclr]')
const POTele = document.querySelector('[data-prev]')
const COTele = document.querySelector('[data-curr]')

const calculator = new Calculator(POTele, COTele)

numbut.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operbut.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

eqbut.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

clearbutall.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

delbut.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})