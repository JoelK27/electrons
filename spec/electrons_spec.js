describe('Electrons around the core', function() {
    beforeEach(function() {
        electron = new Electrons();
    });
    
    it('should return the number 6 for the dices "1, 2, 3, 4, 5" rolled', function() {
        expect(electron.add('1, 2, 3, 4, 5')).toEqual('6');
    });

    it('should return the number 6 for the dices "2, 2, 3, 3" rolled', function() {
        expect(electron.add('2, 2, 3, 3')).toEqual('4');
    });

    it ('should return the number 2 for the dices "6, 6, 4, 4, 1, 3 " rolled', function() {
        expect(electron.add('6, 6, 4, 4, 1, 3')).toEqual('2');
    });

    it ('should return the number 2 for the dices "3, 5, 3, 5, 4, 2" rolled', function() {
        expect(electron.add('3, 5, 3, 5, 4, 2')).toEqual('12');
    });
});