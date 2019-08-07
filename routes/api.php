<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/',function(){
    $user=['username'=>'santosh','login_status'=>'santosh'];
    return response()->json($user);
});
Route::get('/top_rated','MobileController@top_rated');
Route::get('/recent_launched','MobileController@recent_launched');
Route::get('/search','MobileController@search');
Route::get('/mobiles_by_brand','MobileController@by_brand');
