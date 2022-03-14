const elektroshtepiake = ['Hekur', 'Lavatrice', 'TV', 'Lavastovilje', 'Dush', 'Tharese']


function displayAllItems() {
    document.getElementById('all-items').innerHTML = '<h4>' + elektroshtepiake.join(', ') + '</h4>'
}

function displayAvailableItems() {
    if (elektroshtepiake.length > 0) {
        document.getElementById('available-items').innerHTML = elektroshtepiake.join(', ');
    }
    else {
        document.getElementById('available-items').innerHTML = 'There are no items left.'
    }
}

function removeItems() {
    var nr = -3;
    var removed_items = elektroshtepiake.splice(nr);
    if (elektroshtepiake.length > 0) {
        document.getElementById('available-items').innerHTML = elektroshtepiake.join(', ');
    }
    else {
        document.getElementById('available-items').innerHTML = 'There are no items left.'
    }
    if (removed_items.length > 0) {
        document.getElementById('removed-items').innerHTML = removed_items.join(', ');

    }
    else {
        document.getElementById('removed-items').innerHTML = 'There is nothing left to remove.';
    }

}