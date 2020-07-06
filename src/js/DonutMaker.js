export {DonutMaker};
class DonutMaker {
  constructor () {
    this._donutCount = 0;
    this._clickerMultiplierCost = 10;
    this._clickerMultiplier = 1;
    this._numberOfMultiplier = 0;
    this._multiplyAmountDisplay = 1.2;
    this._multiplierCost = 1.1;
    this._autoClickerCost = 100;
    this._autoClicker = 0;
    this._autoClickerIncrease = 1.1;
  }
  recordClick () {
    this._donutCount += this._clickerMultiplier;
  }
  recordClickerMultiplier () {
    if (this._donutCount - this._clickerMultiplierCost >= 0) {
      this._donutCount -= this._clickerMultiplierCost;
      this._numberOfMultiplier++;
      this._clickerMultiplier = Math.pow (1.2, this._numberOfMultiplier);
      this._multiplyAmountDisplay = Math.pow (
        1.2,
        this._numberOfMultiplier + 1
      );
      this._clickerMultiplierCost *= this._multiplierCost;
    }
  }
  recordAutoClicker () {
    if (this._donutCount - this._autoClickerCost >= 0) {
      this._donutCount -= this._autoClickerCost;
      this._autoClicker++;
      this._autoClickerCost *= this._autoClickerIncrease;
    }
  }
  getDonutCount () {
    return this._donutCount;
  }
  getNumberOfMultiplier () {
    return this._numberOfMultiplier;
  }
  getClickerMultiplierCost () {
    return this._clickerMultiplierCost;
  }
  getClickerMultiplier () {
    return this._clickerMultiplier;
  }
  getMultiplyAmountDisplay () {
    return this._multiplyAmountDisplay;
  }
  getMultiplierCost () {
    return this._multiplierCost;
  }
  getAutoClickerCost () {
    return this._autoClickerCost;
  }
  getAutoClicker () {
    return this._autoClicker;
  }
  getAutoClickerIncrease () {
    return this._autoClickerIncrease;
  }
}
