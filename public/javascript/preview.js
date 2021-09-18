const url = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const contentContainer = document.getElementById('content-text')

if (url === '') {

    contentContainer.classList.add('content-text-short')

} else {

    contentContainer.classList.add('content-text')

}
