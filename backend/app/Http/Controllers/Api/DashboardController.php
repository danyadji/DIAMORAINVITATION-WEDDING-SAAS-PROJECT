<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $invitation = $user->invitation;

        $stats = [
            'total_guests' => 0,
            'invitations_sent' => 0,
            'rsvp_confirmed' => 0,
            'comments' => 0,
        ];

        if ($invitation) {
            $stats['total_guests'] = $invitation->guests()->count();
            $stats['rsvp_confirmed'] = $invitation->guests()->where('rsvp_status', 'confirmed')->count();
        }

        return response()->json([
            'user' => $user,
            'invitation' => $invitation,
            'stats' => $stats,
        ]);
    }
}
