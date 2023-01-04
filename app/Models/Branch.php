<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'telephone',
        'email'
    ];

    public function appointment()
    {
        return $this->hasMany(Appointment::class);
    }

    //relacion uno a muchos


}
