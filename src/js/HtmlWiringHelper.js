export {HtmlWiringHelper};
class HtmlWiringHelper {
  constructor (donutMaker) {
    this.donutMaker = donutMaker;
  }
  updateDonutCountDisplay (element) {
    element.innerText =
      Math.round (this.donutMaker.getDonutCount () * 1000) / 1000;
    document.title = element.innerText + ' Donuts!';
  }
  updateMultiplierDisplay (element) {
    element.innerText =
      Math.round (this.donutMaker.getMultiplyAmountDisplay () * 100) / 100;
  }
  updateCurrentClickValue (element) {
    element.innerText =
      Math.round (this.donutMaker.getClickerMultiplier () * 100) / 100;
  }
  updateMultiplierCostDisplay (element) {
    element.innerText =
      Math.round (this.donutMaker.getClickerMultiplierCost () * 100) / 100;
  }
  updateNumberOfMultiplierDisplay (element) {
    element.innerText = Math.round (this.donutMaker.getNumberOfMultiplier ());
  }
  updateAutoClickerDisplay (element) {
    element.innerText = this.donutMaker.getAutoClicker ();
  }
  updateAutoClickerCostDisplay (element) {
    element.innerText =
      Math.round (this.donutMaker.getAutoClickerCost () * 100) / 100;
  }
  updateNavPages (element) {
    element.style.display = 'block';
  }
  hideNavPages (e1, e2, e3, e4) {
    e1.style.display = 'none';
    e2.style.display = 'none';
    e3.style.display = 'none';
    e4.style.display = 'none';
  }
}
