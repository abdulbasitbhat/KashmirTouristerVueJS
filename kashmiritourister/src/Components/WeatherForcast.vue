<template>
    <div class="table-container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Min Temp C</th>
                    <th scope="col">Max Temp C</th>
                    <th scope="col">Forcast</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
   props:['day1','day2','day3']
}
</script>

<style>
th,
td {
    font-size: 12px;
    background: #f1f1f1;
}

.table-container {
    border-radius: 10px;
}
.table {
    background-color: lightgreen;
    border-radius: 10px;
    overflow: hidden;
  }
</style>