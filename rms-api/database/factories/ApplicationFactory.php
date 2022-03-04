<?php

namespace Database\Factories;

use App\Models\MainJob;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email'=>$this->faker->unique->safeEmail,
            'slug'=>$this->faker->unique->slug,
            'status'=>$this->faker->randomElement(['pending','accepted','rejected']),
            'cv'=>$this->faker->randomElement(['http://localhost:8000/files/applications/default.pdf']),
            'job_id'=>$this->faker->randomElement(MainJob::where('status','active')->pluck('id')->toArray()),
            'created_at'=>now(),
            'updated_at'=>now()
        ];
    }
}
