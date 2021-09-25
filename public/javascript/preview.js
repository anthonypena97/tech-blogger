textSize = () => {

    const url = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const contentContainer = document.querySelectorAll('[id=content-text]');


    if (url === '') {

        for (var i = 0; i < contentContainer.length; ++i) {
            contentContainer[i].classList.add('content-text-short');
        }

    } else {

        for (var i = 0; i < contentContainer.length; ++i) {
            contentContainer[i].classList.add('content-text');
        }

    }

}


window.onload = textSize();