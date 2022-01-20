const {test}=QUnit;
let tomb = [];
let tictactoe = new Kiertekel(tomb);

QUnit.module('TIC-TAC-TOE játék teszt!', function() {
    test('Létezik-e? (class -> Kiertekel)', function(assert) {
        assert.ok(Kiertekel,"Létezik!");
    });
    test('Létezik-e? (getVizszintes())', function(assert) {
        assert.ok(tictactoe.getVizszintes,"Létezik!");
    });
    test('Létezik-e? (getAtlo())', function(assert) {
        assert.ok(tictactoe.getAtlo,"Létezik!");
    });
    test('Létezik-e? (getFuggo())', function(assert) {
        assert.ok(tictactoe.getFuggo,"Létezik!");
    });
    test('Létezik-e? (ellenorzes())', function(assert) {
        assert.ok(tictactoe.ellenorzes,"Létezik!");
    });
});

QUnit.module('TIC-TAC-TOE vízszintes!', function() {
    test('Üres tictactoe', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---ꟷ---ꟷ---");
    });
    test('NEM NYERT', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "XOXꟷXOXꟷOXO");
    });
    test('X nyer 1/3', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "XXXꟷ---ꟷ---");
    });
    test('X nyer 2/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---ꟷXXXꟷ---");
    });
    test('X nyer 3/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---ꟷ---ꟷXXX");
    });
    test('O nyer 1/3', function (assert) {
        let tomb = [
            { ertek: "O"},
            { ertek: "O"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "OOOꟷ---ꟷ---");
    });
    test('O nyer 2/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "O"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---ꟷOOOꟷ---");
    });
    test('O nyer 3/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "O"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---ꟷ---ꟷOOO");
    });
});

QUnit.module('TIC-TAC-TOE függőleges!', function() {
    test('Üres tictactoe', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "---ꟷ---ꟷ---");
    });
    test('NEM NYERT', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "XOXꟷXOXꟷOXO");
    });
    test('X nyer 1/3', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "XXXꟷ---ꟷ---");
    });
    test('X nyer 2/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "---ꟷXXXꟷ---");
    });
    test('X nyer 3/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "---ꟷ---ꟷXXX");
    });
    test('O nyer 1/3', function (assert) {
        let tomb = [
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "OOOꟷ---ꟷ---");
    });
    test('O nyer 2/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "---ꟷOOOꟷ---");
    });
    test('O nyer 3/3', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggo(), "---ꟷ---ꟷOOO");
    });
});

QUnit.module('TIC-TAC-TOE átló!', function() {
    test('Üres tictactoe', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "---ꟷ---");
    });
    test('NEM NYERT', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "XOOꟷXOO");
    });
    test('X nyer 1/2', function (assert) {
        let tomb = [
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "XXXꟷ-X-");
    });
    test('X nyer 2/2', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "X"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "-X-ꟷXXX");
    });
    test('O nyer 1/2', function (assert) {
        let tomb = [
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "OOOꟷ-O-");
    });
    test('O nyer 2/2', function (assert) {
        let tomb = [
            { ertek: "-"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "O"},
            { ertek: "-"},
            { ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "-O-ꟷOOO");
    });

    test('NEM NYER SEHOGY', function (assert){
        let tomb = [
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"},
            { ertek: "X"},
            { ertek: "O"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.ellenorzes(), "");
    });

});