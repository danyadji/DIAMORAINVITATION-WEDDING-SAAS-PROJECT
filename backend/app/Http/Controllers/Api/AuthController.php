<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function requestLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            // Create new user
            $user = User::create([
                'name' => explode('@', $request->email)[0],
                'email' => $request->email,
                'password' => bcrypt(Str::random(32)),
            ]);

            // Create invitation for new user
            Invitation::create([
                'user_id' => $user->id,
            ]);
        }

        // Generate magic link token
        $token = Str::random(64);
        $user->update([
            'magic_link_token' => hash('sha256', $token),
            'magic_link_expires_at' => now()->addMinutes(30),
        ]);

        // In production, send email here
        // For development, return the token
        $magicLink = config('app.frontend_url', 'http://localhost:5173') . '/auth/magic-login?token=' . $token;

        // TODO: Send email with magic link
        // Mail::to($user->email)->send(new MagicLinkMail($magicLink));

        return response()->json([
            'message' => 'Link login telah dikirim ke email Anda',
            // Remove this in production!
            'debug_link' => $magicLink,
        ]);
    }

    public function magicLogin(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
        ]);

        $user = User::where('magic_link_token', hash('sha256', $request->token))
            ->where('magic_link_expires_at', '>', now())
            ->first();

        if (!$user) {
            return response()->json([
                'message' => 'Link sudah kadaluarsa atau tidak valid',
            ], 401);
        }

        // Clear magic link token
        $user->update([
            'magic_link_token' => null,
            'magic_link_expires_at' => null,
        ]);

        // Create API token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login berhasil',
            'token' => $token,
            'user' => $user->load('invitation'),
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout berhasil',
        ]);
    }
}
