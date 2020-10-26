const showTable = document.querySelector('.show-table')
const navTable = document.querySelector('.nav-table-wrapper')

showTable.addEventListener('click', function(e) {
    navTable.classList.toggle('nav-table-hidden')
    console.log('worked' + e)

})