function alcancia() {
    let guardarMonedas = 0;
    function contarMonedas(monedas) {
        guardarMonedas += monedas;
        console.log(`En tu alcancia tienes $${guardarMonedas}`)
    }
    return contarMonedas
}

const alcanciaTonny = alcancia();

alcanciaTonny(50)
alcanciaTonny(60)
alcanciaTonny(15)

const alcanciaMae = alcancia();

alcanciaMae(90)
alcanciaMae(80)
alcanciaMae(7)

