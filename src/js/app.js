import {DonutMaker} from './DonutMaker.js';
import {HtmlWiringHelper} from './HtmlWiringHelper.js';
const donutMaker = new DonutMaker ();
const wiringHelper = new HtmlWiringHelper (donutMaker);
const donutCount = document.querySelector ('.donut-count');
const clickButton = document.querySelector ('.click-button');
const clickerMultiplier = document.querySelector ('.clicker-multiplier');
const multiplyAmountDisplay = document.querySelector (
  '.multiplier-amount-display'
);
const clickerMultiplierCost = document.querySelector (
  '.clicker-multiplier-cost'
);
const numberOfMultiplier = document.querySelector ('.number-of-multiplier');
const currentClickValue = document.querySelector ('.current-click-value');
const autoClick = document.querySelector ('.auto-click');
const autoClicker = document.querySelector ('.auto-clicker');
const autoClickerCost = document.querySelector ('.auto-clicker-cost');
const reset = document.querySelector ('.reset');
const bgModal = document.querySelector ('.bg-modal');
const about = document.querySelector ('.about');
const info = document.querySelector ('.info');
const aboutM = document.querySelector ('.about-modal');
const infoM = document.querySelector ('.info-modal');
clickButton.addEventListener ('click', () => {
  actionForClick ();
});
const actionForClick = () => {
  donutMaker.recordClick ();
  wiringHelper.updateDonutCountDisplay (donutCount);
};
clickerMultiplier.addEventListener ('click', () => {
  donutMaker.recordClickerMultiplier ();
  wiringHelper.updateDonutCountDisplay (donutCount);
  wiringHelper.updateMultiplierDisplay (multiplyAmountDisplay);
  wiringHelper.updateMultiplierCostDisplay (clickerMultiplierCost);
  wiringHelper.updateNumberOfMultiplierDisplay (numberOfMultiplier);
  wiringHelper.updateCurrentClickValue (currentClickValue);
});
autoClick.addEventListener ('click', () => {
  donutMaker.recordAutoClicker ();
  wiringHelper.updateDonutCountDisplay (donutCount);
  wiringHelper.updateAutoClickerDisplay (autoClicker);
  wiringHelper.updateAutoClickerCostDisplay (autoClickerCost);
});
reset.addEventListener ('click', () => {
  location.reload ();
});
bgModal.addEventListener ('click', () => {
  wiringHelper.hideNavPages (bgModal, aboutM, infoM);
});
about.addEventListener ('click', () => {
  wiringHelper.updateNavPages (aboutM);
  wiringHelper.updateNavPages (bgModal);
});
info.addEventListener ('click', () => {
  wiringHelper.updateNavPages (infoM);
  wiringHelper.updateNavPages (bgModal);
});
const autoClickerInterval = () => {
  setInterval (() => {
    if (donutMaker.getDonutCount () >= donutMaker.getClickerMultiplierCost ()) {
      clickerMultiplier.disabled = false;
    } else {
      clickerMultiplier.disabled = true;
    }
    if (donutMaker.getDonutCount () >= donutMaker.getAutoClickerCost ()) {
      autoClick.disabled = false;
    } else {
      autoClick.disabled = true;
    }
    for (let i = 0; i < donutMaker.getAutoClicker (); i++) {
      actionForClick ();
    }
  }, 1000);
};
window.onload = event => {
  wiringHelper.updateCurrentClickValue (currentClickValue);
  autoClickerInterval ();
};
