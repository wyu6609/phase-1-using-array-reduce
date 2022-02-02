const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const callBack = (currentValue, previousValue) => currentValue + previousValue;
const totalBatteries = batteryBatches.reduce(callBack);
