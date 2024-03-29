// Import all kol mafia methods
Object.assign(globalThis, require('kolmafia'));

/**
 * The main entry point for the community service script.
 * When running cs-skeleton from the KoL mafia command line,
 * this is where the code will begin executing.
 */
function main() {
    print('Running Community Service via cs-skeleton', 'green');
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

    tootOriole();
    setupItems();
    setupIotM();
    setupPulls();

    print('Ending setup', 'green');
}

function tootOriole() {
    // Visit toot oriole and sell pork gems
    visitUrl("tutorial.php?action=toot");
    use(1, Item.get(`letter from King Ralph XI`));
    use(1, Item.get(`pork elf goodies sack`));
    autosell(5, Item.get(`baconstone`));
    autosell(5, Item.get(`porquoise`));
    autosell(5, Item.get(`hamethyst`));
}

function setupItems() {
    // Get the astral pilsners out of the astral six-pack
    use(1, Item.get('astral six-pack'));

    // Get the toy accordion for casting songs
    if (availableAmount(Item.get('Toy accordion')) === 0) {
        // retrieveItem returns false if we don't get the item. Abort if that's the case.
        var gotAccordion = retrieveItem(Item.get('Toy accordion'));
        if (!gotAccordion) {
            abort('Failed to get toy accordion');
        }
    }
}

function setupIotM() {
    // Turn songboom to Total Eclipse of Your Meat
    if (availableAmount(Item.get('SongBoom™ BoomBox'))) {
        if (getProperty('boomBoxSong') !== 'Total Eclipse of Your Meat') {
            cliExecute('boombox meat');
        }
    }

    // send autumn-aton to the sleazy back alley 
    if (availableAmount(Item.get('Autumn-aton'))) {
        cliExecute('autumnaton send sleazy back alley');
    }

    // put tiny still-suit on gelatinous cubeling (won't unequip if another fam already has it)
    if (availableAmount(Item.get('Tiny Stillsuit')) && haveFamiliar(Familiar.get('Gelatinous Cubeling'))) {
        equip(Item.get('Tiny Stillsuit'), Familiar.get('Gelatinous Cubeling'));
    }

    // setup saber to familiar weight
    if (parseInt(getProperty('_saberMod')) === 0 && availableAmount(Item.get('Fourth of May Cosplay Saber'))) {
        visitUrl('main.php?action=may4');
        runChoice(4);
    }

    // Put the myst mumming trunk outfit on cookbook bat
    if (haveFamiliar(Familiar.get('Cookbookbat')) && availableAmount(Item.get('mumming trunk')) && getProperty('_mummeryUses').includes('5')) {
        useFamiliar(Familiar.get('Cookbookbat'));
        cliExecute('mummery myst');
    }

    // setup model train set 
    if (availableAmount(Item.get('Model Train Set'))) {
        use(Item.get('Model Train Set'));
        // Allstat -> coal -> mys -> meat -> mp -> ore -> ml -> hotres
        visitUrl('choice.php?pwd&whichchoice=1485&option=1&slot[0]=3&slot[1]=8&slot[2]=16&slot[3]=1&slot[4]=2&slot[5]=20&slot[6]=13&slot[7]=4', true, true);
    }

    // buy a red rocket if have VIP key
    if (availableAmount(Item.get('Clan VIP Lounge key')) && availableAmount(Item.get('red rocket')) === 0) {
        cliExecute('buy red rocket');
    }
}

function setupPulls() {
    // Buy, pull, and use borrowed time if not already done
    if (getProperty('_borrowedTimeUsed') === false) {
        buyUsingStorage(1, 20000, Item.get('borrowed time'));
        takeStorage(1, Item.get('borrowed time'));
        use(1, Item.get('borrowed time'));
    }
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