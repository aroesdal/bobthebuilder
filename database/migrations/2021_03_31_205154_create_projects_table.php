<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('project_name')->unique();
            $table->boolean('is_active');
            $table->timestamp('active_at')->nullable()->default(null);
            $table->boolean('completed')->default(false);
            $table->softDeletes();
        });

        Schema::create('invoices', function (Blueprint $table) {
           $table->id();
           $table->timestamps();
           $table->integer('price_per_hour');
           $table->foreignId('project_id')->constrained();
        });

        Schema::create('project_works', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('time_spent_in_seconds');
            $table->foreignId('project_id')->constrained();
            $table->unsignedBigInteger('invoice_id')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_works');
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('projects');
    }
}
