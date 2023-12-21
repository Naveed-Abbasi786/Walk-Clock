let hor = document.getElementById('hours')
let min = document.getElementById('minute')
let sec = document.getElementById('second')


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrt = 30 * htime + mtime / 2;
    mrt = 6 * mtime;
    scd = 6 * stime;

    hor.style.transform = `rotate(${hrt}deg)`;
    min.style.transform = `rotate(${mrt}deg)`;
    sec.style.transform = `rotate(${scd}deg)`;
}, 1000);