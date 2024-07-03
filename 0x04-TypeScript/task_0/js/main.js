var std1 = {
    firstName: "Adam",
    lastName: "Smith",
    age: 14,
    location: "CASA",
};
var std2 = {
    firstName: "Brik",
    lastName: "Asiggi",
    age: 16,
    location: "CASA",
};
var studentsList = [std1, std2];
function renderTable(data) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    data.forEach(function (item) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = item.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement('td');
        locationCell.textContent = item.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
        table.appendChild(tbody);
    });
}
renderTable(studentsList);
