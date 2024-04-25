import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";
import cat4 from "../assets/cat-4.jpg";
import cat5 from "../assets/cat-5.jpg";
import cat6 from "../assets/cat-6.jpg";
import cat7 from "../assets/cat-7.jpg";
import cat8 from "../assets/cat-8.jpg";
import cat9 from "../assets/cat-9.jpg";
import cat10 from "../assets/cat-10.jpg";


export interface CardContent { 
    img: string; 
    titulo: string;
    text: string; 
}

export const listaCardsHome: Array<CardContent> = [
    // [0]
    {
        img: cat1,
        titulo: "Purificação",
        text: "Os gatos passam cerca de um terço de suas vidas se limpando. Isso não só os ajuda a manterem-se limpos, mas também regula a temperatura do corpo e estimula a circulação sanguínea."
    },
    {
        img: cat2,
        titulo: "Dorminhocos",
        text: "Em média, os gatos dormem de 12 a 16 horas por dia. Isso é essencial para sua saúde e bem-estar, pois ajuda na regeneração celular e na conservação de energia."
    },
    {
        img: cat3,
        titulo: "Caçadores natos",
        text: "Os gatos são excelentes caçadores devido aos seus instintos naturais. Mesmo gatos domésticos mantêm esse instinto de caça, brincando com brinquedos que simulam presas."
    },
    {
        img: cat4,
        titulo: "Alimentação",
        text: "Os gatos são conhecidos por terem preferências distintas em relação às texturas dos alimentos. Uns podem preferir alimentos úmidos, ja outros podem gostar mais de alimentos secos."
    },
    {
        img: cat5,
        titulo: "Heterocromia",
        text: "Os olhos dos gatos podem variar de cor, e alguns gatos têm heterocromia, o que significa que cada olho é de uma cor diferente."
    },
    {
        img: cat6,
        titulo: "Limpeza compulsiva",
        text: "Os gatos passam uma grande parte do dia se limpando. Eles têm papilas especiais em suas línguas que ajudam a remover a sujeira e os pelos soltos de sua pelagem."
    },
    {
        img: cat7,
        titulo: "Variedade vocal",
        text: "Os gatos têm uma ampla gama de sons que usam para se comunicar, desde miados até rosnados, ronronares e chiados. Cada som tem um significado diferente e pode variar entre indivíduos."
    },
    {
        img: cat8,
        titulo: "Visão noturna",
        text: "Os gatos têm uma excelente visão noturna, graças a uma camada especial em seus olhos chamada tapetum lucidum, que reflete a luz e melhora sua visão em condições de pouca luz."
    },
    {
        img: cat9,
        titulo: "Gatos famosos",
        text: "Ao longo da história, os gatos têm desempenhado papéis significativos na cultura humana. De figuras mitológicas a personagens de desenhos animados, como Garfield e o Gato de Cheshire, os gatos têm um lugar especial no coração das pessoas ao redor do mundo."
    },
    {
        img: cat10,
        titulo: "Comunicação facial",
        text: "Os gatos usam expressões faciais para se comunicar não apenas com outros gatos, mas também com os humanos. Por exemplo, um gato pode piscar lentamente para indicar confiança e conforto."
    },
  
];