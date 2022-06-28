// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    },

];


// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

/*let dicoList = document.createElement('dl');
let termeList = document.createElement('dt');
let definitionList = document.createElement('dd');
contenu.appendChild(dicoList);
contenu.appendChild(termeList);
contenu.appendChild(definitionList);

console.log(mots.terme)*/

const divContenu = document.getElementById('contenu');

let itemContenu = document.createElement('dl');
itemContenu.setAttribute('id', 'descriptionList');
divContenu.appendChild(itemContenu);

const descriptionList = document.getElementById('descriptionList');

for (let dictionnaire in mots) {
    
    let newTerme = document.createElement("dt");
    newTerme.textContent = mots[dictionnaire].terme;
    descriptionList.appendChild(newTerme);

    let newDefinition = document.createElement('dd');
    newDefinition.textContent = mots[dictionnaire].definition;
    descriptionList.appendChild(newDefinition);
}