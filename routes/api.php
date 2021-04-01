<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/projects', [ProjectController::class, 'store']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/archive', [ProjectController::class, 'archive']);

Route::patch('/projects/{id}', [ProjectController::class, 'update']);
Route::patch('/projects/{id}/invoice', [ProjectController::class, 'newInvoice']);
Route::patch('/projects/{id}/finish', [ProjectController::class, 'finishProject']);

Route::delete('/projects/{id}', [ProjectController::class, 'delete']);
