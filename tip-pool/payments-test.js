describe('Payment Functions', function() {

    beforeEach(function() {
      // Clear allPayments before each test
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      updateSummary();
    });
  
    it('should create a valid current payment object', function() {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      let payment = createCurPayment();
      expect(payment).toEqual({
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20
      });
    });
  
    it('should not create a payment object with invalid input', function() {
      billAmtInput.value = '';
      tipAmtInput.value = 20;
      let payment = createCurPayment();
      expect(payment).toBeUndefined();
    });
  
    it('should add a payment to allPayments', function() {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toBe(1);
    });
  
    it('should update the payment table', function() {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      expect(paymentTbody.innerHTML).toContain('$100');
      expect(paymentTbody.innerHTML).toContain('$20');
      expect(paymentTbody.innerHTML).toContain('%20');
    });
  
    it('should update the summary table', function() {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      expect(summaryTds[0].innerHTML).toBe('$100');
      expect(summaryTds[1].innerHTML).toBe('$20');
      expect(summaryTds[2].innerHTML).toBe('20%');
    });
  
  });
  