//Convert Header Fixed with Scroll
window.onscroll = () => {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth> 991) {
        if (docScrollTop>100) {
            document.querySelector('header').classList.add('fixed');            
        } else {
            document.querySelector('header').classList.remove('fixed');
        }
    }
}

//Ham-burger

const hamburger = document.querySelector('.ham-burger');

hamburger.addEventListener('click', () =>{

    document.querySelector('.navbar').classList.toggle('show')

});

//Dark Light Mode

const btnMode = document.querySelector('#btn-dl');

btnMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    let darkmode = document.querySelector('.dark');

    if(darkmode){

        document.getElementById('btn-dl').innerText = 'Dark'; 
    } else {
        document.getElementById('btn-dl').innerText = 'Light'; 
    }

    


})