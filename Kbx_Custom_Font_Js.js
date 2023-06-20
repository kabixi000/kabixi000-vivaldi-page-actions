// 強制的にフォントを明朝体へ変更し、フォントサイズを調整する
// Force the font to change to serif and adjust the font size

(()=>{
  const elements = ["body", "h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "a", "span", "input", "button", "textarea", "select"]

  elements.forEach((element) => {
    const all = document.getElementsByTagName(element)

    for (let item of all) {
      item.style.fontFamily = 'serif'

      const currentFontSize = parseFloat(getComputedStyle(item, null).getPropertyValue('font-size'))

      const newFontSize = currentFontSize * 1.09

      item.style.fontSize = `${newFontSize}px`
    }
  })
})()
