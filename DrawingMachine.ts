/** 뽑기기계에 대한 행동 */
interface DrawingMachineOperations {
  insertCoin(): void
  pullLever(): void
  ejectGift(): void
  getGift(): void
}

/** 뽑기기계에 해당 행동(안터페이스)을 참조한다. */
class DrawingMachine implements DrawingMachineOperations {
  insertCoin(): void {
    // ..
  }
  pullLever(): void {
    // ..
  }
  ejectGift(): void {
    // ..
  }
  getGift(): void {
    // ..
  }
}

abstract class DrawingMachineState implements DrawingMachineOperations {
  insertCoin(): DrawingMachineState {
    throw new Error('Method not implemented.')
  }
  pullLever(): DrawingMachineState {
    throw new Error('Method not implemented.')
  }
  ejectGift(): DrawingMachineState {
    throw new Error('Method not implemented.')
  }
  getGift(): DrawingMachineState {
    throw new Error('Method not implemented.')
  }

}

class IdleState extends DrawingMachineState {
  public insertCoin(): DrawingMachineState {
    return new CoinInsertedState();
  }
}

class CoinInsertedState extends DrawingMachineState {
  public pullLever(): DrawingMachineState {
    return new EjectingGiftState();
  }
}

class EjectingGiftState extends DrawingMachineState {
  public ejectGift(): DrawingMachineState {
    return new EjectedGiftState();
  }
}

class EjectedGiftState extends DrawingMachineState {
  public getGift(): DrawingMachineState {
    return new IdleState();
  }
}


class DrawingMachine2 implements DrawingMachineOperations {
  private _state: DrawingMachineState = new IdleState();
  constructor() {
    this.logCurrentState();
  }

  insertCoin(): void {
    this._state = this._state.insertCoin();
    this.logCurrentState();
  }

  pullLever(): void {
    this._state = this._state.pullLever();
    this.logCurrentState();
  }
  ejectGift(): void {
    this._state = this._state.ejectGift();
    this.logCurrentState();
  }
  getGift(): void {
    this._state = this._state.getGift();
    this.logCurrentState();
  }

  private logCurrentState(): void {
    console.log(this._state);
  }
}


console.log('Testing allowed Transitions - DrawingMachine1')
const drawingMachine = new DrawingMachine();
drawingMachine.insertCoin();
drawingMachine.pullLever();
drawingMachine.ejectGift();
drawingMachine.getGift();

console.log('Testing allowed Transitions - DrawingMachine2');
const drawingMachine2 = new DrawingMachine2();
drawingMachine2.insertCoin();
drawingMachine2.pullLever();
drawingMachine2.ejectGift();
drawingMachine2.getGift();