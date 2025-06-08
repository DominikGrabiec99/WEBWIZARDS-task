export const useTransitionHooks = () => {
  const setStyles = (el: Element, styles: Partial<CSSStyleDeclaration>) => {
    const htmlEl = el as HTMLElement
    for (const [key, value] of Object.entries(styles)) {
      if (value !== undefined) {
        // @ts-expect-error: dynamic assignment is valid here
        htmlEl.style[key] = value
      }
    }
  }

  const beforeEnter = (el: Element) => {
    setStyles(el, {
      height: '0',
      opacity: '0',
      overflow: 'hidden',
      display: 'inline-block'
    })
  }

  const enter = (el: Element) => {
    setStyles(el, {
      transition: 'height 0.3s ease, opacity 0.3s ease',
      height: el.scrollHeight + 'px',
      opacity: '1'
    })
  }

  const afterEnter = (el: Element) => {
    const htmlEl = el as HTMLElement
    htmlEl.style.height = 'auto'
  }

  const beforeLeave = (el: Element) => {
    setStyles(el, {
      height: el.scrollHeight + 'px',
      opacity: '1',
      overflow: 'hidden'
    })
  }

  const leave = (el: Element) => {
    const htmlEl = el as HTMLElement
    void htmlEl.offsetHeight

    setStyles(el, {
      transition: 'height 0.3s ease, opacity 0.3s ease',
      height: '0',
      opacity: '0'
    })
  }

  return {
    beforeEnter,
    enter,
    afterEnter,
    beforeLeave,
    leave
  }
}
