<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMobilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('model');
            $table->string('brand');
            $table->string('price');
            $table->string('ram_size');
            $table->string('storage');
            $table->string('os');
            $table->string('os_version');
            $table->text('description');
            $table->timestamps();
            $table->integer('user_id');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mobiles');
    }
}
