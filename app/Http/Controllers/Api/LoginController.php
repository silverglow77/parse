<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
//use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function register(Request $request) {
        $this->validate($request, [
            'name'  => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:4'
        ]);

        $user = User::create([
            'name'  => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('authToken')->accessToken;

        return response()->json(['user' => $user, 'token' => $token], 201);
    }


    public function login (Request $request) {
        $login = $request->validate([
            'email' => 'required|string',
            'password'  => 'required|string'
        ]);

        if (!Auth::attempt( $login )) {
            return response()->json(['errors' => ['result' => 'Invalid login credentials']], 401);
        }

        $accessToken = Auth::user()->createToken('authToken')->accessToken;

        return response(['user' => Auth::user(), 'token' => $accessToken], 200 );
    }


    public function userdata () {
        return auth()->user();
    }


    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response(['message' => 'logout']);
    }


    public function user (Request $request) {
        return $request->user();
    }
}
