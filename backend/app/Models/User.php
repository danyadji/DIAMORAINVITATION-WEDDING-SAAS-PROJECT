<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
        'magic_link_token',
        'magic_link_expires_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'magic_link_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'magic_link_expires_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function invitation()
    {
        return $this->hasOne(Invitation::class);
    }
}
