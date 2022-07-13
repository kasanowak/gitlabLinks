(function () {
    function changeMergeRequestTitleToLinkToEasyRedmine() {
        const mergeRequestStringPath = 'merge_requests/';

        if (!window.location.pathname.includes(mergeRequestStringPath)) {
            return;
        }

        const titleElement = document.querySelector('.merge-request-details .title');

        if (!titleElement) {
            return;
        }

        const regex = /(#[0-9]{1,7})|(er[0-9]{1,7})/g;
        const titleValue = titleElement.innerHTML;
        let ticketId = titleValue.match(regex)[0];

        if (!ticketId) {
            return;
        }
        ticketId = ticketId.replace(/(#)|(er)/g, '');

        titleElement.innerHTML = `<a href="https://projects.interianie.pl/issues/${ticketId}" target="_blank">${titleValue}</a>`;
    }

    changeMergeRequestTitleToLinkToEasyRedmine();
})()