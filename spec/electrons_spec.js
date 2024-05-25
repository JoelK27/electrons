describe('Electrons around the core', function() {
    beforeEach(function() {
        electron = new Electrons();
    });
    
    it('should return the number 6 for the dices "1, 2, 3, 4, 5" rolled', function() {
        expect(electrons.add('1, 2, 3, 4, 5')).toEqual('6');
    });

});