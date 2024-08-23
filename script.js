let hrac_body = 0;
let pocitac_body = 0;
let kolo = 1;
const max_kola = 5;

function hodKostkou() {
    return Math.floor(Math.random() * 6) + 1;
}

function hra() {
    if (kolo <= max_kola) {
        let hrac_hod1 = hodKostkou();
        let hrac_hod2 = hodKostkou();
        let hrac_soucet = hrac_hod1 + hrac_hod2;

        let pocitac_hod1 = hodKostkou();
        let pocitac_hod2 = hodKostkou();
        let pocitac_soucet = pocitac_hod1 + pocitac_hod2;

        document.getElementById('hrac_kostka1').src = 'kostka' + hrac_hod1 + '.png';
        document.getElementById('hrac_kostka2').src = 'kostka' + hrac_hod2 + '.png';
        document.getElementById('pocitac_kostka1').src = 'kostka' + pocitac_hod1 + '.png';
        document.getElementById('pocitac_kostka2').src = 'kostka' + pocitac_hod2 + '.png';

        hrac_body += hrac_soucet;
        pocitac_body += pocitac_soucet;

        document.getElementById('vysledek').textContent = `Kolo ${kolo}: Hráč hodil ${hrac_soucet}, Počítač hodil ${pocitac_soucet}.`;
        document.getElementById('skore').textContent = `Hráč: ${hrac_body} | Počítač: ${pocitac_body}`;

        kolo++;

        if (kolo > max_kola) {
            let vysledekText;
            let skoreText = '';

            if (hrac_body > pocitac_body) {
                vysledekText = `Konec hry! Vyhrál hráč.`;
                skoreText = `<span class="vitez">Hráč: ${hrac_body} bodů</span> | <span class="porazeny">Počítač: ${pocitac_body} bodů</span>`;
            } else if (pocitac_body > hrac_body) {
                vysledekText = `Konec hry! Počítač vyhrál.`;
                skoreText = `<span class="porazeny">Hráč: ${hrac_body} bodů</span> | <span class="vitez">Počítač: ${pocitac_body} bodů</span>`;
            } else {
                vysledekText = `Konec hry! Remíza.`;
                skoreText = `Hráč: ${hrac_body} bodů | Počítač: ${pocitac_body} bodů`;
            }
            
            const vysledekElement = document.getElementById('vysledek');
            vysledekElement.innerHTML = `<span class="vysledek">${vysledekText}</span>`;
            
            const skoreElement = document.getElementById('skore');
            skoreElement.innerHTML = skoreText;

            // Zobrazit tlačítko pro novou hru
            const hodButton = document.getElementById('hodButton');
            const noveHraButton = document.getElementById('noveHraButton');

            if (hodButton && noveHraButton) {
                hodButton.style.display = 'none';
                noveHraButton.style.display = 'inline-block';
            }
        }
    }
}

function noveHra() {
    // Resetování proměnných
    hrac_body = 0;
    pocitac_body = 0;
    kolo = 1;

    // Resetování obrázků kostek
    document.getElementById('hrac_kostka1').src = 'kostka1.png';
    document.getElementById('hrac_kostka2').src = 'kostka1.png';
    document.getElementById('pocitac_kostka1').src = 'kostka1.png';
    document.getElementById('pocitac_kostka2').src = 'kostka1.png';

    // Resetování textu
    document.getElementById('vysledek').textContent = 'Klikněte na tlačítko pro hod kostkami.';
    document.getElementById('skore').textContent = 'Hráč: 0 | Počítač: 0';

    // Skrytí tlačítka pro novou hru a zobrazení tlačítka pro hod
    const hodButton = document.getElementById('hodButton');
    const noveHraButton = document.getElementById('noveHraButton');

    if (hodButton && noveHraButton) {
        noveHraButton.style.display = 'none';
        hodButton.style.display = 'inline-block';
    }
}
