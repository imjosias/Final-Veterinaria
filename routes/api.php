<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ServiceController;

use App\Models\Appointment;
use App\Models\Service;
use App\Models\TypeService;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, "register"]);
Route::post('login', [AuthController::class, "login"]);

//some routes of branches are out of the sanctum require because they dont need credentials, its public info about the vet.

Route::get("/branches", [BranchController::class, "index"]);
Route::get("/branches/{show}", [BranchController::class, "show"]);

Route::middleware(['auth:sanctum'])->group(function () {
    
    Route::get('user', [AuthController::class, "user"]);
    Route::get('logout', [AuthController::class, "logout"]);

    Route::get("/pets", [PetController::class, "index"]);
    Route::post("/pets  ", [PetController::class, "store"]);
    Route::put("/pets/{pet}", [PetController::class, "update"]);
    Route::get("/pets/{show}", [PetController::class, "show"]);
    Route::delete("/pets/{pet}", [PetController::class, "destroy"]);

    Route::post("/branches", [BranchController::class, "store"]);
    Route::put("/branches/{branch}", [BranchController::class, "update"]);
    Route::delete("/branches/{branch}", [BranchController::class, "destroy"]);

    Route::get("/services", [ServiceController::class, "index"]);
    Route::post("/services", [ServiceController::class, "store"]);
    Route::put("/services/{service}", [ServiceController::class, "update"]);
    Route::get("/services/{service}", [ServiceController::class, "show"]);
    Route::delete("/services/{service}", [ServiceController::class, "destroy"]);

    Route::get("/appointments", [AppointmentController::class, "index"]);
    Route::post("/appointments", [AppointmentController::class, "store"]);
    Route::put("/appointments/{appointment}", [AppointmentController::class, "update"]);
    Route::get("/appointments/{id}", [AppointmentController::class, "show"]);
    Route::delete("/appointments/{appointment}", [AppointmentController::class, "destroy"]);
});

/* Route::get("/customers", [CustomerController::class, "index"]);
Route::post("/customers", [CustomerController::class, "store"]);
Route::put("/customers/{customer}", [CustomerController::class, "update"]);
Route::get("/customers/{customer}", [CustomerController::class, "show"]);
Route::delete("/customers/{customer}", [CustomerController::class, "destroy"]);
 */

/* Route::post("/appointments/services", [AppointmentController::class, "attach"]); */

/*Ro ute::post("/customers/appointments", [CustomerController::class, "attach"]);
Route::post("/customers/appointments/detach", [CustomerController::class, "detach"]);
Route::post("/appointments/custormers", [AppointmentController::class, "customers"]); */
