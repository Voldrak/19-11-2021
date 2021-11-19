document.addEventListener('DOMContentLoaded', () => {
    const w = document.querySelector('.w');
    const a = document.querySelector('.a');
    const s = document.querySelector('.s');
    const d = document.querySelector('.d');

    const pg = document.querySelector('.pg');
    const container = document.querySelector('.container');

//    let coords = pg.getBoundingClientRect();

    let moveleft = 600;
    let movetop = 300;

    pg.style.left = `${moveleft}px`;
    pg.style.top = `${movetop}px`;

    w.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if (movetop > 0 ) {
            pg.classList.toggle('up');
            movetop = movetop - 100;
            pg.style.top = `${movetop}px`;
            setTimeout (() => pg.classList.toggle('up'),800);
        }
        
    });
    a.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (moveleft > 0 ) {
            pg.classList.toggle('left');
            moveleft = moveleft - 100;
            pg.style.left = `${moveleft}px`;
            setTimeout (() => pg.classList.toggle('left'),800);
        }
    });

    d.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (moveleft < 1400 ) {
            pg.classList.toggle('right');
            moveleft = moveleft + 100;
            pg.style.left = `${moveleft}px`;
            setTimeout (() => pg.classList.toggle('right'),800);
        }
    });
    s.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (movetop < 750 ) {
            pg.classList.toggle('down');
            movetop = movetop + 100;
            pg.style.top = `${movetop}px`;
            setTimeout (() => pg.classList.toggle('down'),800);
        }
    });
})
