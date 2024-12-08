const themeToggle = document.getElementById('themeToggle');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'green') {
    document.body.style.background = 'rgb(15, 240, 172)';
    document.body.style.color = 'white';
    document.body.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
    
    navbar.style.backgroundColor = 'rgb(15, 240, 172)';
    navbar.style.color = 'white';
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';

    footer.style.backgroundColor = 'rgb(15, 240, 172)';
    footer.style.color = 'white';
} else {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    document.body.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    
    navbar.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';

    footer.style.backgroundColor = ''; // Reset to default footer color
    footer.style.color = ''; // Reset to default footer text color
}

themeToggle.addEventListener('click', () => {
    if (document.body.style.background === 'rgb(15, 240, 172)') {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.body.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        
        footer.style.backgroundColor = ''; // Reset to default footer color
        footer.style.color = ''; // Reset to default footer text color
        
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.background = 'rgb(15, 240, 172)';
        document.body.style.color = 'white';
        document.body.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
        
        navbar.style.backgroundColor = 'rgb(15, 240, 172)';
        navbar.style.color = 'white';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';

        footer.style.backgroundColor = 'rgb(15, 240, 172)';
        footer.style.color = 'white';
        
        localStorage.setItem('theme', 'green');
    }
});
//------------------------------------------------------theme change-------------------------------------------------

const aftersmallScreen = document.querySelector('.aftersmallScreen');
const ulTools = document.getElementById('ulTools')
aftersmallScreen.addEventListener('click', () => {
    if (ulTools.style.display === 'flex') {
        ulTools.style.display = 'none'; 
    } else {
        ulTools.style.display = 'flex';
    }
});

// ----------------------------------contact---------------------------------
function contact() {
   
    const contacts = document.getElementById('contacts');

    contacts.scrollIntoView({ behavior: 'smooth' });
}

// ----------------------------search----------------------------------
const images = [
    { src: "https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww", category: "youtube" },

    { src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww", category: "soundcloud" },

    { src: "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww", category: "popup" },

    { src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww", category: "details" },

    { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", category: "youtube" },

    { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", category: "soundcloud" },

    { src: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3PCse04HxmDXn6LsY1MuQsh01AflW_wR0jwF4tYZ8QY=", category: "all" }, 
];


function display(filter){
    const searchResultConatiner = document.getElementById('searchResultConatiner');
    searchResultConatiner.innerHTML ='';  // i have clered the box from searchResultConatiner mens(emphty)

    //filter the img based on the categaory
    const filterImg = images.filter(image => {
        return filter === 'all' ||  image.category === filter;
    }) 

    filterImg.forEach(image =>{
        const img = document.createElement('img');
        img.classList.add('search-card');
        img.src = image.src;
        img.alt = 'error';
        searchResultConatiner.appendChild(img);
    });

}

const filterSpan = document.querySelectorAll('.search-filter span');

filterSpan.forEach(span =>{
    span.addEventListener('click',()=>{
        const filter = span.getAttribute('data-filter');
        display(filter);
    })
})

display('all');














