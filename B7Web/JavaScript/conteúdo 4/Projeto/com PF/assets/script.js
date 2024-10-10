const char = createKnight('Ruan');
const monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char');
    document.querySelector('#monster');
)