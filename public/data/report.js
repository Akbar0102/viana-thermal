$(document).ready(function() {
    var table = $('#example').DataTable({
        scrollX: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: "/api/face",
            type: 'POST',
            dataType: 'json',
            data: {date: '2020-05-09'},
        },
        paging: true,
        language: {
            paginate: {
                next: '<i class="fa fa-chevron-right" ></i>',
                previous: '<i class="fa fa-chevron-left" ></i>'
            }
        },
        order:[[ 1, 'asc' ]],
        columns: [
            {data: "id_face"},
            {data: "device"},
            {data: "temperature"},
            {mRender: function ( data, type, row ) {
                return `<img class="mb-2 zoom" src="${row.image}" width="100" height="100"/>`}
            },
            {data: "date"},
            {data: "time"},
            {data: "type"}
        ],
    });
    table.on('order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        });
    }).draw();
} );