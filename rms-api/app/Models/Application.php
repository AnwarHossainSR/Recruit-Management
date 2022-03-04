<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;
    protected $fillable = ['email','slug','status','cv','job_id'];
    public function job()
    {
        return $this->belongsTo('App\Models\MainJob');
    }
}
