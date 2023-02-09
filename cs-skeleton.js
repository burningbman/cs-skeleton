const {
    print,
    getProperty,
    myLevel
} = require('kolmafia');

/**
 * The main entry point for the community service script.
 * When running cs-skeleton from the KoL mafia command line,
 * this is where the code will begin executing.
 */
function main() {
    print('Running Community Service', 'green');
    doSetup();
    doCoilWire();
    doLeveling();
    doMuscleTest();
    doHitpointsTest();
    doMysticalityTest();
    doMoxieTest();
    doNoncombatTest();
    doHotResistanceTest();
    doFamiliarWeightTest();
    doWeaponDamageTest();
    doSpellDamageTest();
    doBoozeAndItemDropTest();
    doDonateBody();
    print('Done running Community Service', 'green');
}

/**
 * Take care of anything that should be done before coiling wire
 * This could be pulls, setting IotM modes, etc.
 */
function doSetup() {
    print('Starting setup', 'green');
    print('Ending setup', 'green');
}

/**
 * Do the coil wire test. And anything that should be done before or after.
 * For example, killing a guaranteed sausage goblin.
 */
function doCoilWire() {
    // If Coil Wire is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Coil Wire')) {
        print('Coil Wire test already completed', 'green');
        return;
    }

    print('Starting coil wire', 'green');
    print('Ending coil wire', 'green');
}

/**
 * Everything required to level up before the stat tests
 */
function doLeveling() {
    // If I'm already level 13, don't run leveling
    if (myLevel() >= 13) {
        print('Leveling already completed', 'green');
        return;
    }

    print('Starting leveling', 'green');
    print('Ending leveling', 'green');
}

/**
 * Buff up for and perform the muscle stat test
 */
function doMuscleTest() {
    // If Muscle test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Feed The Children')) {
        print('Muscle test already completed', 'green');
        return;
    }

    print('Starting muscle', 'green');
    print('Ending muscle', 'green');
}

/**
 * Buff up for and perform the hitpoints test
 */
function doHitpointsTest() {
    // If HP test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Donate Blood')) {
        print('HP test already completed', 'green');
        return;
    }

    print('Starting hitpoints', 'green');
    print('Ending hitpoints', 'green');
}

/**
 * Buff up for and perform the mysticality test
 */
function doMysticalityTest() {
    // If Mysticality test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Build Playground Mazes')) {
        print('Mysticality test already completed', 'green');
        return;
    }

    print('Starting mysticality', 'green');
    print('Ending mysticality', 'green');
}

/**
 * Buff up for and perform the moxie test
 */
function doMoxieTest() {
    // If Moxie test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Feed Conspirators')) {
        print('Moxie test already completed', 'green');
        return;
    }

    print('Starting moxie', 'green');
    print('Ending moxie', 'green');
}

/**
 * Buff up for and perform the noncombat test
 */
function doNoncombatTest() {
    // If Noncombat test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Be a Living Statue')) {
        print('Noncombat test already completed', 'green');
        return;
    }

    print('Starting noncombat', 'green');
    print('Ending noncombat', 'green');
}

/**
 * Buff up for and perform the hot resistance test
 */
function doHotResistanceTest() {
    // If Hot Resistance test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Clean Steam Tunnels')) {
        print('Hot Resistance test already completed', 'green');
        return;
    }

    print('Starting hot resistance', 'green');
    print('Ending hot resistance', 'green');
}

/**
 * Buff up for and perform the familiar weight test
 */
function doFamiliarWeightTest() {
    // If Familiar Weight test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Breed More Collies')) {
        print('Familiar Weight test already completed', 'green');
        return;
    }

    print('Starting familiar weight', 'green');
    print('Ending familiar weight', 'green');
}

/**
 * Buff up for and perform the weapon damage test
 */
function doWeaponDamageTest() {
    // If Weapon Damage test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Reduce Gazelle Population')) {
        print('Weapon Damage test already completed', 'green');
        return;
    }

    print('Starting weapon damage', 'green');
    print('Ending weapon damage', 'green');
}

/**
 * Buff up for and perform the spell damage test
 */
function doSpellDamageTest() {
    // If Spell Damage test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Make Sausage')) {
        print('Spell Damage test already completed', 'green');
        return;
    }

    print('Starting spell damage', 'green');
    print('Ending spell damage', 'green');
}

/**
 * Buff up for and perform the booze/item drop test
 */
function doBoozeAndItemDropTest() {
    // If Booze/Spell Drop test is already done, don't run this function
    if (getProperty('csServicesPerformed').includes('Make Margaritas')) {
        print('Booze and Item test already completed', 'green');
        return;
    }

    print('Starting booze and item drop', 'green');
    print('Ending booze and item drop', 'green');
}

/**
 * Finish the run
 */
function doDonateBody() {
    // If body already donated, don't run this function
    if (getProperty('kingLiberated') === 'true') {
        print('Body already donated', 'green');
        return
    };

    print('Starting donate body', 'green');
    print('Ending donate body', 'green');
}

// make our main method visible to KoL Mafia
module.exports.main = main