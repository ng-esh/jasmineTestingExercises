describe('Helper Functions', function() {

    beforeEach(function() {
      allPayments = {
        payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
        payment2: { billAmt: '200', tipAmt: '30', tipPercent: 15 }
      };
    });
  
    it('should sum the payment totals correctly', function() {
      expect(sumPaymentTotal('billAmt')).toBe(300);
      expect(sumPaymentTotal('tipAmt')).toBe(50);
      expect(sumPaymentTotal('tipPercent')).toBe(35);
    });
  
    it('should calculate the tip percent correctly', function() {
      expect(calculateTipPercent(100, 20)).toBe(20);
      expect(calculateTipPercent(200, 30)).toBe(15);
    });
  
  });
  