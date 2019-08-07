<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <form method='POST' action='/admin' class='form-control'>
    <table class='table table-striped'>
    <thead>
    <tr class='alert alert-success'>
    <th>model</th>
    <th>brand</th>
    <th>price</th>
    <th>ram_size</th>
    <th>storage</th>
    <th>os</th>
    <th>os_version</th>
    </tr>
    </thead>
    <tbody class='alert alert-primary'>
    <tr>
    <td>
    <input type='text' class='form-control' placeholder='Model'>
    </td>
    <td>
    <input type='text' class='form-control' placeholder='Brand'>
    </td>
    <td>
    <input type='number' class='form-control' placeholder='Price'>
    </td>
    <td>
    <input type='number' class='form-control' placeholder='Ram_size'>
    </td>
    <td>
    <input type='number' class='form-control' placeholder='Storage'>
    </td>
    <td>
    <select name='os'>
    <option value='android'>Android</option>
    <option value='iphonje'>IOS</option>
    <option value='windows'>Windows</option>
    </select>
    </td>
    <td>
    <input type='text' class='form-control' placeholder='Os_version'>
    </td>
    </tr>
    </tbody>
    </table>
    <div class='row'>
    <div class='col-lg-2 col-md-1 col-sm-0'></div>
    <div class='col-lg-8 col-md-10 col-sm-12'><p >Your mobile description</p>
    <textarea cols='80' rows='8' required placeholder='Description'></textarea>
    <button type='submit' class='btn btn-success'>Add Mobile</button></div>
    <div class='col-lg-2 col-md-1 col-sm-0'></div>
    </div>
    
    </form>
</body>
</html>
<!-- $table->bigIncrements('id');
            $table->string('model');
            $table->string('brand');
            $table->string('price');
            $table->string('ram_size');
            $table->string('storage');
            $table->string('os');
            $table->string('os_version');
            $table->text('description');
            $table->timestamps();
            $table->integer('user_id'); -->