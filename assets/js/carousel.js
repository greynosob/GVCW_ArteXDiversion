document.addEventListener('DOMContentLoaded', function(){
  const carousels = document.querySelectorAll('.carousel')
  carousels.forEach(carousel=>{
    const items = carousel.querySelectorAll('.carousel-item')
    if(items.length<=1) return
    let idx = 0
    const show = i=>{
      const w = items[0].offsetWidth + parseInt(getComputedStyle(carousel).gap||8)
      carousel.scrollTo({left: w*i, behavior:'smooth'})
    }
    setInterval(()=>{
      idx = (idx+1)%items.length
      show(idx)
    },4000)
  })
})
