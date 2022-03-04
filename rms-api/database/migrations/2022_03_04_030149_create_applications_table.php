<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->string('cv')->nullable();
            $table->enum('status',['accepted','rejected','pending'])->default('pending');
            $table->unsignedBigInteger('job_id');
            $table->foreign('job_id')->references('id')->on('main_jobs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
