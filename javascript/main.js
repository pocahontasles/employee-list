$(document).ready(function () {
        $.ajax({
            url: 'employee.json',
            dataType: 'json',
            method: 'GET',
            success: function (data) {
                console.log(data);
                for (var name in data) {
                    if (data[name].inoffice) {
                        employeeList.innerHTML += `<p class="in">${name}</p>`;
                    } else {
                        employeeList.innerHTML += `<p class="out">${name}</p>`;
                    }
                }
            },
            error: function (error) {
                alert(error);
            } ,

        });
});