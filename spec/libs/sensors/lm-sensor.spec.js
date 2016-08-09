const lmSensor = require('../../../libs/sensors/lm-sensor');

describe('lmSensor', () => {
  describe('convert', () => {
    it('Convert from lm-sensor data', () => {
      const source = `
acpitz-virtual-0
Adapter: Virtual device
temp1:        +62.0°C  (crit = +100.0°C)

thinkpad-isa-0000
Adapter: ISA adapter
fan1:        4208 RPM
temp1:        +62.0°C  
temp2:         +0.0°C  
temp3:         +0.0°C  
temp4:         +0.0°C  
temp5:         +0.0°C  
temp6:         +0.0°C  
temp7:         +0.0°C  
temp8:         +0.0°C  

coretemp-isa-0000
Adapter: ISA adapter
Core 0:       +56.1°C  (high = +95.0°C, crit = +105.0°C)
Core 2:       +52.0°C  (high = +95.0°C, crit = +105.0°C)
`.trim();

      const result = lmSensor.convert(source);

      expect(result).toEqual({
        temp1: 62.0,
        'Core 0': 56.1,
        'Core 2': 52.0,
      });
    });
  });
});
