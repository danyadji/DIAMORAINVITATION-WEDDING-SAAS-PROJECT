<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Guest;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index(Request $request)
    {
        $invitation = $request->user()->invitation;
        
        if (!$invitation) {
            return response()->json([
                'data' => [],
            ]);
        }

        $guests = $invitation->guests()->orderBy('created_at', 'desc')->get();

        return response()->json([
            'data' => $guests,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'nullable|string|max:50',
            'phone' => 'nullable|string|max:20',
            'max_attendance' => 'nullable|integer|min:1|max:10',
        ]);

        $invitation = $request->user()->invitation;

        if (!$invitation) {
            return response()->json([
                'message' => 'Undangan tidak ditemukan',
            ], 404);
        }

        $guest = $invitation->guests()->create([
            'name' => $request->name,
            'category' => $request->category,
            'phone' => $request->phone,
            'max_attendance' => $request->max_attendance ?? 2,
        ]);

        return response()->json([
            'message' => 'Tamu berhasil ditambahkan',
            'data' => $guest,
        ], 201);
    }

    public function show(Request $request, Guest $guest)
    {
        $this->authorizeGuest($request, $guest);

        return response()->json([
            'data' => $guest,
        ]);
    }

    public function update(Request $request, Guest $guest)
    {
        $this->authorizeGuest($request, $guest);

        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'nullable|string|max:50',
            'phone' => 'nullable|string|max:20',
            'max_attendance' => 'nullable|integer|min:1|max:10',
        ]);

        $guest->update([
            'name' => $request->name,
            'category' => $request->category,
            'phone' => $request->phone,
            'max_attendance' => $request->max_attendance ?? 2,
        ]);

        return response()->json([
            'message' => 'Tamu berhasil diperbarui',
            'data' => $guest,
        ]);
    }

    public function destroy(Request $request, Guest $guest)
    {
        $this->authorizeGuest($request, $guest);

        $guest->delete();

        return response()->json([
            'message' => 'Tamu berhasil dihapus',
        ]);
    }

    private function authorizeGuest(Request $request, Guest $guest)
    {
        $invitation = $request->user()->invitation;
        
        if (!$invitation || $guest->invitation_id !== $invitation->id) {
            abort(403, 'Anda tidak memiliki akses ke data ini');
        }
    }
}
