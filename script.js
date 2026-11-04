
// Traducciones de la página
const translations = {
    es: {
        welcome: "¡Bienvenidos a mi página, Yireth!",
        about: "Sobre mí",
        life: "Mi proyecto de vida",
        programming: "Mi proyecto de programación",

        aboutTitle: "Sobre mí",
        aboutText: `Yo soy Yireth, tengo 15 años, cumplo el 13 de junio,
        amo leer libros, cocinar y escuchar música. Mi género favorito
        es el heavy metal y el antipop. Mis dos cantantes favoritos son
        Billie Eilish y Michael Jackson, mi banda favorita es System of
        A Down, mi color favorito es el rojo y el negro, me encantan los
        animales, mis favoritos son los gatos y los caballos. Mi comida
        favorita es la lasaña y la avena trasnochada. En mi tiempo libre
        duermo o escribo. Tengo una gata que se llama Snowy y un perro
        que se llama Lana. No me gusta la remolacha ni el repollo.
        Cuando termine de estudiar quiero estudiar psicología. Amo el
        campo y salir a caminar al aire libre. Me quiero ir a vivir a
        Canadá junto a mi madre, quisiera ver Alaska y quiero manejar
        gran cantidad de dinero. ¡Y ya!`,

        lifeTitle: "Mi proyecto de vida",
        lifeText: `Quiero emprender mi carrera en psicología, es la que
        más me atrae por ahora. Antes de elegir esta pensaba en estudiar
        Derecho o Militar, aún considero esta idea. Todavía sigo pensando
        qué estudiar, ya que son muchas cosas las que me gustan. También
        considero irme más por el lado de los animales y estudiar Biología,
        porque jamás me han dado asco los animales, al contrario, me dan
        mucha ternura.`,

        goal1: "1. Quiero empezar mi carrera en la Universidad de Ibagué. Para ingresar necesito tener tecnólogos en salud. Ya empecé a manejar estos técnicos y también cursos de inglés para tener más facilidad de irme del país.",

        goal2: "2. Quiero empezar un ahorro para estar completamente lista para irme del país fácilmente.",

        goal3: "3. Para terminar, cuando ya esté manejando la carrera como tal, empezaría a abrir campañas contra el suicidio, la violencia intrafamiliar y un montón de cosas más que se ven.",

        programmingTitle: "Mi proyecto de programación",
        programmingText: "Próximamente compartiré aquí mi proyecto de programación."
    },

    en: {
        welcome: "Welcome to my page, Yireth!",
        about: "About me",
        life: "My life project",
        programming: "My programming project",

        aboutTitle: "About me",
        aboutText: `My name is Yireth, I am 15 years old and my birthday
        is on June 13th. I love reading books, cooking and listening to
        music. My favorite genres are heavy metal and antipop. My two
        favorite singers are Billie Eilish and Michael Jackson. My
        favorite band is System of A Down. My favorite colors are red
        and black. I love animals, especially cats and horses. My
        favorite food is lasagna and overnight oatmeal. In my free time
        I sleep or write. I have a cat named Snowy and a dog named Lana.
        I don't like beets or cabbage. When I finish studying, I want
        to study psychology. I love the countryside and going for walks
        outdoors. I want to move to Canada with my mother, visit Alaska
        and manage a lot of money. That's all!`,

        lifeTitle: "My life project",
        lifeText: `I want to pursue a career in psychology because it
        is the one that interests me the most right now. Before choosing
        it, I thought about studying Law or joining the military, and
        I still consider those options. I am still thinking about what
        to study because there are many things I like. I am also
        considering working with animals and studying Biology because
        animals have never disgusted me; instead, I find them very cute.`,

        goal1: "1. I want to start my career at the University of Ibagué. To get admitted, I need to complete technical studies in health. I have already started these courses, as well as English courses, to make it easier to move abroad.",

        goal2: "2. I want to start saving money so I can be completely ready to move to another country.",

        goal3: "3. Finally, once I am established in my career, I would like to create campaigns against suicide, domestic violence and many other social issues.",

        programmingTitle: "My programming project",
        programmingText: "I will share my programming project here soon."
    }
};


// Función para cambiar el idioma
function changeLanguage(language) {

    // Obtener todos los elementos que tienen data-label
    const elements = document.querySelectorAll("[data-label]");

    // Recorrer los elementos
    elements.forEach(element => {

        // Obtener la etiqueta de traducción
        const label = element.getAttribute("data-label");

        // Cambiar el contenido según el idioma
        if (translations[language][label]) {
            element.textContent = translations[language][label];
        }
    });

    // Cambiar el idioma del documento
    document.documentElement.lang = language;

    // Actualizar los botones activos
    document.querySelectorAll(".lang-button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });
}


// Detectar los clics en los botones
document.querySelectorAll(".lang-button").forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.language;

        changeLanguage(language);

    });

});


// Idioma inicial
changeLanguage("es");
